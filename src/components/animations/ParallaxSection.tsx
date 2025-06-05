"use client"

import { useRef, useEffect, ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down"
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className,
  direction = "up"
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const element = sectionRef.current
    const yPercent = direction === "up" ? -50 * speed : 50 * speed

    gsap.to(element, {
      yPercent,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [speed, direction])

  return (
    <div
      ref={sectionRef}
      className={cn("will-change-transform", className)}
    >
      {children}
    </div>
  )
}
