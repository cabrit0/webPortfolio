"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export const useGSAP = (
  animationFn: (element: HTMLElement) => gsap.core.Timeline | void,
  dependencies: any[] = []
) => {
  const elementRef = useRef<HTMLElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (!elementRef.current) return

    // Kill previous animation
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    // Create new animation
    const timeline = animationFn(elementRef.current)
    if (timeline) {
      timelineRef.current = timeline
    }

    // Cleanup function
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, dependencies)

  return elementRef
}

export const useScrollTrigger = (
  animationFn: (element: HTMLElement) => void,
  options: ScrollTrigger.Vars = {}
) => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => animationFn(element),
      ...options
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [animationFn, options])

  return elementRef
}

export const useMagneticEffect = () => {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.3)"
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return elementRef
}
