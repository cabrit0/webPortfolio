"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/providers/ThemeProvider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
  showLabel?: boolean
}

export function ThemeToggle({ 
  className, 
  size = "default", 
  variant = "ghost",
  showLabel = false 
}: ThemeToggleProps) {
  const { theme, setTheme, actualTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return "☀️"
      case "dark":
        return "🌙"
      case "system":
        return "💻"
      default:
        return "🌙"
    }
  }

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light"
      case "dark":
        return "Dark"
      case "system":
        return "System"
      default:
        return "Dark"
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:scale-105 active:scale-95",
        actualTheme === "dark" 
          ? "hover:bg-white/10 hover:text-white" 
          : "hover:bg-black/10 hover:text-black",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : theme === "dark" ? "system" : "light"} theme`}
    >
      <div className="flex items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.span
            key={theme}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 200,
              damping: 15
            }}
            className="text-lg"
          >
            {getIcon()}
          </motion.span>
        </AnimatePresence>
        
        {showLabel && (
          <AnimatePresence mode="wait">
            <motion.span
              key={theme}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium"
            >
              {getLabel()}
            </motion.span>
          </AnimatePresence>
        )}
      </div>

      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1.5, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
        style={{
          background: actualTheme === "dark" 
            ? "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(0,0,0,0.3) 0%, transparent 70%)"
        }}
      />
    </Button>
  )
}

// Advanced theme toggle with more visual feedback
export function AdvancedThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, actualTheme } = useTheme()

  const themes = [
    { key: "light", icon: "☀️", label: "Light", color: "from-yellow-400 to-orange-500" },
    { key: "dark", icon: "🌙", label: "Dark", color: "from-blue-600 to-purple-700" },
    { key: "system", icon: "💻", label: "System", color: "from-gray-500 to-gray-700" },
  ] as const

  return (
    <div className={cn("flex items-center gap-1 p-1 bg-background/50 backdrop-blur-sm rounded-full border border-border/50", className)}>
      {themes.map((themeOption) => (
        <motion.button
          key={themeOption.key}
          onClick={() => setTheme(themeOption.key as any)}
          className={cn(
            "relative px-3 py-2 rounded-full text-sm font-medium transition-all duration-300",
            "hover:scale-105 active:scale-95",
            theme === themeOption.key
              ? "text-white shadow-lg"
              : "text-muted-foreground hover:text-foreground"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {theme === themeOption.key && (
            <motion.div
              layoutId="activeTheme"
              className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-r",
                themeOption.color
              )}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-1">
            <span className="text-base">{themeOption.icon}</span>
            <span className="hidden sm:inline">{themeOption.label}</span>
          </span>
        </motion.button>
      ))}
    </div>
  )
}
