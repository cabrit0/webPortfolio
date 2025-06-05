"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ProjectFilterProps {
  categories: string[]
  technologies: string[]
  selectedCategory: string
  selectedTechnology: string
  onCategoryChange: (category: string) => void
  onTechnologyChange: (technology: string) => void
  className?: string
}

export const ProjectFilter = React.forwardRef<
  HTMLDivElement,
  ProjectFilterProps
>(({
  categories,
  technologies,
  selectedCategory,
  selectedTechnology,
  onCategoryChange,
  onTechnologyChange,
  className,
  ...props
}, ref) => {
  return (
    <div ref={ref} className={cn("space-y-6", className)} {...props}>
      {/* Category Filter */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Categoria</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("all")}
            className={cn(
              "transition-all duration-300",
              selectedCategory === "all" 
                ? "bg-brand-primary text-white" 
                : "hover:bg-brand-primary/10"
            )}
          >
            Todos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "transition-all duration-300 capitalize",
                selectedCategory === category 
                  ? "bg-brand-primary text-white" 
                  : "hover:bg-brand-primary/10"
              )}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Technology Filter */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Tecnologia</h3>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedTechnology === "all" ? "default" : "outline"}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:scale-105",
              selectedTechnology === "all" 
                ? "bg-brand-secondary text-white" 
                : "hover:bg-brand-secondary/10"
            )}
            onClick={() => onTechnologyChange("all")}
          >
            Todas
          </Badge>
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant={selectedTechnology === tech ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  selectedTechnology === tech 
                    ? "bg-brand-secondary text-white" 
                    : "hover:bg-brand-secondary/10"
                )}
                onClick={() => onTechnologyChange(tech)}
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {(selectedCategory !== "all" || selectedTechnology !== "all") && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              onCategoryChange("all")
              onTechnologyChange("all")
            }}
            className="text-muted-foreground hover:text-foreground"
          >
            Limpar Filtros
          </Button>
        </motion.div>
      )}
    </div>
  )
})

ProjectFilter.displayName = "ProjectFilter"

// Hook for managing project filters
export const useProjectFilter = (projects: any[]) => {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [selectedTechnology, setSelectedTechnology] = React.useState("all")

  // Extract unique categories and technologies
  const categories = React.useMemo(() => {
    return Array.from(new Set(projects.map(p => p.category)))
  }, [projects])

  const technologies = React.useMemo(() => {
    const allTechs = projects.flatMap(p => p.technologies)
    return Array.from(new Set(allTechs)).sort()
  }, [projects])

  // Filter projects based on selected filters
  const filteredProjects = React.useMemo(() => {
    return projects.filter(project => {
      const categoryMatch = selectedCategory === "all" || project.category === selectedCategory
      const technologyMatch = selectedTechnology === "all" || project.technologies.includes(selectedTechnology)
      return categoryMatch && technologyMatch
    })
  }, [projects, selectedCategory, selectedTechnology])

  return {
    categories,
    technologies,
    selectedCategory,
    selectedTechnology,
    filteredProjects,
    setSelectedCategory,
    setSelectedTechnology
  }
}
