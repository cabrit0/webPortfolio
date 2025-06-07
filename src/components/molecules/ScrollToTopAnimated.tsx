"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ScrollToTopAnimatedProps {
  className?: string
}

export function ScrollToTopAnimated({ className }: ScrollToTopAnimatedProps) {
  const [currentFrame, setCurrentFrame] = React.useState(1)
  const [isVisible, setIsVisible] = React.useState(false)
  const [isClickable, setIsClickable] = React.useState(false)
  const [imagesLoaded, setImagesLoaded] = React.useState(false)
  const [isScrolling, setIsScrolling] = React.useState(false)
  
  const scrollTimeoutRef = React.useRef<NodeJS.Timeout>()
  
  // Generate image paths
  const imagePaths = React.useMemo(() => 
    Array.from({ length: 10 }, (_, i) => `/images/cabrit0anim/img${i + 1}.png`)
  , [])

  // Preload all images
  React.useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = imagePaths.map(src => {
        return new Promise<void>((resolve) => {
          const img = new window.Image()
          img.onload = () => resolve()
          img.onerror = () => resolve() // Continue even if one fails
          img.src = src
        })
      })
      
      await Promise.all(imagePromises)
      setImagesLoaded(true)
    }

    preloadImages()
  }, [imagePaths])

  // Calculate scroll progress and current frame
  React.useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const maxScroll = docHeight - winHeight
      
      // Always show component (visible from scroll position 0)
      setIsVisible(true)

      if (maxScroll <= 0) {
        setCurrentFrame(1)
        return
      }

      // Calculate scroll percentage (0 to 0.96) - animation completes at 96%
      const scrollPercent = Math.min(scrollTop / maxScroll, 0.96)

      // Map to frame number (1 to 10)
      const frame = Math.min(Math.floor(scrollPercent * 9 / 0.96) + 1, 10)
      setCurrentFrame(frame)
      
      // Detect scrolling state
      setIsScrolling(true)
      setIsClickable(false)
      
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      
      // Set clickable state after scroll stops
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
        setIsClickable(scrollTop > 50) // Only clickable if scrolled down a bit
      }, 150) // 150ms delay after scroll stops
    }

    // Throttle scroll events for performance
    let ticking = false
    const throttledUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledUpdate, { passive: true })
    
    // Initial calculation
    updateScrollProgress()
    
    return () => {
      window.removeEventListener('scroll', throttledUpdate)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Smooth scroll to top
  const scrollToTop = () => {
    if (!isClickable) return
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Don't render until images are loaded
  if (!imagesLoaded) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && ( // Always visible now, but keeping the state for potential future use
        <motion.div
          className={cn(
            "fixed bottom-6 right-6 z-40", // z-40 to stay below drawer (z-50)
            "w-20 h-20 sm:w-24 sm:h-24", // Larger responsive size
            "rounded-full overflow-hidden",
            "transition-all duration-300 ease-out",
            "select-none",
            isClickable && "cursor-pointer",
            !isClickable && "cursor-default",
            className
          )}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            boxShadow: isClickable 
              ? "0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)"
              : "0 4px 20px rgba(0, 0, 0, 0.1)"
          }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={isClickable ? { 
            scale: 1.1,
            boxShadow: "0 0 30px rgba(6, 182, 212, 0.4), 0 0 60px rgba(6, 182, 212, 0.2)"
          } : {}}
          whileTap={isClickable ? { scale: 0.95 } : {}}
          onClick={scrollToTop}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Border ring for clickable state */}
          <motion.div
            className={cn(
              "absolute inset-0 rounded-full border-2 transition-all duration-300",
              isClickable 
                ? "border-brand-accent shadow-lg" 
                : "border-transparent"
            )}
            animate={{
              borderColor: isClickable ? "rgb(6, 182, 212)" : "transparent",
            }}
          />
          
          {/* Image sequence */}
          <div className="relative w-full h-full">
            <Image
              src={imagePaths[currentFrame - 1]}
              alt={`Scroll animation frame ${currentFrame}`}
              fill
              className="object-cover rounded-full"
              priority={currentFrame <= 3} // Priority for first few frames
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>
          
          {/* Subtle overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-full pointer-events-none" />
          
          {/* Loading indicator (only shown briefly) */}
          {!imagesLoaded && (
            <div className="absolute inset-0 bg-neutral-800 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
