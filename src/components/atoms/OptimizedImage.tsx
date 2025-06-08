'use client'

import Image from 'next/image'
import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  onLoad?: () => void
  onError?: () => void
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  sizes = '100vw',
  priority = false,
  quality = 80,
  fill = false,
  placeholder = 'empty',
  blurDataURL,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Gerar srcSet para diferentes formatos
  const generateSrcSet = useCallback((baseSrc: string) => {
    const basePath = baseSrc.replace(/\.(png|jpg|jpeg)$/i, '')
    const extension = baseSrc.match(/\.(png|jpg|jpeg)$/i)?.[1]?.toLowerCase()
    
    if (!extension) return baseSrc

    // Tamanhos responsivos
    const responsiveSizes = [300, 600, 1200, 1920]
    
    // Gerar srcSet para WebP
    const webpSrcSet = responsiveSizes
      .map(size => `${basePath}_${size}w.webp ${size}w`)
      .join(', ')
    
    // Gerar srcSet para AVIF
    const avifSrcSet = responsiveSizes
      .map(size => `${basePath}_${size}w.avif ${size}w`)
      .join(', ')

    return {
      avif: avifSrcSet,
      webp: webpSrcSet,
      original: baseSrc
    }
  }, [])

  const handleLoad = useCallback(() => {
    setIsLoading(false)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setIsLoading(false)
    setHasError(true)
    onError?.()
  }, [onError])

  // Verificar se existem versões otimizadas
  const srcSets = generateSrcSet(src)
  const hasOptimizedVersions = typeof srcSets === 'object'

  // Gerar placeholder blur simples
  const generateBlurDataURL = useCallback((width: number = 10, height: number = 10) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    
    if (ctx) {
      // Gradiente simples para placeholder
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#f3f4f6')
      gradient.addColorStop(1, '#e5e7eb')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }
    
    return canvas.toDataURL()
  }, [])

  const defaultBlurDataURL = blurDataURL || generateBlurDataURL()

  if (hasError) {
    return (
      <div 
        className={cn(
          'flex items-center justify-center bg-muted text-muted-foreground',
          'border border-dashed border-muted-foreground/25',
          className
        )}
        style={{ width, height }}
      >
        <span className="text-sm">Imagem não encontrada</span>
      </div>
    )
  }

  // Se temos versões otimizadas, usar picture element
  if (hasOptimizedVersions && typeof srcSets === 'object') {
    return (
      <picture className={cn('block', className)}>
        {/* AVIF - formato mais moderno */}
        <source
          srcSet={srcSets.avif}
          type="image/avif"
          sizes={sizes}
        />
        
        {/* WebP - fallback moderno */}
        <source
          srcSet={srcSets.webp}
          type="image/webp"
          sizes={sizes}
        />
        
        {/* Imagem original - fallback final */}
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          quality={quality}
          fill={fill}
          placeholder={placeholder}
          blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-opacity duration-300',
            isLoading && 'opacity-0',
            !isLoading && 'opacity-100',
            className
          )}
        />
      </picture>
    )
  }

  // Fallback para Next.js Image padrão
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      quality={quality}
      fill={fill}
      placeholder={placeholder}
      blurDataURL={placeholder === 'blur' ? defaultBlurDataURL : undefined}
      onLoad={handleLoad}
      onError={handleError}
      className={cn(
        'transition-opacity duration-300',
        isLoading && 'opacity-0',
        !isLoading && 'opacity-100',
        className
      )}
    />
  )
}

// Hook para preload de imagens críticas
export const useImagePreload = (src: string) => {
  const preloadImage = useCallback(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    document.head.appendChild(link)
  }, [src])

  return preloadImage
}

// Componente para skeleton loading
export const ImageSkeleton = ({ 
  width, 
  height, 
  className 
}: { 
  width?: number
  height?: number
  className?: string 
}) => (
  <div
    className={cn(
      'animate-pulse bg-muted rounded',
      className
    )}
    style={{ width, height }}
  />
)

export default OptimizedImage
