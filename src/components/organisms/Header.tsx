"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { NavigationMenu, useNavigation, type NavigationItem } from "@/components/molecules"
import DrawerMenu from "@/components/molecules/DrawerMenu"
import { Button, Icon } from "@/components/atoms"

export interface HeaderProps {
  logo?: string | React.ReactNode
  navigationItems?: NavigationItem[]
  variant?: 'default' | 'glass' | 'minimal'
  position?: 'fixed' | 'sticky' | 'static'
  showThemeToggle?: boolean
  showCTA?: boolean
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
  className?: string
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ 
    logo = "João Cabrito",
    navigationItems = [
      { label: "Home", href: "#home", icon: "home" },
      { label: "About", href: "#about", icon: "user" },
      { label: "Projects", href: "#projects", icon: "briefcase" },
      { label: "Contact", href: "#contact", icon: "mail" }
    ],
    variant = 'glass',
    position = 'fixed',
    showThemeToggle = false,
    showCTA = true,
    ctaLabel = "Download CV",
    ctaHref,
    onCtaClick,
    className,
    ...props 
  }, ref) => {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [theme, setTheme] = React.useState<'light' | 'dark'>('dark')
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

    // Handle scroll effect
    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Use navigation hook for active states
    const { navigationItems: activeNavigationItems } = useNavigation(navigationItems)

    const handleThemeToggle = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light'
      setTheme(newTheme)
      // Here you would implement actual theme switching logic
      document.documentElement.classList.toggle('dark', newTheme === 'dark')
    }

    const handleCtaClick = () => {
      if (onCtaClick) {
        onCtaClick()
      } else if (ctaHref) {
        if (ctaHref.startsWith('http')) {
          window.open(ctaHref, '_blank')
        } else {
          // Assume it's a file download
          const link = document.createElement('a')
          link.href = ctaHref
          link.download = ctaLabel
          link.click()
        }
      }
    }

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)
    const closeDrawer = () => setIsDrawerOpen(false)

    return (
      <motion.header
        ref={ref}
        className={cn(
          "w-full transition-all duration-300 z-50",
          position === 'fixed' && "fixed top-0 left-0 right-0",
          position === 'sticky' && "sticky top-0",
          position === 'static' && "relative",
          
          // Variant styles
          variant === 'default' && cn(
            "bg-background/80 backdrop-blur-md border-b border-border",
            isScrolled && "shadow-lg bg-background/90"
          ),
          variant === 'glass' && cn(
            "bg-background/10 backdrop-blur-md border-b border-white/10",
            isScrolled && "bg-background/20 shadow-2xl border-white/20"
          ),
          variant === 'minimal' && cn(
            "bg-transparent",
            isScrolled && "bg-background/90 backdrop-blur-md shadow-lg border-b border-border"
          ),
          
          className
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...props}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {typeof logo === 'string' ? (
                <div className="text-xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                  {logo}
                </div>
              ) : (
                logo
              )}
            </motion.div>

            {/* Navigation removed - now only in drawer */}

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">

              {/* Theme Toggle */}
              {showThemeToggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleThemeToggle}
                    className="hidden md:flex"
                  >
                    <Icon
                      name={theme === 'light' ? 'moon' : 'sun'}
                      size="sm"
                    />
                  </Button>
                </motion.div>
              )}

              {/* CTA Button */}
              {showCTA && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="hidden md:block"
                >
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleCtaClick}
                    leftIcon={<Icon name="download" size="sm" />}
                    className="glow-effect"
                  >
                    {ctaLabel}
                  </Button>
                </motion.div>
              )}

              {/* Menu Button (Desktop & Mobile) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleDrawer}
                  className="p-2 hover:bg-brand-primary/10 transition-colors group"
                >
                  <Icon name="menu" size="default" className="group-hover:scale-110 transition-transform" />
                  <span className="hidden md:inline ml-2 font-medium">Menu</span>
                </Button>
              </motion.div>

            </div>

          </div>
        </div>

        {/* Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent origin-left"
          style={{
            scaleX: isScrolled ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Drawer Menu */}
        <DrawerMenu
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          items={activeNavigationItems}
          side="right"
        />
      </motion.header>
    )
  }
)
Header.displayName = "Header"

// Header variants for different styles
export const HeaderVariants = {
  minimal: {
    variant: "minimal" as const,
    showThemeToggle: false,
    showCTA: false,
  },
  professional: {
    variant: "glass" as const,
    showThemeToggle: true,
    showCTA: true,
  },
  creative: {
    variant: "glass" as const,
    showThemeToggle: false,
    showCTA: true,
  }
}

export { Header }
