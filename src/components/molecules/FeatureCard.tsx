"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icon, type IconName } from "@/components/atoms"

export interface FeatureCardProps {
  title: string
  description: string
  icon?: IconName
  iconColor?: string
  variant?: 'default' | 'glass' | 'gradient' | 'minimal'
  size?: 'sm' | 'default' | 'lg'
  interactive?: boolean
  className?: string
  onClick?: () => void
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ 
    title, 
    description, 
    icon,
    iconColor,
    variant = 'default',
    size = 'default',
    interactive = false,
    className,
    onClick,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const sizeClasses = {
      sm: "p-4",
      default: "p-6",
      lg: "p-8",
    }

    const iconSizes = {
      sm: "lg" as const,
      default: "xl" as const,
      lg: "2xl" as const,
    }

    const titleSizes = {
      sm: "text-lg",
      default: "text-xl",
      lg: "text-2xl",
    }

    const cardVariants = {
      default: "bg-card border border-border hover:border-brand-primary/50",
      glass: "glass-effect hover:bg-white/15",
      gradient: "bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 border border-brand-primary/20 hover:border-brand-primary/50",
      minimal: "bg-transparent border-0 hover:bg-accent/5",
    }

    const cardElement = (
      <Card
        ref={ref}
        className={cn(
          "group transition-all duration-500 cursor-default",
          cardVariants[variant],
          interactive && "cursor-pointer hover:scale-[1.02] hover:shadow-xl",
          isHovered && variant === 'glass' && "glow-effect",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        {...props}
      >
        <CardHeader className={cn("text-center", sizeClasses[size])}>
          {/* Icon */}
          {icon && (
            <motion.div
              className="mx-auto mb-4 w-fit"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0 
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className={cn(
                "p-4 rounded-2xl transition-all duration-300",
                variant === 'default' && "bg-brand-primary/10 group-hover:bg-brand-primary/20",
                variant === 'glass' && "bg-white/10 group-hover:bg-white/20",
                variant === 'gradient' && "bg-gradient-to-br from-brand-primary/20 to-brand-accent/20",
                variant === 'minimal' && "bg-accent/10 group-hover:bg-accent/20"
              )}>
                <Icon 
                  name={icon} 
                  size={iconSizes[size]}
                  className={cn(
                    "transition-colors duration-300",
                    iconColor ? `text-[${iconColor}]` : "text-brand-primary group-hover:text-brand-accent"
                  )}
                />
              </div>
            </motion.div>
          )}

          {/* Title */}
          <CardTitle className={cn(
            "font-bold mb-2 transition-colors duration-300",
            titleSizes[size],
            "group-hover:text-brand-primary"
          )}>
            {title}
          </CardTitle>

          {/* Description */}
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    )

    if (interactive) {
      return (
        <motion.div
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {cardElement}
        </motion.div>
      )
    }

    return cardElement
  }
)
FeatureCard.displayName = "FeatureCard"

// Feature Grid component for organizing multiple feature cards
export interface FeatureGridProps {
  features: FeatureCardProps[]
  columns?: 1 | 2 | 3 | 4
  variant?: 'default' | 'glass' | 'gradient' | 'minimal'
  size?: 'sm' | 'default' | 'lg'
  interactive?: boolean
  className?: string
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ 
  features, 
  columns = 3,
  variant = 'default',
  size = 'default',
  interactive = false,
  className 
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  }

  return (
    <div className={cn(
      "grid gap-6",
      gridCols[columns],
      className
    )}>
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        >
          <FeatureCard 
            {...feature} 
            variant={feature.variant || variant}
            size={feature.size || size}
            interactive={feature.interactive ?? interactive}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Feature Showcase component with alternating layout
export interface FeatureShowcaseProps {
  features: Array<FeatureCardProps & {
    image?: string
    details?: string[]
  }>
  className?: string
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ 
  features, 
  className 
}) => {
  return (
    <div className={cn("space-y-16", className)}>
      {features.map((feature, index) => {
        const isEven = index % 2 === 0

        return (
          <motion.div
            key={feature.title}
            className={cn(
              "grid lg:grid-cols-2 gap-8 items-center",
              !isEven && "lg:grid-flow-col-dense"
            )}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Content */}
            <div className={cn(!isEven && "lg:col-start-2")}>
              <FeatureCard 
                {...feature}
                variant="minimal"
                size="lg"
                className="border-0 p-0 bg-transparent"
              />
              
              {feature.details && (
                <ul className="mt-6 space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <motion.li
                      key={detailIndex}
                      className="flex items-center gap-3 text-muted-foreground"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: detailIndex * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      <Icon name="check" size="sm" className="text-brand-success flex-shrink-0" />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>

            {/* Image/Visual */}
            {feature.image && (
              <div className={cn(
                "relative h-64 lg:h-80 rounded-2xl overflow-hidden",
                !isEven && "lg:col-start-1"
              )}>
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-accent/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon 
                    name={feature.icon || 'code'} 
                    size="3xl" 
                    className="text-brand-primary/60" 
                  />
                </div>
              </div>
            )}
          </motion.div>
        )
      })}
    </div>
  )
}

export { FeatureCard, FeatureGrid, FeatureShowcase }
