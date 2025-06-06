import Lenis from "@studio-freight/lenis"

export class SmoothScrollManager {
  private lenis: Lenis | null = null
  private rafId: number | null = null

  constructor() {
    if (typeof window === "undefined") return
    this.init()
  }

  private init() {
    // Initialize Lenis with professional settings
    this.lenis = new Lenis({
      duration: 1.2,           // Smooth duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      wheelMultiplier: 1,      // Mouse wheel sensitivity
      touchMultiplier: 2,
      infinite: false,
    })

    // Start the animation loop
    this.raf()
  }

  private raf = (time?: number) => {
    if (this.lenis && time !== undefined) {
      this.lenis.raf(time)
    }
    this.rafId = requestAnimationFrame(this.raf)
  }

  // Smooth scroll to element
  scrollTo(target: string | HTMLElement, options?: { offset?: number; duration?: number }) {
    if (!this.lenis) return

    this.lenis.scrollTo(target, {
      offset: options?.offset || 0,
      duration: options?.duration || 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  }

  // Scroll to top with smooth animation
  scrollToTop(duration = 1.5) {
    if (!this.lenis) return
    
    this.lenis.scrollTo(0, {
      duration,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })
  }

  // Stop smooth scrolling
  stop() {
    if (this.lenis) {
      this.lenis.stop()
    }
  }

  // Start smooth scrolling
  start() {
    if (this.lenis) {
      this.lenis.start()
    }
  }

  // Destroy instance
  destroy() {
    if (this.lenis) {
      this.lenis.destroy()
      this.lenis = null
    }
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
    // No GSAP cleanup needed in simplified version
  }

  // Get current scroll progress (0-1)
  getScrollProgress(): number {
    if (!this.lenis) return 0
    return this.lenis.progress || 0
  }

  // Get current scroll position
  getScrollPosition(): number {
    if (!this.lenis) return 0
    return this.lenis.scroll || 0
  }

  // Add scroll event listener
  onScroll(callback: (data: any) => void) {
    if (!this.lenis) return
    this.lenis.on('scroll', callback)
  }

  // Remove scroll event listener
  offScroll(callback: (data: any) => void) {
    if (!this.lenis) return
    this.lenis.off('scroll', callback)
  }
}

// Global instance
let smoothScrollInstance: SmoothScrollManager | null = null

export const initSmoothScroll = (): SmoothScrollManager => {
  if (typeof window === "undefined") return null as any
  
  if (!smoothScrollInstance) {
    smoothScrollInstance = new SmoothScrollManager()
  }
  return smoothScrollInstance
}

export const getSmoothScroll = (): SmoothScrollManager | null => {
  return smoothScrollInstance
}

export const destroySmoothScroll = () => {
  if (smoothScrollInstance) {
    smoothScrollInstance.destroy()
    smoothScrollInstance = null
  }
}
