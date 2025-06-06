// Development preferences calculator - Dynamic calculation based on projects
// Follows Single Responsibility Principle

import { projects, type Project } from "@/data/profile"

/**
 * Development preference categories
 */
export interface DevelopmentPreference {
  category: string
  percentage: number
  color: string
  label: string
}

/**
 * Category mapping for projects
 */
const categoryMapping = {
  web: 'frontend',
  mobile: 'mobile', 
  ai: 'ai',
  system: 'backend'
} as const

/**
 * Calculate development preferences based on project distribution
 * Considers fullstack projects (web category) as both frontend and backend
 */
export function calculateDevelopmentPreferences(): DevelopmentPreference[] {
  // Count projects by category
  const categoryCounts = {
    frontend: 0,
    backend: 0,
    mobile: 0,
    ai: 0
  }

  // Count projects in each category
  projects.forEach(project => {
    if (project.category === 'web') {
      // Web projects are fullstack - count for both frontend and backend
      categoryCounts.frontend++
      categoryCounts.backend++
    } else if (project.category === 'mobile') {
      categoryCounts.mobile++
    } else if (project.category === 'ai') {
      categoryCounts.ai++
    } else if (project.category === 'system') {
      categoryCounts.backend++
    }
  })

  // Calculate total "points" (web projects count twice)
  const totalPoints = categoryCounts.frontend + categoryCounts.backend + categoryCounts.mobile + categoryCounts.ai

  // Calculate percentages based on total points
  const preferences: DevelopmentPreference[] = [
    {
      category: 'frontend',
      percentage: totalPoints > 0 ? Math.round((categoryCounts.frontend / totalPoints) * 100) : 0,
      color: 'text-blue-400',
      label: 'Frontend'
    },
    {
      category: 'backend',
      percentage: totalPoints > 0 ? Math.round((categoryCounts.backend / totalPoints) * 100) : 0,
      color: 'text-purple-400',
      label: 'Backend'
    },
    {
      category: 'mobile',
      percentage: totalPoints > 0 ? Math.round((categoryCounts.mobile / totalPoints) * 100) : 0,
      color: 'text-green-400',
      label: 'Mobile'
    },
    {
      category: 'ai',
      percentage: totalPoints > 0 ? Math.round((categoryCounts.ai / totalPoints) * 100) : 0,
      color: 'text-orange-400',
      label: 'IA'
    }
  ]

  // Ensure percentages add up to 100% (handle rounding)
  const totalPercentage = preferences.reduce((sum, pref) => sum + pref.percentage, 0)
  if (totalPercentage !== 100 && totalPoints > 0) {
    // Adjust the largest category to make total 100%
    const largest = preferences.reduce((max, pref) =>
      pref.percentage > max.percentage ? pref : max
    )
    largest.percentage += (100 - totalPercentage)
  }

  return preferences
}

/**
 * Get development preference statistics
 */
export function getDevelopmentStats() {
  const preferences = calculateDevelopmentPreferences()
  const categoryCounts = {
    frontend: 0,
    backend: 0,
    mobile: 0,
    ai: 0
  }

  projects.forEach(project => {
    const mappedCategory = categoryMapping[project.category as keyof typeof categoryMapping]
    if (mappedCategory && mappedCategory in categoryCounts) {
      categoryCounts[mappedCategory]++
    }
  })

  return {
    preferences,
    totalProjects: projects.length,
    categoryCounts,
    mostPreferred: preferences.reduce((max, pref) => 
      pref.percentage > max.percentage ? pref : max
    )
  }
}
