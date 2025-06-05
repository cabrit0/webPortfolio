"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

// Professional separator variants
const separatorVariants = cva(
  "shrink-0",
  {
    variants: {
      orientation: {
        horizontal: "h-px w-full",
        vertical: "w-px h-full",
      },
      variant: {
        default: "bg-border",
        subtle: "bg-border/50",
        strong: "bg-border opacity-100",
        gradient: "bg-gradient-to-r from-transparent via-border to-transparent",
        "gradient-vertical": "bg-gradient-to-b from-transparent via-border to-transparent",
        primary: "bg-brand-primary/30",
        accent: "bg-brand-accent/30",
        glow: "bg-brand-primary shadow-lg shadow-brand-primary/20",
      },
      size: {
        sm: "",
        default: "",
        lg: "",
      },
      spacing: {
        none: "",
        sm: "",
        default: "",
        lg: "",
        xl: "",
      }
    },
    compoundVariants: [
      // Horizontal sizing
      {
        orientation: "horizontal",
        size: "sm",
        className: "h-px"
      },
      {
        orientation: "horizontal", 
        size: "default",
        className: "h-px"
      },
      {
        orientation: "horizontal",
        size: "lg", 
        className: "h-0.5"
      },
      // Vertical sizing
      {
        orientation: "vertical",
        size: "sm",
        className: "w-px"
      },
      {
        orientation: "vertical",
        size: "default", 
        className: "w-px"
      },
      {
        orientation: "vertical",
        size: "lg",
        className: "w-0.5"
      },
      // Horizontal spacing
      {
        orientation: "horizontal",
        spacing: "sm",
        className: "my-2"
      },
      {
        orientation: "horizontal",
        spacing: "default",
        className: "my-4"
      },
      {
        orientation: "horizontal",
        spacing: "lg",
        className: "my-6"
      },
      {
        orientation: "horizontal",
        spacing: "xl",
        className: "my-8"
      },
      // Vertical spacing
      {
        orientation: "vertical",
        spacing: "sm",
        className: "mx-2"
      },
      {
        orientation: "vertical",
        spacing: "default",
        className: "mx-4"
      },
      {
        orientation: "vertical",
        spacing: "lg",
        className: "mx-6"
      },
      {
        orientation: "vertical",
        spacing: "xl",
        className: "mx-8"
      },
      // Gradient variants
      {
        variant: "gradient",
        orientation: "vertical",
        className: "bg-gradient-to-b from-transparent via-border to-transparent"
      }
    ],
    defaultVariants: {
      orientation: "horizontal",
      variant: "default",
      size: "default",
      spacing: "default",
    },
  }
)

export interface SeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof separatorVariants> {
  decorative?: boolean
  animated?: boolean
  label?: string
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ 
    className, 
    orientation = "horizontal", 
    variant = "default",
    size = "default",
    spacing = "default",
    decorative = true,
    animated = false,
    label,
    ...props 
  }, ref) => {
    // Adjust gradient variant for vertical orientation
    const adjustedVariant = variant === "gradient" && orientation === "vertical" 
      ? "gradient-vertical" 
      : variant

    if (label) {
      return (
        <div 
          className={cn(
            "relative flex items-center",
            orientation === "horizontal" ? "w-full" : "h-full flex-col",
            spacing === "sm" && (orientation === "horizontal" ? "my-2" : "mx-2"),
            spacing === "default" && (orientation === "horizontal" ? "my-4" : "mx-4"),
            spacing === "lg" && (orientation === "horizontal" ? "my-6" : "mx-6"),
            spacing === "xl" && (orientation === "horizontal" ? "my-8" : "mx-8"),
          )}
        >
          <div 
            className={cn(
              separatorVariants({ 
                orientation, 
                variant: adjustedVariant, 
                size, 
                spacing: "none" 
              }),
              "flex-1"
            )}
          />
          <span className={cn(
            "px-3 text-sm text-muted-foreground bg-background",
            orientation === "vertical" && "py-3 px-0"
          )}>
            {label}
          </span>
          <div 
            className={cn(
              separatorVariants({ 
                orientation, 
                variant: adjustedVariant, 
                size, 
                spacing: "none" 
              }),
              "flex-1"
            )}
          />
        </div>
      )
    }

    const separatorElement = (
      <div
        ref={ref}
        role={decorative ? "none" : "separator"}
        aria-orientation={orientation || undefined}
        className={cn(
          separatorVariants({ orientation, variant: adjustedVariant, size, spacing }),
          className
        )}
        {...props}
      />
    )

    if (animated) {
      return (
        <motion.div
          initial={{ 
            scaleX: orientation === "horizontal" ? 0 : 1,
            scaleY: orientation === "vertical" ? 0 : 1,
            opacity: 0 
          }}
          animate={{ 
            scaleX: 1,
            scaleY: 1,
            opacity: 1 
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.1 
          }}
          className={orientation === "horizontal" ? "w-full" : "h-full"}
        >
          {separatorElement}
        </motion.div>
      )
    }

    return separatorElement
  }
)
Separator.displayName = "Separator"

// Decorative separator with icon
export interface DecorativeSeparatorProps extends SeparatorProps {
  icon?: React.ReactNode
}

const DecorativeSeparator = React.forwardRef<HTMLDivElement, DecorativeSeparatorProps>(
  ({ icon, className, ...props }, ref) => {
    if (!icon) {
      return <Separator ref={ref} className={className} {...props} />
    }

    return (
      <div className="relative flex items-center w-full my-4">
        <Separator variant="gradient" spacing="none" className="flex-1" />
        <div className="px-4 text-muted-foreground">
          {icon}
        </div>
        <Separator variant="gradient" spacing="none" className="flex-1" />
      </div>
    )
  }
)
DecorativeSeparator.displayName = "DecorativeSeparator"

export { Separator, DecorativeSeparator, separatorVariants }
