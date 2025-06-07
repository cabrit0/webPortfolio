"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

// Professional button variants inspired by top portfolios
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        // Primary - Electric gradient with glow
        primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg hover:shadow-xl hover:shadow-brand-primary/25 hover:scale-[1.02] active:scale-[0.98]",
        
        // Secondary - Sophisticated gray
        secondary: "bg-gradient-to-r from-neutral-800 to-neutral-700 text-white hover:from-neutral-700 hover:to-neutral-600 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
        
        // Accent - Cyan energy
        accent: "bg-gradient-to-r from-brand-accent to-brand-primary text-white shadow-lg hover:shadow-xl hover:shadow-brand-accent/25 hover:scale-[1.02] active:scale-[0.98]",
        
        // Outline - Professional border
        outline: "border-2 border-brand-primary/50 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary hover:shadow-lg hover:shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.98]",
        
        // Ghost - Subtle hover
        ghost: "text-foreground hover:bg-brand-primary/10 hover:text-brand-primary hover:scale-[1.02] active:scale-[0.98]",
        
        // Success - Green gradient
        success: "bg-gradient-to-r from-brand-success to-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-brand-success/25 hover:scale-[1.02] active:scale-[0.98]",
        
        // Danger - Red gradient
        danger: "bg-gradient-to-r from-brand-danger to-red-600 text-white shadow-lg hover:shadow-xl hover:shadow-brand-danger/25 hover:scale-[1.02] active:scale-[0.98]",
        
        // Glass - Glassmorphism effect
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        default: "h-11 px-6 py-2",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-11 w-11",
      },
      animation: {
        none: "",
        shimmer: "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        pulse: "animate-pulse",
        bounce: "hover:animate-bounce",
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      animation: "shimmer",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation,
    asChild = false, 
    loading = false,
    leftIcon,
    rightIcon,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Comp
          className={cn(buttonVariants({ variant, size, animation, className }))}
          ref={ref}
          disabled={disabled || loading}
          {...props}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          
          <div className={cn("flex items-center gap-2", loading && "opacity-0")}>
            {leftIcon && (
              <span className="flex-shrink-0">
                {leftIcon}
              </span>
            )}
            
            {children}
            
            {rightIcon && (
              <span className="flex-shrink-0">
                {rightIcon}
              </span>
            )}
          </div>
        </Comp>
      </motion.div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
