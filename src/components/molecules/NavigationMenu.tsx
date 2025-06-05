"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, Icon, IconButton, type IconName } from "@/components/atoms"
import { GradientText } from "@/components/ui/typography"

export interface NavigationItem {
  label: string
  href: string
  icon?: IconName
  active?: boolean
  external?: boolean
}

export interface NavigationMenuProps {
  items: NavigationItem[]
  logo?: string | React.ReactNode
  variant?: 'default' | 'glass' | 'minimal'
  position?: 'fixed' | 'sticky' | 'static'
  className?: string
  onItemClick?: (item: NavigationItem) => void
}

const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ 
    items, 
    logo = "João Cabrito",
    variant = 'glass',
    position = 'fixed',
    className,
    onItemClick,
    ...props 
  }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)

    // Handle scroll effect
    React.useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu when clicking outside
    React.useEffect(() => {
      const handleClickOutside = () => {
        if (isOpen) setIsOpen(false)
      }

      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }, [isOpen])

    const handleItemClick = (item: NavigationItem) => {
      onItemClick?.(item)
      setIsOpen(false)
      
      if (item.external) {
        window.open(item.href, '_blank')
      } else {
        // Smooth scroll to section
        const element = document.querySelector(item.href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    const navVariants = {
      default: cn(
        "bg-background/80 backdrop-blur-md border-b border-border",
        scrolled && "shadow-lg"
      ),
      glass: cn(
        "bg-background/10 backdrop-blur-md border-b border-white/10",
        scrolled && "bg-background/20 shadow-2xl"
      ),
      minimal: cn(
        "bg-transparent",
        scrolled && "bg-background/90 backdrop-blur-md shadow-lg"
      ),
    }

    const positionClasses = {
      fixed: "fixed top-0 left-0 right-0 z-50",
      sticky: "sticky top-0 z-40",
      static: "relative",
    }

    return (
      <motion.nav
        ref={ref}
        className={cn(
          "w-full transition-all duration-300",
          positionClasses[position],
          navVariants[variant],
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
                <GradientText className="text-xl font-bold">
                  {logo}
                </GradientText>
              ) : (
                logo
              )}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {items.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                >
                  <Button
                    variant={item.active ? "primary" : "ghost"}
                    size="sm"
                    className={cn(
                      "relative px-4 py-2 transition-all duration-300",
                      item.active && "text-white",
                      !item.active && "hover:text-brand-primary"
                    )}
                    leftIcon={item.icon ? <Icon name={item.icon} size="sm" /> : undefined}
                    onClick={() => handleItemClick(item)}
                  >
                    {item.label}
                    {item.external && (
                      <Icon name="external" size="xs" className="ml-1 opacity-60" />
                    )}
                    
                    {/* Active indicator */}
                    {item.active && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-accent"
                        layoutId="activeTab"
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton
                name={isOpen ? "x" : "menu"}
                variant="ghost"
                size="default"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsOpen(!isOpen)
                }}
                className="relative z-50"
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border shadow-2xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {items.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                  >
                    <Button
                      variant={item.active ? "primary" : "ghost"}
                      size="default"
                      className={cn(
                        "w-full justify-start px-4 py-3",
                        item.active && "text-white",
                        !item.active && "hover:text-brand-primary"
                      )}
                      leftIcon={item.icon ? <Icon name={item.icon} size="sm" /> : undefined}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.label}
                      {item.external && (
                        <Icon name="external" size="xs" className="ml-auto opacity-60" />
                      )}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    )
  }
)
NavigationMenu.displayName = "NavigationMenu"

// Navigation Hook for managing active states
export const useNavigation = (items: NavigationItem[]) => {
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = items
        .filter(item => !item.external && item.href.startsWith('#'))
        .map(item => ({
          id: item.href.slice(1),
          element: document.getElementById(item.href.slice(1))
        }))
        .filter(section => section.element)

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = section.element!
        const offsetTop = element.offsetTop
        const offsetBottom = offsetTop + element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveItem(`#${section.id}`)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position

    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const navigationItems = items.map(item => ({
    ...item,
    active: item.href === activeItem
  }))

  return { navigationItems, activeItem }
}

export { NavigationMenu }
