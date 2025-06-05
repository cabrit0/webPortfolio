"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

// Professional input variants
const inputVariants = cva(
  "flex w-full rounded-lg border bg-background px-4 py-3 text-sm ring-offset-background transition-all duration-300 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-border hover:border-brand-primary/50 focus:border-brand-primary",
        glass: "bg-white/5 backdrop-blur-md border-white/20 hover:border-white/30 focus:border-brand-primary text-white placeholder:text-white/60",
        outline: "border-2 border-brand-primary/30 hover:border-brand-primary/50 focus:border-brand-primary",
        filled: "bg-neutral-100 dark:bg-neutral-800 border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:bg-background focus:border-brand-primary",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        default: "h-11 px-4",
        lg: "h-14 px-6 text-base",
      },
      state: {
        default: "",
        error: "border-brand-danger focus:border-brand-danger ring-brand-danger/20",
        success: "border-brand-success focus:border-brand-success ring-brand-success/20",
        warning: "border-brand-warning focus:border-brand-warning ring-brand-warning/20",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string
  helperText?: string
  errorText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant,
    size,
    state,
    type = "text",
    label,
    helperText,
    errorText,
    leftIcon,
    rightIcon,
    loading,
    id,
    ...props
  }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const hasError = !!errorText
    const finalState = hasError ? "error" : state

    return (
      <div className="w-full space-y-2">
        {label && (
          <motion.label
            htmlFor={inputId}
            className="text-sm font-medium text-foreground cursor-pointer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {leftIcon}
            </div>
          )}
          
          <input
            type={type}
            id={inputId}
            className={cn(
              inputVariants({ variant, size, state: finalState }),
              leftIcon && "pl-10",
              (rightIcon || loading) && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          
          {(rightIcon || loading) && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {loading ? (
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                rightIcon
              )}
            </div>
          )}
        </div>
        
        {(helperText || errorText) && (
          <motion.p
            className={cn(
              "text-xs",
              hasError ? "text-brand-danger" : "text-muted-foreground"
            )}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {errorText || helperText}
          </motion.p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

// Textarea component with similar styling
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    variant?: "default" | "glass" | "outline" | "filled"
    label?: string
    helperText?: string
    errorText?: string
  }
>(({ className, variant = "default", label, helperText, errorText, id, ...props }, ref) => {
  const generatedId = React.useId()
  const textareaId = id || generatedId
  const hasError = !!errorText

  return (
    <div className="w-full space-y-2">
      {label && (
        <motion.label
          htmlFor={textareaId}
          className="text-sm font-medium text-foreground cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {label}
        </motion.label>
      )}
      
      <textarea
        id={textareaId}
        className={cn(
          "flex min-h-[80px] w-full rounded-lg border bg-background px-4 py-3 text-sm ring-offset-background transition-all duration-300 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
          variant === "default" && "border-border hover:border-brand-primary/50 focus:border-brand-primary",
          variant === "glass" && "bg-white/5 backdrop-blur-md border-white/20 hover:border-white/30 focus:border-brand-primary text-white placeholder:text-white/60",
          variant === "outline" && "border-2 border-brand-primary/30 hover:border-brand-primary/50 focus:border-brand-primary",
          variant === "filled" && "bg-neutral-100 dark:bg-neutral-800 border-transparent hover:bg-neutral-200 dark:hover:bg-neutral-700 focus:bg-background focus:border-brand-primary",
          hasError && "border-brand-danger focus:border-brand-danger ring-brand-danger/20",
          className
        )}
        ref={ref}
        {...props}
      />
      
      {(helperText || errorText) && (
        <motion.p
          className={cn(
            "text-xs",
            hasError ? "text-brand-danger" : "text-muted-foreground"
          )}
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {errorText || helperText}
        </motion.p>
      )}
    </div>
  )
})
Textarea.displayName = "Textarea"

export { Input, Textarea, inputVariants }
