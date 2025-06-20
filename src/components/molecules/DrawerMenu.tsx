"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { gsap } from "gsap"
import { cn } from "@/lib/utils"
import { Button, Icon, IconButton } from "@/components/atoms"
import { labels, type NavigationItem } from "@/config/navigation"
import GlitchText from "@/components/animations/GlitchText"

interface DrawerMenuProps {
  isOpen: boolean
  onClose: () => void
  items: NavigationItem[]
  logo?: string | React.ReactNode
  className?: string
  side?: "left" | "right"
}

export default function DrawerMenu({
  isOpen,
  onClose,
  items,
  logo,
  className,
  side = "right"
}: DrawerMenuProps) {
  const drawerRef = React.useRef<HTMLDivElement>(null)
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const glitchTimelineRef = React.useRef<gsap.core.Timeline | null>(null)

  // Enhanced glitch animation for drawer transition
  const createGlitchEffect = React.useCallback(() => {
    if (!drawerRef.current) return

    const element = drawerRef.current

    // Kill existing animation
    if (glitchTimelineRef.current) {
      glitchTimelineRef.current.kill()
    }

    const tl = gsap.timeline()

    // More pronounced glitch sequence for drawer
    tl.to(element, {
      duration: 0.08,
      skewX: 8,
      filter: "blur(2px) brightness(1.2)",
      boxShadow: "2px 0 #ff0000, -2px 0 #00ffff, 0 0 20px rgba(255,0,0,0.3)",
      ease: "power2.inOut"
    })
    .to(element, {
      duration: 0.08,
      skewX: -8,
      filter: "blur(3px) brightness(0.8)",
      boxShadow: "-3px 0 #ff0000, 3px 0 #00ffff, 0 0 30px rgba(0,255,255,0.3)",
      ease: "power2.inOut"
    })
    .to(element, {
      duration: 0.06,
      skewX: 4,
      filter: "blur(1px) brightness(1.1)",
      boxShadow: "1px 0 #ff0000, -1px 0 #00ffff, 0 0 15px rgba(255,0,0,0.2)",
      ease: "power2.inOut"
    })
    .to(element, {
      duration: 0.08,
      skewX: 0,
      filter: "blur(0px) brightness(1)",
      boxShadow: "none",
      ease: "power2.inOut"
    })

    glitchTimelineRef.current = tl
    return tl
  }, [])

  // Trigger glitch effect when opening/closing
  React.useEffect(() => {
    if (isOpen) {
      // Trigger glitch effect right when drawer starts opening
      const timer = setTimeout(() => {
        createGlitchEffect()
      }, 100)
      return () => clearTimeout(timer)
    } else if (drawerRef.current) {
      // Trigger glitch effect immediately when closing starts
      createGlitchEffect()
    }
  }, [isOpen, createGlitchEffect])

  const handleItemClick = (item: NavigationItem) => {
    if (item.external) {
      // External links
      window.open(item.href, '_blank')
    } else if (item.href.startsWith('#')) {
      // Smooth scroll to section on same page
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (item.href.includes('#')) {
      // Links to sections on other pages (e.g., /#projects)
      window.location.href = item.href
    } else {
      // Regular page navigation
      window.location.href = item.href
    }
    handleCloseWithAnimation()
  }

  const handleCloseWithAnimation = () => {
    // Animate the back button first
    const backButton = document.querySelector('.back-button')
    if (backButton) {
      gsap.to(backButton, {
        duration: 0.2,
        scale: 0.9,
        x: -10,
        ease: "power2.out"
      })
    }

    // Trigger glitch effect before closing
    setTimeout(() => {
      createGlitchEffect()
    }, 100)

    // Delay the actual close to let the animations play
    setTimeout(() => {
      onClose()
    }, 400)
  }

  const drawerVariants = {
    closed: {
      x: side === "right" ? "100%" : "-100%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 40,
        duration: 0.6 // Fecha mais devagar
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.3 // Abre mais rápido
      }
    }
  }

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  const itemVariants = {
    closed: {
      x: side === "right" ? 50 : -50,
      opacity: 0
    },
    open: (index: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1 + 0.2,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            ref={overlayRef}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={handleCloseWithAnimation}
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            className={cn(
              "fixed top-0 h-screen w-[85vw] max-w-sm bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50 overflow-y-auto",
              side === "left" && "left-0 border-l-0 border-r",
              side === "right" && "right-0",
              className
            )}
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 pointer-events-none" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col">
              {/* Back button */}
              <div className="flex justify-start p-6">
                <motion.div
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="default"
                    onClick={handleCloseWithAnimation}
                    className="back-button group px-4 py-2 hover:bg-brand-primary/10 transition-all duration-300 rounded-lg border border-border/30 hover:border-brand-primary/50 hover:shadow-lg"
                    leftIcon={<Icon name="arrowLeft" size="sm" className="group-hover:-translate-x-1 transition-transform duration-300" />}
                  >
                    <span className="text-sm font-medium group-hover:text-brand-primary transition-colors duration-300">
                      {labels.navigation.back}
                    </span>
                  </Button>
                </motion.div>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 px-8 py-6 flex flex-col justify-center">
                <div className="space-y-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.label}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Button
                        variant={item.active ? "primary" : "ghost"}
                        size="lg"
                        className={cn(
                          "w-full justify-start px-6 py-4 text-lg font-light transition-all duration-300 group rounded-xl",
                          item.active && "text-white glow-effect shadow-lg bg-brand-primary/20",
                          !item.active && "hover:text-brand-primary hover:bg-brand-primary/10 hover:translate-x-4 hover:shadow-lg"
                        )}
                        leftIcon={item.icon ? <Icon name={item.icon} size="lg" /> : undefined}
                        onClick={() => handleItemClick(item)}
                      >
                        <GlitchText
                          text={item.label}
                          triggerOnHover={true}
                          autoGlitch={false}
                          className="font-light tracking-wide"
                        />
                        {item.external && (
                          <Icon name="external" size="default" className="ml-auto opacity-60" />
                        )}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* Mantra e Frase */}
              <div className="p-6 border-t border-border/30 space-y-4">
                <div className="text-center">
                  <p className="text-lg font-medium text-brand-accent mb-3 italic">
                    &ldquo;Com calma e com alma&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    &ldquo;O importante não é aquilo que fazemos da nossa vida, mas aquilo que a nossa vida faz de nós.&rdquo;
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-2">
                    — Agostinho da Silva
                  </p>
                </div>
                <div className="text-center text-xs text-muted-foreground border-t border-border/20 pt-3">
                  <p>© 2025 João Cabrito</p>
                  <p className="mt-1">Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
