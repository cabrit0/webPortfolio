"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, Icon } from "@/components/atoms"
import Image from "next/image"

export interface ProjectGalleryProps {
  images: string[]
  title: string
  className?: string
}

const ProjectGallery = React.forwardRef<HTMLDivElement, ProjectGalleryProps>(
  ({ images, title, className, ...props }, ref) => {
    const [selectedImage, setSelectedImage] = React.useState(0)
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false)
    const [imageLoaded, setImageLoaded] = React.useState<boolean[]>(new Array(images.length).fill(false))

    const handleImageLoad = (index: number) => {
      setImageLoaded(prev => {
        const newLoaded = [...prev]
        newLoaded[index] = true
        return newLoaded
      })
    }

    const openLightbox = (index: number) => {
      setSelectedImage(index)
      setIsLightboxOpen(true)
    }

    const closeLightbox = () => {
      setIsLightboxOpen(false)
    }

    const nextImage = () => {
      setSelectedImage((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
      setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
    }

    // Handle keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!isLightboxOpen) return
        
        switch (e.key) {
          case 'Escape':
            closeLightbox()
            break
          case 'ArrowLeft':
            prevImage()
            break
          case 'ArrowRight':
            nextImage()
            break
        }
      }

      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isLightboxOpen])

    // Single image layout
    if (images.length === 1) {
      return (
        <motion.div
          ref={ref}
          className={cn("relative", className)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          {...props}
        >
          {/* Hero Image */}
          <div className="relative group cursor-pointer" onClick={() => openLightbox(0)}>
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images[0]}
                alt={title}
                fill
                className={cn(
                  "object-cover transition-all duration-700 group-hover:scale-105",
                  imageLoaded[0] ? "opacity-100" : "opacity-0"
                )}
                priority
                onLoad={() => handleImageLoad(0)}
              />
              
              {/* Loading skeleton */}
              {!imageLoaded[0] && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
                </div>
              )}

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Discrete expand button in bottom right corner */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="glass"
                  size="sm"
                  className="backdrop-blur-md bg-black/50 border-white/20 text-white hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    openLightbox(0)
                  }}
                >
                  <Icon name="expand" size="sm" />
                </Button>
              </div>
            </div>
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeLightbox}
              >
                {/* Close button - Fixed position with mobile optimization */}
                <Button
                  variant="glass"
                  size="icon"
                  className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[10000] bg-black/80 border-white/30 text-white hover:bg-black/90 transition-colors duration-200 shadow-2xl"
                  onClick={closeLightbox}
                >
                  <Icon name="x" size="default" />
                </Button>

                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <motion.div
                    className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-auto h-[80vh] rounded-xl overflow-hidden">
                      <Image
                        src={images[0]}
                        alt={title}
                        width={1200}
                        height={800}
                        className="object-contain w-full h-full"
                        priority
                        unoptimized
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )
    }

    // Multiple images layout (masonry/grid style)
    return (
      <motion.div
        ref={ref}
        className={cn("relative", className)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        {...props}
      >
        {/* Main image */}
        <div className="relative group cursor-pointer mb-6" onClick={() => openLightbox(0)}>
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={images[0]}
              alt={`${title} - Imagem principal`}
              fill
              className={cn(
                "object-cover transition-all duration-700 group-hover:scale-105",
                imageLoaded[0] ? "opacity-100" : "opacity-0"
              )}
              priority
              onLoad={() => handleImageLoad(0)}
            />
            
            {!imageLoaded[0] && (
              <div className="absolute inset-0 bg-neutral-800 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 border-4 border-brand-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="glass"
                size="sm"
                className="backdrop-blur-md bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={(e) => {
                  e.stopPropagation()
                  openLightbox(0)
                }}
              >
                <Icon name="expand" size="sm" />
                <span className="ml-2 text-xs">{images.length}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Thumbnail grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.slice(1).map((image, index) => (
              <motion.div
                key={index + 1}
                className="relative group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.1 }}
                onClick={() => openLightbox(index + 1)}
              >
                <div className="relative h-32 md:h-40 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={image}
                    alt={`${title} - Imagem ${index + 2}`}
                    fill
                    className={cn(
                      "object-cover transition-all duration-500 group-hover:scale-110",
                      imageLoaded[index + 1] ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={() => handleImageLoad(index + 1)}
                  />
                  
                  {!imageLoaded[index + 1] && (
                    <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                  )}

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="expand" size="default" className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Advanced Lightbox for multiple images */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Close button - Fixed position with mobile optimization */}
              <Button
                variant="glass"
                size="icon"
                className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[10000] bg-black/80 border-white/30 text-white hover:bg-black/90 transition-colors duration-200 shadow-2xl"
                onClick={closeLightbox}
              >
                <Icon name="x" size="default" />
              </Button>

              <motion.div
                className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center p-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Main lightbox image */}
                <div className="relative w-auto h-[80vh] rounded-xl overflow-hidden">
                  <Image
                    src={images[selectedImage]}
                    alt={`${title} - Imagem ${selectedImage + 1}`}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full"
                    priority
                    unoptimized
                  />
                </div>

                {/* Navigation buttons */}
                {images.length > 1 && (
                  <>
                    <Button
                      variant="glass"
                      size="icon"
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-[9998] bg-black/80 border-white/30 text-white hover:bg-black/90 transition-colors duration-200 shadow-xl"
                      onClick={prevImage}
                    >
                      <Icon name="chevronLeft" size="default" />
                    </Button>

                    <Button
                      variant="glass"
                      size="icon"
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-[9998] bg-black/80 border-white/30 text-white hover:bg-black/90 transition-colors duration-200 shadow-xl"
                      onClick={nextImage}
                    >
                      <Icon name="chevronRight" size="default" />
                    </Button>
                  </>
                )}

                {/* Image counter */}
                {images.length > 1 && (
                  <div className="fixed bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-[9997] bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2 text-white text-xs sm:text-sm">
                    {selectedImage + 1} / {images.length}
                  </div>
                )}

                {/* Thumbnail strip */}
                {images.length > 1 && (
                  <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[9997] flex gap-1 sm:gap-2 bg-black/80 backdrop-blur-sm rounded-full p-1 sm:p-2 max-w-[90vw] overflow-x-auto">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        className={cn(
                          "relative w-8 h-8 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0",
                          selectedImage === index
                            ? "ring-2 ring-brand-primary scale-110"
                            : "opacity-60 hover:opacity-100"
                        )}
                        onClick={() => setSelectedImage(index)}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)

ProjectGallery.displayName = "ProjectGallery"

export { ProjectGallery }
