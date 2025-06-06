// Project Service - Centralized project logic following SOLID principles
// Single Responsibility: Handles all project-related operations

import { projects, type Project } from "@/data/profile"

/**
 * Service class for project operations
 * Follows Single Responsibility Principle
 */
export class ProjectService {
  /**
   * Convert project title to URL-friendly slug
   */
  static createSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim()
  }

  /**
   * Find project by slug
   */
  static findBySlug(slug: string): Project | undefined {
    return projects.find(project => 
      this.createSlug(project.title) === slug
    )
  }

  /**
   * Get all project slugs for static generation
   */
  static getAllSlugs(): { slug: string }[] {
    return projects.map(project => ({
      slug: this.createSlug(project.title)
    }))
  }

  /**
   * Generate project URL
   */
  static getUrl(title: string): string {
    return `/projeto/${this.createSlug(title)}`
  }

  /**
   * Get projects by category
   */
  static getByCategory(category: string): Project[] {
    if (category === 'all') return projects
    return projects.filter(project => project.category === category)
  }

  /**
   * Get featured projects
   */
  static getFeatured(): Project[] {
    return projects.filter(project => project.featured)
  }

  /**
   * Get projects with live demos
   */
  static getWithLiveDemo(): Project[] {
    return projects.filter(project => project.liveUrl)
  }

  /**
   * Get all unique categories
   */
  static getCategories(): string[] {
    const categories = projects.map(project => project.category)
    return ['all', ...Array.from(new Set(categories))]
  }

  /**
   * Check if project has complete data
   */
  static isComplete(project: Project): boolean {
    return !!(
      project.title &&
      project.description &&
      project.technologies.length > 0
    )
  }

  /**
   * Get project statistics
   */
  static getStats() {
    return {
      total: projects.length,
      featured: this.getFeatured().length,
      withLiveDemo: this.getWithLiveDemo().length,
      categories: this.getCategories().length - 1, // Exclude 'all'
      byCategory: this.getCategories()
        .filter(cat => cat !== 'all')
        .reduce((acc, category) => {
          acc[category] = this.getByCategory(category).length
          return acc
        }, {} as Record<string, number>)
    }
  }
}
