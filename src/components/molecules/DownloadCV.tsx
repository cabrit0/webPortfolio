"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"

interface DownloadCVProps {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "success" | "danger" | "glass"
  size?: "sm" | "default" | "lg" | "xl" | "icon"
  className?: string
  showIcon?: boolean
  children?: React.ReactNode
}

export function DownloadCV({
  variant = "outline",
  size = "default",
  className,
  showIcon = true,
  children = "Download CV"
}: DownloadCVProps) {
  const [isDownloading, setIsDownloading] = React.useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Create a temporary link to trigger download
      // Using the CabritoCV.pdf file from the project root
      const link = document.createElement('a')
      link.href = '/CabritoCV.pdf' // File in public root
      link.download = 'CabritoCV.pdf'
      link.target = '_blank'

      // Fallback: If PDF doesn't exist, show a message
      const response = await fetch(link.href, { method: 'HEAD' })
      if (!response.ok) {
        // PDF doesn't exist, create a placeholder or show message
        alert('CV estará disponível em breve! Por favor contacte-me diretamente por agora.')
        return
      }

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

    } catch (error) {
      console.error('Download failed:', error)
      alert('Falha no download. Por favor tente novamente ou contacte-me diretamente.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleDownload}
      disabled={isDownloading}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:scale-105 active:scale-95",
        variant === "outline" && "hover:text-brand-primary hover:border-brand-primary/50",
        isDownloading && "cursor-not-allowed opacity-70",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {showIcon && (
          <motion.span
            animate={isDownloading ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              duration: isDownloading ? 1 : 0.3,
              repeat: isDownloading ? Infinity : 0,
              ease: "linear"
            }}
            className="text-lg"
          >
            {isDownloading ? "⏳" : "📄"}
          </motion.span>
        )}

        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isDownloading ? 0.7 : 1 }}
          className="font-medium"
        >
          {isDownloading ? "A baixar..." : children}
        </motion.span>
      </div>

      {/* Download progress animation */}
      {isDownloading && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-current"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}
    </Button>
  )
}

// Advanced download component with more features
export function AdvancedDownloadCV({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = React.useState(false)
  const [downloadCount, setDownloadCount] = React.useState(0)

  const handleDownload = async () => {
    setDownloadCount(prev => prev + 1)

    try {
      // Create a temporary link to trigger download
      const link = document.createElement('a')
      link.href = '/CabritoCV.pdf' // File in public root
      link.download = 'CabritoCV.pdf'
      link.target = '_blank'

      // Check if PDF exists
      const response = await fetch(link.href, { method: 'HEAD' })
      if (!response.ok) {
        alert('CV estará disponível em breve! Por favor contacte-me diretamente por agora.')
        return
      }

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

    } catch (error) {
      console.error('Download failed:', error)
      alert('Falha no download. Por favor tente novamente ou contacte-me diretamente.')
    }
  }

  return (
    <motion.div
      className={cn("relative group", className)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Button
        variant="outline"
        size="lg"
        onClick={handleDownload}
        className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold border-2 border-brand-accent/60 text-brand-accent hover:bg-brand-accent/15 hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-500 rounded-2xl backdrop-blur-sm"
      >
        <span className="flex items-center gap-2">
          <span>Download CV</span>
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            →
          </motion.span>
        </span>
      </Button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -10 : 10,
          scale: isHovered ? 1 : 0.8
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg text-sm text-muted-foreground whitespace-nowrap pointer-events-none"
      >
        Obter o meu CV mais recente em formato PDF
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border/50" />
      </motion.div>

      {/* Download counter (hidden, for analytics) */}
      {downloadCount > 0 && (
        <div className="sr-only">
          CV downloaded {downloadCount} times
        </div>
      )}
    </motion.div>
  )
}
