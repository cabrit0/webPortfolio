"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useScrollProgress } from "@/hooks/useSmoothScroll"
import { cn } from "@/lib/utils"

interface ScrollProgressProps {
  className?: string
  showPercentage?: boolean
  position?: "top" | "bottom" | "left" | "right"
}

export default function ScrollProgress({
  className,
  showPercentage = false,
  position = "top"
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0)

  useScrollProgress((newProgress) => {
    setProgress(newProgress * 100)
  })

  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "fixed top-0 left-0 right-0 h-1 z-50"
      case "bottom":
        return "fixed bottom-0 left-0 right-0 h-1 z-50"
      case "left":
        return "fixed top-0 left-0 bottom-0 w-1 z-50"
      case "right":
        return "fixed top-0 right-0 bottom-0 w-1 z-50"
      default:
        return "fixed top-0 left-0 right-0 h-1 z-50"
    }
  }

  const getProgressClasses = () => {
    const isVertical = position === "left" || position === "right"
    return isVertical ? "h-full" : "w-full h-full"
  }

  return (
    <>
      {/* Progress Bar */}
      <div className={cn(getPositionClasses(), "bg-background/20 backdrop-blur-sm", className)}>
        <motion.div
          className={cn(
            getProgressClasses(),
            "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500",
            "shadow-lg shadow-blue-500/25"
          )}
          style={{
            scaleX: position === "top" || position === "bottom" ? progress / 100 : 1,
            scaleY: position === "left" || position === "right" ? progress / 100 : 1,
            transformOrigin: position === "top" || position === "bottom" ? "left" : "bottom"
          }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        />
      </div>

      {/* Percentage Display */}
      {showPercentage && (
        <motion.div
          className="fixed top-4 right-4 z-50 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full border border-border/50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: progress > 5 ? 1 : 0, scale: progress > 5 ? 1 : 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <span className="text-sm font-mono text-foreground">
            {Math.round(progress)}%
          </span>
        </motion.div>
      )}
    </>
  )
}
