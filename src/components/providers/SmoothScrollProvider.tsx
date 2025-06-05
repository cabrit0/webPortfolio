"use client"

import { ReactNode, useEffect } from "react"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import ScrollProgress from "@/components/animations/ScrollProgress"
import ScrollToTop from "@/components/animations/ScrollToTop"

interface SmoothScrollProviderProps {
  children: ReactNode
  showProgress?: boolean
  showScrollToTop?: boolean
  progressPosition?: "top" | "bottom" | "left" | "right"
}

export default function SmoothScrollProvider({
  children,
  showProgress = true,
  showScrollToTop = true,
  progressPosition = "top"
}: SmoothScrollProviderProps) {
  // Initialize smooth scrolling
  useSmoothScroll()

  useEffect(() => {
    // Prevent default scroll restoration
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual"
    }
  }, [])

  return (
    <>
      {children}
      
      {/* Scroll Progress Indicator */}
      {showProgress && (
        <ScrollProgress 
          position={progressPosition}
          showPercentage={false}
        />
      )}
      
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <ScrollToTop showAfter={400} />
      )}
    </>
  )
}
