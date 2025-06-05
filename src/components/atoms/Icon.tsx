"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  ArrowRight, 
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Check,
  X,
  Plus,
  Minus,
  Search,
  Menu,
  Home,
  User,
  Briefcase,
  MessageCircle,
  Code,
  Palette,
  Zap,
  Star,
  Heart,
  Eye,
  Settings,
  Moon,
  Sun,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown,
  type LucideIcon
} from "lucide-react"

// Icon registry for easy management
const iconRegistry = {
  // Social
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  
  // Navigation
  home: Home,
  user: User,
  briefcase: Briefcase,
  message: MessageCircle,
  
  // Actions
  external: ExternalLink,
  download: Download,
  search: Search,
  menu: Menu,
  settings: Settings,
  
  // Arrows
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  
  // Chevrons
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  
  // Status
  check: Check,
  x: X,
  plus: Plus,
  minus: Minus,
  
  // Tech
  code: Code,
  palette: Palette,
  zap: Zap,
  
  // Engagement
  star: Star,
  heart: Heart,
  eye: Eye,
  
  // Theme
  moon: Moon,
  sun: Sun,
} as const

export type IconName = keyof typeof iconRegistry

// Professional icon variants
const iconVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300",
  {
    variants: {
      variant: {
        default: "text-current",
        primary: "text-brand-primary",
        secondary: "text-brand-secondary", 
        accent: "text-brand-accent",
        success: "text-brand-success",
        warning: "text-brand-warning",
        danger: "text-brand-danger",
        muted: "text-muted-foreground",
        ghost: "text-foreground/60 hover:text-foreground",
      },
      size: {
        xs: "w-3 h-3",
        sm: "w-4 h-4",
        default: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
        "2xl": "w-10 h-10",
        "3xl": "w-12 h-12",
      },
      animation: {
        none: "",
        spin: "animate-spin",
        pulse: "animate-pulse",
        bounce: "animate-bounce",
        ping: "animate-ping",
        hover: "hover:scale-110 hover:rotate-3",
        float: "animate-float",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
)

export interface IconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "name">,
    VariantProps<typeof iconVariants> {
  name: IconName
  interactive?: boolean
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ 
    name, 
    className, 
    variant, 
    size, 
    animation,
    interactive = false,
    ...props 
  }, ref) => {
    const IconComponent = iconRegistry[name] as LucideIcon
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in registry`)
      return null
    }

    const iconElement = (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ variant, size, animation }), className)}
        {...props}
      />
    )

    if (interactive) {
      return (
        <motion.div
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="inline-flex"
        >
          {iconElement}
        </motion.div>
      )
    }

    return iconElement
  }
)
Icon.displayName = "Icon"

// Icon Button component for interactive icons
export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconVariants> {
  name: IconName
  label?: string
  loading?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({
    name,
    className,
    variant = "ghost",
    size = "default",
    animation,
    label,
    loading,
    disabled,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...props
  }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          size === "xs" && "p-1",
          size === "sm" && "p-1.5",
          size === "default" && "p-2",
          size === "lg" && "p-2.5",
          size === "xl" && "p-3",
          size === "2xl" && "p-3.5",
          size === "3xl" && "p-4",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        disabled={disabled || loading}
        aria-label={label}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {loading ? (
          <Icon
            name="search"
            variant={variant}
            size={size}
            animation="spin"
            className="opacity-60"
          />
        ) : (
          <Icon
            name={name}
            variant={variant}
            size={size}
            animation={animation}
          />
        )}
      </motion.button>
    )
  }
)
IconButton.displayName = "IconButton"

// Social Icon component for social media links
export interface SocialIconProps extends IconButtonProps {
  href?: string
  platform: "github" | "linkedin" | "mail"
}

const SocialIcon = React.forwardRef<HTMLElement, SocialIconProps>(
  ({ platform, href, className, onClick, ...props }, ref) => {
    if (href) {
      return (
        <motion.div
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <a
            ref={ref as React.RefObject<HTMLAnchorElement>}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg",
              platform === "github" && "bg-neutral-800 hover:bg-neutral-700 text-white hover:shadow-neutral-800/25",
              platform === "linkedin" && "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/25",
              platform === "mail" && "bg-brand-primary hover:bg-brand-primary/90 text-white hover:shadow-brand-primary/25",
              className
            )}
          >
            <Icon name={platform} size="lg" />
          </a>
        </motion.div>
      )
    }

    return (
      <motion.div
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <button
          ref={ref as React.RefObject<HTMLButtonElement>}
          onClick={onClick}
          className={cn(
            "inline-flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:shadow-lg",
            platform === "github" && "bg-neutral-800 hover:bg-neutral-700 text-white hover:shadow-neutral-800/25",
            platform === "linkedin" && "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/25",
            platform === "mail" && "bg-brand-primary hover:bg-brand-primary/90 text-white hover:shadow-brand-primary/25",
            className
          )}
        >
          <Icon name={platform} size="lg" />
        </button>
      </motion.div>
    )
  }
)
SocialIcon.displayName = "SocialIcon"

export { Icon, IconButton, SocialIcon, iconVariants, iconRegistry }
