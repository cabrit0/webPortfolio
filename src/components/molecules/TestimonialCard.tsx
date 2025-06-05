"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, Icon } from "@/components/atoms"

export interface TestimonialCardProps {
  quote: string
  author: {
    name: string
    role: string
    company?: string
    avatar?: string
  }
  rating?: number
  variant?: 'default' | 'glass' | 'minimal' | 'featured'
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ 
    quote, 
    author, 
    rating,
    variant = 'default',
    size = 'default',
    className,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)

    const sizeClasses = {
      sm: "p-4",
      default: "p-6",
      lg: "p-8",
    }

    const quoteSizes = {
      sm: "text-sm",
      default: "text-base",
      lg: "text-lg",
    }

    const cardVariants = {
      default: "bg-card border border-border hover:border-brand-primary/50",
      glass: "glass-effect hover:bg-white/15",
      minimal: "bg-transparent border-0 hover:bg-accent/5",
      featured: "bg-gradient-to-br from-brand-primary/10 via-brand-secondary/5 to-brand-accent/10 border border-brand-primary/20 hover:border-brand-primary/50",
    }

    return (
      <motion.div
        ref={ref}
        className={cn("group", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...props}
      >
        <Card className={cn(
          "h-full transition-all duration-500",
          cardVariants[variant],
          isHovered && variant === 'glass' && "glow-effect",
          variant === 'featured' && "relative overflow-hidden"
        )}>
          {/* Featured background effect */}
          {variant === 'featured' && (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5" />
          )}

          <CardContent className={cn("relative", sizeClasses[size])}>
            {/* Quote icon */}
            <motion.div
              className="mb-4"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={cn(
                "w-fit p-2 rounded-lg",
                variant === 'default' && "bg-brand-primary/10",
                variant === 'glass' && "bg-white/10",
                variant === 'minimal' && "bg-accent/10",
                variant === 'featured' && "bg-brand-primary/20"
              )}>
                <svg
                  className="w-6 h-6 text-brand-primary"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </motion.div>

            {/* Quote text */}
            <blockquote className={cn(
              "mb-6 leading-relaxed text-foreground",
              quoteSizes[size]
            )}>
              &ldquo;{quote}&rdquo;
            </blockquote>

            {/* Rating */}
            {rating && (
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                  >
                    <Icon
                      name="star"
                      size="sm"
                      className={cn(
                        index < rating 
                          ? "text-brand-warning" 
                          : "text-muted-foreground/30"
                      )}
                    />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Author */}
            <div className="flex items-center gap-3">
              <Avatar
                src={author.avatar}
                fallback={author.name}
                size="default"
                interactive
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground truncate">
                  {author.name}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {author.role}
                  {author.company && (
                    <span className="text-brand-primary"> @ {author.company}</span>
                  )}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }
)
TestimonialCard.displayName = "TestimonialCard"

// Testimonial Grid component
export interface TestimonialGridProps {
  testimonials: TestimonialCardProps[]
  columns?: 1 | 2 | 3
  variant?: 'default' | 'glass' | 'minimal' | 'featured'
  size?: 'sm' | 'default' | 'lg'
  className?: string
}

const TestimonialGrid: React.FC<TestimonialGridProps> = ({ 
  testimonials, 
  columns = 3,
  variant = 'default',
  size = 'default',
  className 
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  }

  return (
    <div className={cn(
      "grid gap-6",
      gridCols[columns],
      className
    )}>
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={`${testimonial.author.name}-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        >
          <TestimonialCard 
            {...testimonial} 
            variant={testimonial.variant || variant}
            size={testimonial.size || size}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Testimonial Carousel component
export interface TestimonialCarouselProps {
  testimonials: TestimonialCardProps[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  testimonials, 
  autoPlay = true,
  interval = 5000,
  className 
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <div className={cn("relative", className)}>
      {/* Main testimonial */}
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <TestimonialCard 
                {...testimonial} 
                variant="featured"
                size="lg"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
        >
          <Icon name="chevronLeft" size="sm" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-brand-primary w-6" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors"
        >
          <Icon name="chevronRight" size="sm" />
        </button>
      </div>
    </div>
  )
}

export { TestimonialCard, TestimonialGrid, TestimonialCarousel }
