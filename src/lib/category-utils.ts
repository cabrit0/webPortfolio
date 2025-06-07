// Category utilities - Centralized category logic and styling
// Single Responsibility: Handles all category-related operations

import { type Project } from "@/data/profile"

/**
 * Category configuration type
 */
export interface CategoryConfig {
  label: string
  color: string
  bgColor: string
  borderColor: string
  icon: string
  description: string
}

/**
 * Category configurations - Single source of truth
 */
export const categoryConfigs: Record<string, CategoryConfig> = {
  web: {
    label: "Web",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/50",
    icon: "🌐",
    description: "Aplicações web modernas e responsivas"
  },
  mobile: {
    label: "Mobile", 
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/50",
    icon: "📱",
    description: "Aplicações móveis nativas e híbridas"
  },
  ai: {
    label: "AI",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/50",
    icon: "🤖",
    description: "Inteligência artificial e machine learning"
  },
  system: {
    label: "Sistema",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10", 
    borderColor: "border-purple-500/50",
    icon: "⚙️",
    description: "Sistemas e ferramentas de backend"
  }
}

/**
 * Category utility class
 */
export class CategoryUtils {
  /**
   * Get category configuration
   */
  static getConfig(category: string): CategoryConfig {
    return categoryConfigs[category] || {
      label: category,
      color: "text-neutral-400",
      bgColor: "bg-neutral-500/10",
      borderColor: "border-neutral-500/50", 
      icon: "📄",
      description: "Categoria personalizada"
    }
  }

  /**
   * Get category classes for badges
   */
  static getBadgeClasses(category: string): string {
    const config = this.getConfig(category)
    return `${config.borderColor} ${config.color} ${config.bgColor}`
  }

  /**
   * Get category classes for cards
   */
  static getCardClasses(category: string): string {
    const config = this.getConfig(category)
    return `hover:${config.borderColor} hover:${config.bgColor}`
  }

  /**
   * Get all available categories
   */
  static getAllCategories(): string[] {
    return Object.keys(categoryConfigs)
  }

  /**
   * Get category label
   */
  static getLabel(category: string): string {
    return this.getConfig(category).label
  }

  /**
   * Get category icon
   */
  static getIcon(category: string): string {
    return this.getConfig(category).icon
  }

  /**
   * Get category description
   */
  static getDescription(category: string): string {
    return this.getConfig(category).description
  }

  /**
   * Check if category exists
   */
  static exists(category: string): boolean {
    return category in categoryConfigs
  }

  /**
   * Get category statistics
   */
  static getStats(projects: Project[]) {
    return this.getAllCategories().map(category => ({
      category,
      ...this.getConfig(category),
      count: projects.filter(p => p.category === category).length
    }))
  }
}
