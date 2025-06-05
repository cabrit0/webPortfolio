"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { Variants } from "framer-motion"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: Variants
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export default function AnimatedSection({
  children,
  animation,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })

  const defaultAnimation: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration,
        delay,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation || defaultAnimation}
      className={className}
    >
      {children}
    </motion.div>
  )
}
