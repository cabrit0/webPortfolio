"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, Icon, Separator } from "@/components/atoms"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export interface ProjectCardProps {
  title: string
  description: string
  image?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  className?: string
  onCardClick?: () => void
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ 
    title, 
    description, 
    image, 
    technologies, 
    liveUrl, 
    githubUrl, 
    featured = false,
    className,
    onCardClick,
    ...props 
  }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false)
    const [imageLoaded, setImageLoaded] = React.useState(false)

    return (
      <motion.div
        ref={ref}
        className={cn("group cursor-pointer", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onCardClick}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        {...props}
      >
        <Card className={cn(
          "h-full overflow-hidden transition-all duration-500",
          "glass-effect hover:shadow-2xl",
          featured && "ring-2 ring-brand-primary/50 hover:ring-brand-primary",
          isHovered && "glow-effect-lg"
        )}>
          {/* Project Image */}
          {image && (
            <div className="relative h-48 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className={cn(
                    "object-cover transition-opacity duration-300",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                />
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-muted animate-pulse" />
                )}
              </motion.div>
              
              {/* Overlay with actions */}
              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {liveUrl && (
                  <Button
                    variant="glass"
                    size="sm"
                    leftIcon={<Icon name="external" size="sm" />}
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(liveUrl, '_blank')
                    }}
                  >
                    Live Demo
                  </Button>
                )}
                {githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    leftIcon={<Icon name="github" size="sm" />}
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(githubUrl, '_blank')
                    }}
                  >
                    Code
                  </Button>
                )}
              </motion.div>

              {/* Featured badge */}
              {featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-brand-primary to-brand-accent text-white">
                    <Icon name="star" size="xs" className="mr-1" />
                    Featured
                  </Badge>
                </div>
              )}
            </div>
          )}

          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold group-hover:text-brand-primary transition-colors duration-300">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              {description}
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-0">
            {/* Technologies */}
            <div className="space-y-4">
              <Separator variant="subtle" spacing="none" />
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      <Badge 
                        variant="secondary" 
                        className="text-xs hover:bg-brand-primary/20 hover:text-brand-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action buttons for mobile */}
              <div className="flex gap-2 md:hidden">
                {liveUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1"
                    leftIcon={<Icon name="external" size="sm" />}
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(liveUrl, '_blank')
                    }}
                  >
                    Demo
                  </Button>
                )}
                {githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    leftIcon={<Icon name="github" size="sm" />}
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(githubUrl, '_blank')
                    }}
                  >
                    Code
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }
)
ProjectCard.displayName = "ProjectCard"

// Project Grid component for organizing multiple project cards
export interface ProjectGridProps {
  projects: ProjectCardProps[]
  columns?: 1 | 2 | 3 | 4
  className?: string
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  columns = 3, 
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
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  )
}

export { ProjectCard, ProjectGrid }
