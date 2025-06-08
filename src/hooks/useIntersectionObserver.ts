'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  skip?: boolean
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement>
  isIntersecting: boolean
  hasIntersected: boolean
  entry: IntersectionObserverEntry | null
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  skip = false,
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (skip || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
        setIsIntersecting(entry.isIntersecting)
        
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true)
          
          // Se triggerOnce for true, desconectar após primeira interseção
          if (triggerOnce) {
            observer.disconnect()
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce, skip, hasIntersected])

  return {
    ref,
    isIntersecting,
    hasIntersected,
    entry,
  }
}

// Hook especializado para lazy loading de imagens
export const useImageLazyLoading = (options?: UseIntersectionObserverOptions) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px', // Carregar imagens 100px antes de ficarem visíveis
    triggerOnce: true,
    ...options,
  })

  return {
    ref,
    shouldLoad: hasIntersected,
  }
}

// Hook para lazy loading de componentes pesados
export const useComponentLazyLoading = (options?: UseIntersectionObserverOptions) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px', // Carregar componentes 200px antes
    triggerOnce: true,
    ...options,
  })

  return {
    ref,
    shouldRender: hasIntersected,
  }
}

// Hook para animações baseadas em scroll
export const useScrollAnimation = (options?: UseIntersectionObserverOptions) => {
  const { ref, isIntersecting, hasIntersected, entry } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: '0px',
    triggerOnce: false, // Permitir re-trigger para animações
    ...options,
  })

  return {
    ref,
    isVisible: isIntersecting,
    hasBeenVisible: hasIntersected,
    intersectionRatio: entry?.intersectionRatio || 0,
  }
}

// Hook para preload de recursos baseado em proximidade
export const usePreloadOnProximity = (
  preloadFn: () => void,
  options?: UseIntersectionObserverOptions
) => {
  const { ref, hasIntersected } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '300px', // Preload quando estiver 300px próximo
    triggerOnce: true,
    ...options,
  })

  useEffect(() => {
    if (hasIntersected) {
      preloadFn()
    }
  }, [hasIntersected, preloadFn])

  return { ref }
}

// Hook para performance monitoring
export const usePerformanceObserver = () => {
  const [metrics, setMetrics] = useState<{
    lcp?: number
    fid?: number
    cls?: number
    fcp?: number
  }>({})

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    // Observar Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }))
            break
          case 'first-input':
            setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }))
            break
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }))
            }
            break
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }))
            }
            break
        }
      })
    })

    // Observar diferentes tipos de métricas
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
      observer.observe({ entryTypes: ['first-input'] })
      observer.observe({ entryTypes: ['layout-shift'] })
      observer.observe({ entryTypes: ['paint'] })
    } catch (error) {
      console.warn('Performance Observer não suportado:', error)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return metrics
}

export default useIntersectionObserver
