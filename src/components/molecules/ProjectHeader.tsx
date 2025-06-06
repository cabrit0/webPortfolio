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
    <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Back Button - More prominent */}
          <Button
            variant="ghost"
            size="lg"
            onClick={() => router.back()}
            leftIcon={<Icon name="arrowLeft" size="default" />}
            className="hover:bg-brand-primary/15 hover:text-brand-primary transition-all duration-300 font-medium px-6 py-3"
          >
            Voltar
          </Button>

          {/* Badges - More prominent and spaced */}
          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className={cn(
                "capitalize text-sm px-4 py-2 font-semibold border-2 transition-all duration-300 hover:scale-105",
                getCategoryStyle(category)
              )}
            >
              {category}
            </Badge>

            {featured && (
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-sm px-4 py-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Icon name="star" size="sm" className="mr-2" />
                Projeto em Destaque
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
