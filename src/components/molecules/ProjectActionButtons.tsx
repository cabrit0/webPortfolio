"use client"

import { Button, Icon } from "@/components/atoms"
import { useRouter } from "next/navigation"

interface ProjectActionButtonsProps {
  liveUrl?: string
  githubUrl?: string
  className?: string
}

export function ProjectActionButtons({ liveUrl, githubUrl, className = "" }: ProjectActionButtonsProps) {
  const router = useRouter()

  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center pt-8 ${className}`}>
      {/* Live Demo Button - Always show, disable if no URL */}
      <Button
        variant="primary"
        size="lg"
        leftIcon={<Icon name="external" size="sm" />}
        onClick={() => liveUrl ? window.open(liveUrl, '_blank') : null}
        disabled={!liveUrl}
        className={`min-w-[200px] h-12 font-medium transition-all duration-300 ${
          !liveUrl
            ? 'opacity-50 cursor-not-allowed bg-neutral-600 hover:bg-neutral-600'
            : 'hover:scale-105 shadow-lg hover:shadow-xl'
        }`}
        title={!liveUrl ? "Demo não disponível" : "Ver demonstração ao vivo"}
      >
        Ver Demo Live
      </Button>

      {/* GitHub Button - Always show, disable if no URL */}
      <Button
        variant="outline"
        size="lg"
        leftIcon={<Icon name="github" size="sm" />}
        onClick={() => githubUrl ? window.open(githubUrl, '_blank') : null}
        disabled={!githubUrl}
        className={`min-w-[200px] h-12 font-medium transition-all duration-300 ${
          !githubUrl
            ? 'opacity-50 cursor-not-allowed border-neutral-600 text-neutral-500'
            : 'hover:scale-105 hover:shadow-lg'
        }`}
        title={!githubUrl ? "Código não disponível" : "Ver código no GitHub"}
      >
        Ver Código
      </Button>

      {/* Other Projects Button - Always enabled */}
      <Button
        variant="ghost"
        size="lg"
        leftIcon={<Icon name="briefcase" size="sm" />}
        onClick={() => router.push('/#projetos')}
        className="min-w-[200px] h-12 font-medium hover:scale-105 transition-all duration-300 hover:bg-brand-primary/10"
      >
        Ver Outros Projetos
      </Button>
    </div>
  )
}
