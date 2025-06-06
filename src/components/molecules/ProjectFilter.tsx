"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/atoms/Button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface ProjectFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export const ProjectFilter = React.forwardRef<
  HTMLDivElement,
  ProjectFilterProps
>(({
  categories,
  selectedCategory,
  onCategoryChange,
  className,
  ...props
}, ref) => {
  return (
    <div ref={ref} className={cn("space-y-4", className)} {...props}>
      {/* Category Filter */}
      <div className="text-center space-y-4">
        <h3 className="text-lg font-semibold">Filtrar por Categoria</h3>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            variant={selectedCategory === "all" ? "primary" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("all")}
            className={cn(
              "transition-all duration-300 rounded-full px-6",
              selectedCategory === "all"
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
                : "hover:bg-brand-primary/10 hover:border-brand-primary/50 hover:text-brand-primary"
            )}
          >
            Todos os Projetos
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "primary" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "transition-all duration-300 capitalize rounded-full px-6",
                selectedCategory === category
                  ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
                  : "hover:bg-brand-primary/10 hover:border-brand-primary/50 hover:text-brand-primary"
              )}
            >
              {category === 'web' ? 'Web' :
               category === 'mobile' ? 'Mobile' :
               category === 'ai' ? 'Inteligência Artificial' :
               category}
            </Button>
          ))}
        </div>

        {/* Clear Filter */}
        {selectedCategory !== "all" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onCategoryChange("all")}
              className="text-muted-foreground hover:text-foreground rounded-full"
            >
              ✕ Limpar Filtro
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
})

ProjectFilter.displayName = "ProjectFilter"

// Hook for managing project filters
export const useProjectFilter = (projects: any[]) => {
  const [selectedCategory, setSelectedCategory] = React.useState("all")

  // Extract unique categories
  const categories = React.useMemo(() => {
    return Array.from(new Set(projects.map(p => p.category)))
  }, [projects])

  // Filter projects based on selected category
  const filteredProjects = React.useMemo(() => {
    return projects.filter(project => {
      return selectedCategory === "all" || project.category === selectedCategory
    })
  }, [projects, selectedCategory])

  return {
    categories,
    selectedCategory,
    filteredProjects,
    setSelectedCategory
  }
}
