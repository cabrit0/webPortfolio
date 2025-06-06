// Category styles - Single source of truth for category colors
// Eliminates duplication across components

export const categoryStyles = {
  web: "border-blue-500/50 text-blue-400 bg-blue-500/10",
  mobile: "border-green-500/50 text-green-400 bg-green-500/10", 
  ai: "border-orange-500/50 text-orange-400 bg-orange-500/10",
  system: "border-purple-500/50 text-purple-400 bg-purple-500/10"
} as const

export const getCategoryStyle = (category: string): string => {
  return categoryStyles[category as keyof typeof categoryStyles] || 
         "border-neutral-500/50 text-neutral-400 bg-neutral-500/10"
}
