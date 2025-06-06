import { projects } from "@/data/profile"

/**
 * Convert project title to URL-friendly slug
 */
export function createProjectSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim()
}

/**
 * Find project by slug
 */
export function findProjectBySlug(slug: string) {
  return projects.find(project =>
    createProjectSlug(project.title) === slug
  )
}

/**
 * Get all project slugs for static generation
 */
export function getAllProjectSlugs() {
  return projects.map(project => ({
    slug: createProjectSlug(project.title)
  }))
}

/**
 * Generate project URL
 */
export function getProjectUrl(title: string): string {
  return `/projeto/${createProjectSlug(title)}`
}
