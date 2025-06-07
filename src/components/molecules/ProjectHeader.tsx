"use client"

import { Button, Icon } from "@/components/atoms"
import { Badge } from "@/components/ui/badge"
import { getCategoryStyle } from "@/lib/category-styles"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

interface ProjectHeaderProps {
  category: string
  featured?: boolean
}

export function ProjectHeader({ category, featured }: ProjectHeaderProps) {
  const router = useRouter()

  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-lg">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Back Button - More prominent with mobile optimization */}
          <Button
            variant="ghost"
            size="lg"
            onClick={() => router.back()}
            leftIcon={<Icon name="arrowLeft" size="default" className="sm:mr-2" />}
            className="hover:bg-brand-primary/15 hover:text-brand-primary transition-all duration-300 font-medium px-4 py-2 sm:px-6 sm:py-3 relative z-10"
          >
            <span className="hidden sm:inline">Voltar</span>
          </Button>

          {/* Badges - More prominent and spaced with mobile optimization */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Badge
              variant="outline"
              className={cn(
                "capitalize text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 font-semibold border-2 transition-all duration-300 hover:scale-105",
                getCategoryStyle(category)
              )}
            >
              {category === 'ai' ? 'AI' :
               category === 'web' ? 'Web' :
               category === 'mobile' ? 'Mobile' :
               category}
            </Badge>

            {featured && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Icon name="star" size="sm" className="mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Projeto em Destaque</span>
                <span className="sm:hidden">Destaque</span>
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
