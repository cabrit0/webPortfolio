"use client"

import { useEffect, useRef, useCallback } from "react"
import { initSmoothScroll, getSmoothScroll, destroySmoothScroll, SmoothScrollManager } from "@/lib/smooth-scroll"

export const useSmoothScroll = () => {
  const smoothScrollRef = useRef<SmoothScrollManager | null>(null)

  useEffect(() => {
    // Initialize smooth scroll
    smoothScrollRef.current = initSmoothScroll()

    // Cleanup on unmount
    return () => {
      destroySmoothScroll()
    }
  }, [])

  const scrollTo = useCallback((target: string | HTMLElement, options?: { offset?: number; duration?: number }) => {
    const smoothScroll = getSmoothScroll()
    if (smoothScroll) {
      smoothScroll.scrollTo(target, options)
    }
  }, [])

  const scrollToTop = useCallback((duration?: number) => {
    const smoothScroll = getSmoothScroll()
    if (smoothScroll) {
      smoothScroll.scrollToTop(duration)
    }
  }, [])

  const stop = useCallback(() => {
    const smoothScroll = getSmoothScroll()
    if (smoothScroll) {
      smoothScroll.stop()
    }
  }, [])

  const start = useCallback(() => {
    const smoothScroll = getSmoothScroll()
    if (smoothScroll) {
      smoothScroll.start()
    }
  }, [])

  return {
    scrollTo,
    scrollToTop,
    stop,
    start
  }
}

export const useScrollProgress = (callback: (progress: number) => void) => {
  useEffect(() => {
    const smoothScroll = getSmoothScroll()
    if (!smoothScroll) return

    const handleScroll = (data: any) => {
      const progress = data.progress || 0
      callback(progress)
    }

    smoothScroll.onScroll(handleScroll)

    return () => {
      smoothScroll.offScroll(handleScroll)
    }
  }, [callback])
}

export const useScrollPosition = (callback: (position: number) => void) => {
  useEffect(() => {
    const smoothScroll = getSmoothScroll()
    if (!smoothScroll) return

    const handleScroll = (data: any) => {
      const position = data.scroll || 0
      callback(position)
    }

    smoothScroll.onScroll(handleScroll)

    return () => {
      smoothScroll.offScroll(handleScroll)
    }
  }, [callback])
}
