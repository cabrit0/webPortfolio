"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Icon, type IconName } from "@/components/atoms"

// Tech stack configuration with colors and icons
const techConfig: Record<string, { 
  color: string
  bgColor: string
  icon?: IconName
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'language' | 'framework'
}> = {
  // Frontend
  'React': { color: '#61DAFB', bgColor: 'bg-blue-500/10', icon: 'code', category: 'frontend' },
  'Next.js': { color: '#000000', bgColor: 'bg-neutral-800/10', icon: 'code', category: 'framework' },
  'TypeScript': { color: '#3178C6', bgColor: 'bg-blue-600/10', icon: 'code', category: 'language' },
  'JavaScript': { color: '#F7DF1E', bgColor: 'bg-yellow-500/10', icon: 'code', category: 'language' },
  'TailwindCSS': { color: '#06B6D4', bgColor: 'bg-cyan-500/10', icon: 'palette', category: 'frontend' },
  'Framer Motion': { color: '#0055FF', bgColor: 'bg-blue-600/10', icon: 'zap', category: 'frontend' },
  'GSAP': { color: '#88CE02', bgColor: 'bg-green-500/10', icon: 'zap', category: 'frontend' },
  
  // Backend
  'Node.js': { color: '#339933', bgColor: 'bg-green-600/10', icon: 'code', category: 'backend' },
  'Python': { color: '#3776AB', bgColor: 'bg-blue-600/10', icon: 'code', category: 'language' },
  'Express': { color: '#000000', bgColor: 'bg-neutral-800/10', icon: 'code', category: 'backend' },
  'FastAPI': { color: '#009688', bgColor: 'bg-teal-600/10', icon: 'code', category: 'backend' },
  
  // Database
  'MongoDB': { color: '#47A248', bgColor: 'bg-green-600/10', icon: 'code', category: 'database' },
  'PostgreSQL': { color: '#336791', bgColor: 'bg-blue-700/10', icon: 'code', category: 'database' },
  'MySQL': { color: '#4479A1', bgColor: 'bg-blue-600/10', icon: 'code', category: 'database' },
  'Supabase': { color: '#3ECF8E', bgColor: 'bg-green-500/10', icon: 'code', category: 'database' },
  
  // Tools
  'Git': { color: '#F05032', bgColor: 'bg-red-500/10', icon: 'code', category: 'tool' },
  'Docker': { color: '#2496ED', bgColor: 'bg-blue-500/10', icon: 'code', category: 'tool' },
  'Figma': { color: '#F24E1E', bgColor: 'bg-red-500/10', icon: 'palette', category: 'tool' },
  'VS Code': { color: '#007ACC', bgColor: 'bg-blue-600/10', icon: 'code', category: 'tool' },
}

export interface TechBadgeProps {
  tech: string
  variant?: 'default' | 'outlined' | 'minimal' | 'glow'
  size?: 'sm' | 'default' | 'lg'
  showIcon?: boolean
  interactive?: boolean
  className?: string
  onClick?: () => void
}

const TechBadge = React.forwardRef<HTMLDivElement, TechBadgeProps>(
  ({ 
    tech, 
    variant = 'default',
    size = 'default',
    showIcon = true,
    interactive = false,
    className,
    onClick,
    ...props 
  }, ref) => {
    const config = techConfig[tech] || { 
      color: '#6B7280', 
      bgColor: 'bg-neutral-500/10', 
      icon: 'code' as IconName,
      category: 'tool' as const
    }

    const sizeClasses = {
      sm: "text-xs px-2 py-1",
      default: "text-sm px-3 py-1.5",
      lg: "text-base px-4 py-2",
    }

    const iconSizes = {
      sm: "xs" as const,
      default: "sm" as const,
      lg: "default" as const,
    }

    const badgeContent = (
      <div className="flex items-center gap-1.5">
        {showIcon && config.icon && (
          <Icon 
            name={config.icon} 
            size={iconSizes[size]}
            style={{ color: config.color }}
          />
        )}
        <span>{tech}</span>
      </div>
    )

    const badgeElement = (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 cursor-default",
          sizeClasses[size],

          // Variant styles
          variant === 'default' && cn(
            config.bgColor,
            "border-transparent hover:scale-105"
          ),
          variant === 'outlined' && cn(
            "bg-transparent border-2 hover:scale-105",
            `hover:${config.bgColor}`
          ),
          variant === 'minimal' && cn(
            "bg-transparent border-transparent hover:scale-105",
            `hover:${config.bgColor}`
          ),
          variant === 'glow' && cn(
            config.bgColor,
            "border-transparent hover:scale-105 hover:shadow-lg"
          ),

          interactive && "cursor-pointer hover:scale-110",
          className
        )}
        style={{
          borderColor: variant === 'outlined' ? config.color : undefined,
          color: config.color,
          boxShadow: variant === 'glow' ? `0 0 20px ${config.color}20` : undefined,
        }}
        onClick={onClick}
        {...props}
      >
        {badgeContent}
      </div>
    )

    if (interactive) {
      return (
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {badgeElement}
        </motion.div>
      )
    }

    return badgeElement
  }
)
TechBadge.displayName = "TechBadge"

// Tech Stack component for displaying multiple technologies
export interface TechStackProps {
  technologies: string[]
  variant?: 'default' | 'outlined' | 'minimal' | 'glow'
  size?: 'sm' | 'default' | 'lg'
  showIcons?: boolean
  interactive?: boolean
  maxItems?: number
  className?: string
  onTechClick?: (tech: string) => void
}

const TechStack: React.FC<TechStackProps> = ({
  technologies,
  variant = 'default',
  size = 'default',
  showIcons = true,
  interactive = false,
  maxItems,
  className,
  onTechClick,
}) => {
  const displayTechs = maxItems ? technologies.slice(0, maxItems) : technologies
  const remainingCount = maxItems ? technologies.length - maxItems : 0

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {displayTechs.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: index * 0.05,
            ease: "easeOut" 
          }}
        >
          <TechBadge
            tech={tech}
            variant={variant}
            size={size}
            showIcon={showIcons}
            interactive={interactive}
            onClick={() => onTechClick?.(tech)}
          />
        </motion.div>
      ))}
      
      {remainingCount > 0 && (
        <div
          className={cn(
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground",
            size === 'sm' && "text-xs px-2 py-1",
            size === 'default' && "text-sm px-3 py-1.5",
            size === 'lg' && "text-base px-4 py-2"
          )}
        >
          +{remainingCount} more
        </div>
      )}
    </div>
  )
}

// Tech Category Filter component
export interface TechCategoryFilterProps {
  categories: Array<'frontend' | 'backend' | 'database' | 'tool' | 'language' | 'framework'>
  selectedCategory?: string
  onCategoryChange?: (category: string | null) => void
  className?: string
}

const TechCategoryFilter: React.FC<TechCategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className,
}) => {
  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend', 
    database: 'Database',
    tool: 'Tools',
    language: 'Languages',
    framework: 'Frameworks',
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      <Badge
        variant={!selectedCategory ? "default" : "secondary"}
        className="cursor-pointer hover:scale-105 transition-transform"
        onClick={() => onCategoryChange?.(null)}
      >
        All
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? "default" : "secondary"}
          className="cursor-pointer hover:scale-105 transition-transform"
          onClick={() => onCategoryChange?.(category)}
        >
          {categoryLabels[category]}
        </Badge>
      ))}
    </div>
  )
}

export { TechBadge, TechStack, TechCategoryFilter, techConfig }
