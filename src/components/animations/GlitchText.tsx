"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  triggerOnHover?: boolean
  autoGlitch?: boolean
  glitchInterval?: number
}

export default function GlitchText({
  text,
  className,
  triggerOnHover = false,
  autoGlitch = true,
  glitchInterval = 5000
}: GlitchTextProps) {
  const textRef = useRef<HTMLSpanElement>(null)
  const glitchRef = useRef<gsap.core.Timeline | null>(null)

  const createGlitchEffect = () => {
    if (!textRef.current) return

    const element = textRef.current
    
    // Kill existing animation
    if (glitchRef.current) {
      glitchRef.current.kill()
    }

    const tl = gsap.timeline()
    
    // Glitch sequence
    tl.to(element, {
      duration: 0.1,
      skewX: 5,
      textShadow: "2px 0 #ff0000, -2px 0 #00ffff",
      ease: "power2.inOut"
    })
    .to(element, {
      duration: 0.1,
      skewX: -5,
      textShadow: "-2px 0 #ff0000, 2px 0 #00ffff",
      ease: "power2.inOut"
    })
    .to(element, {
      duration: 0.1,
      skewX: 2,
      textShadow: "1px 0 #ff0000, -1px 0 #00ffff",
      ease: "power2.inOut"
    })
    .to(element, {
      duration: 0.1,
      skewX: 0,
      textShadow: "none",
      ease: "power2.inOut"
    })

    glitchRef.current = tl
    return tl
  }

  useEffect(() => {
    if (!textRef.current) return

    const element = textRef.current

    if (triggerOnHover) {
      const handleMouseEnter = () => {
        createGlitchEffect()
      }

      element.addEventListener('mouseenter', handleMouseEnter)
      
      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter)
        if (glitchRef.current) {
          glitchRef.current.kill()
        }
      }
    }

    if (autoGlitch) {
      const interval = setInterval(() => {
        createGlitchEffect()
      }, glitchInterval)

      return () => {
        clearInterval(interval)
        if (glitchRef.current) {
          glitchRef.current.kill()
        }
      }
    }

    return () => {
      if (glitchRef.current) {
        glitchRef.current.kill()
      }
    }
  }, [triggerOnHover, autoGlitch, glitchInterval])

  return (
    <span
      ref={textRef}
      className={cn(
        "inline-block relative",
        "before:content-[attr(data-text)] before:absolute before:inset-0",
        "before:text-red-500 before:opacity-0 before:animate-pulse",
        "after:content-[attr(data-text)] after:absolute after:inset-0",
        "after:text-cyan-500 after:opacity-0 after:animate-pulse",
        className
      )}
      data-text={text}
    >
      {text}
    </span>
  )
}
