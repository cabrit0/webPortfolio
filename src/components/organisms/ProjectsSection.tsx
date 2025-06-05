"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { TypographyH2, TypographyP } from "@/components/ui/typography"
import { Button, Input, Icon } from "@/components/atoms"
import { ProjectCard, TechCategoryFilter, type ProjectCardProps } from "@/components/molecules"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export interface ProjectsSectionProps {
  title?: string
  description?: string
  projects?: ProjectCardProps[]
  showFilters?: boolean
  showSearch?: boolean
  itemsPerPage?: number
  className?: string
}

const ProjectsSection = React.forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ 
    title = "Featured Projects",
    description = "A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.",
    projects = [
      {
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management. Built with modern technologies for optimal performance.",
        image: "/api/placeholder/600/400",
        technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "TailwindCSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        featured: true
      },
      {
        title: "AI-Powered Analytics Dashboard",
        description: "An intelligent analytics platform that uses machine learning to provide insights and predictions for business data visualization.",
        image: "/api/placeholder/600/400",
        technologies: ["React", "Python", "FastAPI", "MongoDB", "Chart.js"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      },
      {
        title: "Real-time Chat Application",
        description: "A modern chat application with real-time messaging, file sharing, and video calls. Features end-to-end encryption and group management.",
        image: "/api/placeholder/600/400",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      },
      {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing modern design principles, smooth animations, and optimal performance across all devices.",
        image: "/api/placeholder/600/400",
        technologies: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      },
      {
        title: "Task Management System",
        description: "A comprehensive project management tool with team collaboration features, time tracking, and advanced reporting capabilities.",
        image: "/api/placeholder/600/400",
        technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      },
      {
        title: "Weather Forecast App",
        description: "A beautiful weather application with detailed forecasts, interactive maps, and location-based recommendations.",
        image: "/api/placeholder/600/400",
        technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example"
      }
    ],
    showFilters = true,
    showSearch = true,
    itemsPerPage = 6,
    className,
    ...props 
  }, ref) => {
    const [searchTerm, setSearchTerm] = React.useState("")
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')

    // Get all unique technologies for filtering
    const allTechnologies = React.useMemo(() => {
      const techs = new Set<string>()
      projects.forEach(project => {
        project.technologies.forEach(tech => techs.add(tech))
      })
      return Array.from(techs)
    }, [projects])

    // Filter projects based on search and category
    const filteredProjects = React.useMemo(() => {
      return projects.filter(project => {
        const matchesSearch = searchTerm === "" || 
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))

        const matchesCategory = selectedCategory === null ||
          project.technologies.includes(selectedCategory)

        return matchesSearch && matchesCategory
      })
    }, [projects, searchTerm, selectedCategory])

    // Paginate projects
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
    const paginatedProjects = filteredProjects.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )

    // Reset page when filters change
    React.useEffect(() => {
      setCurrentPage(1)
    }, [searchTerm, selectedCategory])

    const categories = ['frontend', 'backend', 'database', 'tool'] as const

    return (
      <section
        ref={ref}
        id="projects"
        className={cn(
          "py-20 bg-gradient-to-br from-neutral-950/50 via-background to-neutral-950/50",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <AnimatedSection animation={fadeInUp} className="text-center mb-16">
            <TypographyH2 className="mb-6">{title}</TypographyH2>
            <div className="max-w-3xl mx-auto">
              <TypographyP className="text-lg text-neutral-400 leading-relaxed">
                {description}
              </TypographyP>
            </div>
          </AnimatedSection>

          {/* Filters and Search */}
          {(showFilters || showSearch) && (
            <AnimatedSection animation={fadeInUp} className="mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                
                {/* Search */}
                {showSearch && (
                  <div className="w-full lg:w-96">
                    <Input
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      leftIcon={<Icon name="search" size="sm" />}
                      variant="glass"
                    />
                  </div>
                )}

                {/* View Mode Toggle */}
                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Icon name="menu" size="sm" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <Icon name="menu" size="sm" />
                  </Button>
                </div>

                {/* Technology Filter */}
                {showFilters && (
                  <div className="flex flex-wrap gap-2">
                    <Button
                      variant={selectedCategory === null ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setSelectedCategory(null)}
                    >
                      All
                    </Button>
                    {allTechnologies.slice(0, 6).map(tech => (
                      <Button
                        key={tech}
                        variant={selectedCategory === tech ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => setSelectedCategory(tech)}
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                )}

              </div>
            </AnimatedSection>
          )}

          {/* Projects Grid */}
          <AnimatedSection animation={staggerContainer} className="mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${searchTerm}-${selectedCategory}-${currentPage}`}
                className={cn(
                  "grid gap-8",
                  viewMode === 'grid' 
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {paginatedProjects.map((project, index) => (
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
              </motion.div>
            </AnimatePresence>
          </AnimatedSection>

          {/* Pagination */}
          {totalPages > 1 && (
            <AnimatedSection animation={fadeInUp}>
              <div className="flex justify-center items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <Icon name="chevronLeft" size="sm" />
                  Previous
                </Button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? 'primary' : 'ghost'}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <Icon name="chevronRight" size="sm" />
                </Button>
              </div>
            </AnimatedSection>
          )}

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <AnimatedSection animation={fadeInUp}>
              <div className="text-center py-16">
                <Icon name="search" size="3xl" className="text-muted-foreground mx-auto mb-4" />
                <TypographyP className="text-muted-foreground mb-4">
                  No projects found matching your criteria.
                </TypographyP>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory(null)
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </AnimatedSection>
          )}

        </div>
      </section>
    )
  }
)
ProjectsSection.displayName = "ProjectsSection"

export { ProjectsSection }
