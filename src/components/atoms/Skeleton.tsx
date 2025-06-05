"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

// Professional skeleton variants
const skeletonVariants = cva(
  "animate-pulse rounded-md bg-muted",
  {
    variants: {
      variant: {
        default: "bg-muted",
        subtle: "bg-muted/50",
        strong: "bg-muted",
        shimmer: "bg-gradient-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%] animate-shimmer",
        wave: "bg-muted relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] before:animate-wave",
      },
      shape: {
        rectangle: "rounded-md",
        circle: "rounded-full",
        square: "rounded-md aspect-square",
        pill: "rounded-full",
      },
      size: {
        xs: "h-3",
        sm: "h-4", 
        default: "h-5",
        lg: "h-6",
        xl: "h-8",
        "2xl": "h-10",
        "3xl": "h-12",
      }
    },
    defaultVariants: {
      variant: "default",
      shape: "rectangle", 
      size: "default",
    },
  }
)

export interface SkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number
  height?: string | number
  animated?: boolean
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className, 
    variant = "default",
    shape = "rectangle",
    size = "default", 
    width,
    height,
    animated = true,
    style,
    ...props 
  }, ref) => {
    const skeletonStyle = {
      width,
      height,
      ...style,
    }

    const skeletonElement = (
      <div
        ref={ref}
        className={cn(
          skeletonVariants({ variant, shape, size }),
          !animated && "animate-none",
          className
        )}
        style={skeletonStyle}
        {...props}
      />
    )

    if (animated && variant === "shimmer") {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {skeletonElement}
        </motion.div>
      )
    }

    return skeletonElement
  }
)
Skeleton.displayName = "Skeleton"

// Skeleton presets for common UI patterns
export interface SkeletonTextProps {
  lines?: number
  className?: string
  animated?: boolean
}

const SkeletonText: React.FC<SkeletonTextProps> = ({ 
  lines = 3, 
  className,
  animated = true 
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <Skeleton
          key={index}
          variant="shimmer"
          height={16}
          width={index === lines - 1 ? "75%" : "100%"}
          animated={animated}
        />
      ))}
    </div>
  )
}

export interface SkeletonCardProps {
  className?: string
  animated?: boolean
  showAvatar?: boolean
  showImage?: boolean
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ 
  className,
  animated = true,
  showAvatar = false,
  showImage = true 
}) => {
  return (
    <div className={cn("space-y-4 p-4", className)}>
      {showImage && (
        <Skeleton
          variant="shimmer"
          height={200}
          shape="rectangle"
          animated={animated}
        />
      )}
      
      <div className="space-y-3">
        {showAvatar && (
          <div className="flex items-center space-x-3">
            <Skeleton
              variant="shimmer"
              shape="circle"
              size="lg"
              width={40}
              height={40}
              animated={animated}
            />
            <div className="space-y-2 flex-1">
              <Skeleton
                variant="shimmer"
                height={16}
                width="60%"
                animated={animated}
              />
              <Skeleton
                variant="shimmer"
                height={14}
                width="40%"
                animated={animated}
              />
            </div>
          </div>
        )}
        
        <Skeleton
          variant="shimmer"
          height={20}
          width="80%"
          animated={animated}
        />
        
        <SkeletonText lines={2} animated={animated} />
        
        <div className="flex space-x-2 pt-2">
          <Skeleton
            variant="shimmer"
            height={32}
            width={80}
            shape="pill"
            animated={animated}
          />
          <Skeleton
            variant="shimmer"
            height={32}
            width={100}
            shape="pill"
            animated={animated}
          />
        </div>
      </div>
    </div>
  )
}

export interface SkeletonListProps {
  items?: number
  className?: string
  animated?: boolean
  showAvatar?: boolean
}

const SkeletonList: React.FC<SkeletonListProps> = ({ 
  items = 5,
  className,
  animated = true,
  showAvatar = true 
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      {Array.from({ length: items }).map((_, index) => (
        <div key={index} className="flex items-center space-x-3">
          {showAvatar && (
            <Skeleton
              variant="shimmer"
              shape="circle"
              size="lg"
              width={40}
              height={40}
              animated={animated}
            />
          )}
          <div className="space-y-2 flex-1">
            <Skeleton
              variant="shimmer"
              height={16}
              width={`${Math.random() * 40 + 60}%`}
              animated={animated}
            />
            <Skeleton
              variant="shimmer"
              height={14}
              width={`${Math.random() * 30 + 40}%`}
              animated={animated}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export interface SkeletonTableProps {
  rows?: number
  columns?: number
  className?: string
  animated?: boolean
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({ 
  rows = 5,
  columns = 4,
  className,
  animated = true 
}) => {
  return (
    <div className={cn("space-y-3", className)}>
      {/* Header */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, index) => (
          <Skeleton
            key={`header-${index}`}
            variant="shimmer"
            height={20}
            width="80%"
            animated={animated}
          />
        ))}
      </div>
      
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div 
          key={`row-${rowIndex}`}
          className="grid gap-4" 
          style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton
              key={`cell-${rowIndex}-${colIndex}`}
              variant="shimmer"
              height={16}
              width={`${Math.random() * 40 + 60}%`}
              animated={animated}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export { 
  Skeleton, 
  SkeletonText, 
  SkeletonCard, 
  SkeletonList, 
  SkeletonTable,
  skeletonVariants 
}
