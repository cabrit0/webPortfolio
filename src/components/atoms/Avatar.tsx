"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"

// Professional avatar variants
const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "rounded-full",
        square: "rounded-lg",
        rounded: "rounded-xl",
      },
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        default: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
        "2xl": "h-20 w-20",
        "3xl": "h-24 w-24",
        "4xl": "h-32 w-32",
        "5xl": "h-40 w-40",
        "6xl": "h-48 w-48",
        "7xl": "h-56 w-56",
        "8xl": "h-64 w-64",
      },
      status: {
        none: "",
        online: "ring-2 ring-brand-success ring-offset-2 ring-offset-background",
        offline: "ring-2 ring-neutral-400 ring-offset-2 ring-offset-background",
        busy: "ring-2 ring-brand-danger ring-offset-2 ring-offset-background",
        away: "ring-2 ring-brand-warning ring-offset-2 ring-offset-background",
      },
      border: {
        none: "",
        subtle: "ring-1 ring-border",
        strong: "ring-2 ring-border",
        gradient: "ring-2 ring-transparent bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent p-0.5",
      },
      hover: {
        none: "",
        scale: "hover:scale-105",
        glow: "hover:shadow-lg hover:shadow-brand-primary/25",
        lift: "hover:translate-y-[-2px] hover:shadow-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      status: "none",
      border: "none",
      hover: "none",
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: string
  loading?: boolean
  interactive?: boolean
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ 
    className, 
    variant, 
    size, 
    status, 
    border,
    hover,
    src, 
    alt, 
    fallback,
    loading = false,
    interactive = false,
    ...props 
  }, ref) => {
    const [imageError, setImageError] = React.useState(false)
    const [imageLoaded, setImageLoaded] = React.useState(false)

    const handleImageError = () => {
      setImageError(true)
    }

    const handleImageLoad = () => {
      setImageLoaded(true)
    }

    // Generate initials from fallback text
    const getInitials = (text: string) => {
      return text
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2)
    }

    const avatarContent = (
      <div
        ref={ref}
        className={cn(avatarVariants({ variant, size, status, border, hover }), className)}
        {...props}
      >
        {border === "gradient" && (
          <div className={cn(
            "flex items-center justify-center w-full h-full bg-background",
            variant === "default" && "rounded-full",
            variant === "square" && "rounded-lg",
            variant === "rounded" && "rounded-xl"
          )}>
            <AvatarContent 
              src={src}
              alt={alt}
              fallback={fallback}
              loading={loading}
              imageError={imageError}
              imageLoaded={imageLoaded}
              onImageError={handleImageError}
              onImageLoad={handleImageLoad}
              getInitials={getInitials}
              variant={variant}
            />
          </div>
        )}
        
        {border !== "gradient" && (
          <AvatarContent 
            src={src}
            alt={alt}
            fallback={fallback}
            loading={loading}
            imageError={imageError}
            imageLoaded={imageLoaded}
            onImageError={handleImageError}
            onImageLoad={handleImageLoad}
            getInitials={getInitials}
            variant={variant}
          />
        )}
      </div>
    )

    if (interactive) {
      return (
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="inline-flex"
        >
          {avatarContent}
        </motion.div>
      )
    }

    return avatarContent
  }
)
Avatar.displayName = "Avatar"

// Internal component for avatar content
interface AvatarContentProps {
  src?: string
  alt?: string
  fallback?: string
  loading: boolean
  imageError: boolean
  imageLoaded: boolean
  onImageError: () => void
  onImageLoad: () => void
  getInitials: (text: string) => string
  variant?: "default" | "square" | "rounded" | null
}

const AvatarContent: React.FC<AvatarContentProps> = ({
  src,
  alt,
  fallback,
  loading,
  imageError,
  imageLoaded,
  onImageError,
  onImageLoad,
  getInitials,
  variant
}) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-muted animate-pulse">
        <div className="w-1/2 h-1/2 bg-muted-foreground/20 rounded-full animate-spin" />
      </div>
    )
  }

  if (src && !imageError) {
    return (
      <>
        <Image
          src={src}
          alt={alt || "Avatar"}
          fill
          className={cn(
            "object-cover transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onError={onImageError}
          onLoad={onImageLoad}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
            <div className="w-1/2 h-1/2 bg-muted-foreground/20 rounded-full" />
          </div>
        )}
      </>
    )
  }

  // Fallback to initials or default
  return (
    <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-brand-primary to-brand-secondary text-white font-semibold">
      {fallback ? getInitials(fallback) : "?"}
    </div>
  )
}

// Avatar Group component for multiple avatars
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  max?: number
  spacing?: "tight" | "normal" | "loose"
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, max = 5, spacing = "normal", className, ...props }, ref) => {
    const avatars = React.Children.toArray(children)
    const visibleAvatars = avatars.slice(0, max)
    const remainingCount = avatars.length - max

    const spacingClasses = {
      tight: "-space-x-1",
      normal: "-space-x-2",
      loose: "-space-x-3",
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center", spacingClasses[spacing], className)}
        {...props}
      >
        {visibleAvatars}
        {remainingCount > 0 && (
          <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-full border-2 border-background text-sm font-medium text-muted-foreground">
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"

export { Avatar, AvatarGroup, avatarVariants }
