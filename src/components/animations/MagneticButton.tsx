"use client"

import { useRef, useEffect, ReactNode } from "react"
import { gsap } from "gsap"
import { Button, ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends ButtonProps {
  children: ReactNode
  magneticStrength?: number
  className?: string
}

export default function MagneticButton({
  children,
  magneticStrength = 0.3,
  className,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const button = buttonRef.current
    const text = textRef.current
    if (!button || !text) return

    const handleMouseEnter = () => {
      gsap.to(button, { 
        scale: 1.05, 
        duration: 0.3, 
        ease: "power2.out" 
      })
      gsap.to(text, { 
        y: -2, 
        duration: 0.3, 
        ease: "power2.out" 
      })
    }

    const handleMouseLeave = () => {
      gsap.to(button, { 
        scale: 1, 
        x: 0, 
        y: 0, 
        duration: 0.5, 
        ease: "elastic.out(1, 0.3)" 
      })
      gsap.to(text, { 
        y: 0, 
        x: 0, 
        duration: 0.5, 
        ease: "elastic.out(1, 0.3)" 
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(button, {
        x: x * magneticStrength,
        y: y * magneticStrength,
        duration: 0.3,
        ease: "power2.out"
      })
      gsap.to(text, {
        x: x * (magneticStrength * 0.3),
        y: y * (magneticStrength * 0.3),
        duration: 0.3,
        ease: "power2.out"
      })
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)
    button.addEventListener('mousemove', handleMouseMove)

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
      button.removeEventListener('mousemove', handleMouseMove)
    }
  }, [magneticStrength])

  return (
    <Button
      ref={buttonRef}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/20 before:to-accent/20",
        "before:translate-x-[-100%] hover:before:translate-x-0 before:transition-transform before:duration-500",
        "group",
        className
      )}
      {...props}
    >
      <span 
        ref={textRef}
        className="relative z-10 transition-all duration-300 group-hover:text-white"
      >
        {children}
      </span>
    </Button>
  )
}
