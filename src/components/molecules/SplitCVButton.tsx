'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"

interface SplitCVButtonProps {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost" | "glass"
  size?: "sm" | "default" | "lg" | "xl"
  className?: string
  onDownload?: (language: 'pt' | 'en') => void
}

export function SplitCVButton({
  variant = "outline",
  size = "default",
  className,
  onDownload
}: SplitCVButtonProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [isDownloading, setIsDownloading] = React.useState(false)
  const [downloadingLang, setDownloadingLang] = React.useState<'pt' | 'en' | null>(null)

  // Refs para efeito magnético
  const ptButtonRef = React.useRef<HTMLButtonElement>(null)
  const enButtonRef = React.useRef<HTMLButtonElement>(null)
  const ptTextRef = React.useRef<HTMLSpanElement>(null)
  const enTextRef = React.useRef<HTMLSpanElement>(null)

  // Detectar idioma preferido do browser
  const getPreferredLanguage = React.useCallback(() => {
    if (typeof window === 'undefined') return 'pt'
    const browserLang = navigator.language.toLowerCase()
    return browserLang.startsWith('pt') ? 'pt' : 'en'
  }, [])

  const preferredLang = getPreferredLanguage()

  // Configurar efeito magnético após os botões aparecerem
  React.useEffect(() => {
    if (!isExpanded || isDownloading || typeof window === 'undefined') return

    const setupMagneticEffect = (
      buttonRef: React.RefObject<HTMLButtonElement>,
      textRef: React.RefObject<HTMLSpanElement>,
      isPreferred: boolean
    ) => {
      const button = buttonRef.current
      const text = textRef.current
      if (!button || !text) return

      const magneticStrength = 0.3 // Igual para ambos

      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05, // Igual para ambos
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(text, {
          y: -2,
          duration: 0.3,
          ease: "power2.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        })
        gsap.to(text, {
          y: 0,
          x: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        })
      }

      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(button, {
          x: x * magneticStrength,
          y: y * magneticStrength,
          duration: 0.3,
          ease: "power2.out"
        })
        gsap.to(text, {
          x: x * (magneticStrength * 0.3),
          y: y * (magneticStrength * 0.3),
          duration: 0.3,
          ease: "power2.out"
        })
      }

      button.addEventListener('mouseenter', handleMouseEnter)
      button.addEventListener('mouseleave', handleMouseLeave)
      button.addEventListener('mousemove', handleMouseMove)

      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter)
        button.removeEventListener('mouseleave', handleMouseLeave)
        button.removeEventListener('mousemove', handleMouseMove)
      }
    }

    // Delay para garantir que os botões estão visíveis
    const timer = setTimeout(() => {
      const cleanupPT = setupMagneticEffect(ptButtonRef, ptTextRef, preferredLang === 'pt')
      const cleanupEN = setupMagneticEffect(enButtonRef, enTextRef, preferredLang === 'en')

      return () => {
        cleanupPT?.()
        cleanupEN?.()
      }
    }, 50) // Instantâneo

    return () => {
      clearTimeout(timer)
    }
  }, [isExpanded, isDownloading, preferredLang])

  // Componentes de bandeiras elegantes
  const PortugalFlag = () => (
    <div className="w-5 h-4 rounded-sm overflow-hidden border border-white/30 flex shadow-sm relative">
      <div className="w-2/5 bg-green-600"></div>
      <div className="w-3/5 bg-red-600"></div>
      {/* Escudo no centro onde as cores se encontram */}
      <div className="absolute inset-0 flex items-center" style={{ left: '40%', transform: 'translateX(-50%)' }}>
        <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-90 border border-yellow-500"></div>
      </div>
    </div>
  )

  const UKFlag = () => (
    <div className="w-5 h-4 rounded-sm overflow-hidden border border-white/30 bg-blue-900 relative shadow-sm">
      {/* Cruz de São Jorge (vermelha) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-0.5 bg-red-600"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-0.5 h-full bg-red-600"></div>
      </div>
      {/* Cruz de Santo André (branca) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-white transform rotate-45 origin-center"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-px bg-white transform -rotate-45 origin-center"></div>
      </div>
    </div>
  )

  // Handlers
  const handleMouseEnter = React.useCallback(() => {
    if (!isDownloading) {
      setIsExpanded(true)
    }
  }, [isDownloading])

  const handleMouseLeave = React.useCallback(() => {
    if (!isDownloading) {
      setIsExpanded(false)
    }
  }, [isDownloading])

  const handleDownload = React.useCallback(async (language: 'pt' | 'en') => {
    setDownloadingLang(language)
    setIsDownloading(true)
    setIsExpanded(false)

    try {
      // Simular processo de download
      await new Promise(resolve => setTimeout(resolve, 1200))

      // Criar link de download
      const fileName = language === 'pt' ? 'CabritoCV_PT.pdf' : 'CabritoCV_ING.pdf'
      const link = document.createElement('a')
      link.href = `/${fileName}`
      link.download = fileName
      link.target = '_blank'

      // Verificar se arquivo existe
      const response = await fetch(link.href, { method: 'HEAD' })
      if (!response.ok) {
        throw new Error('Arquivo não encontrado')
      }

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Callback opcional
      onDownload?.(language)

    } catch (error) {
      console.error('Download failed:', error)
      alert(`Erro ao baixar CV em ${language === 'pt' ? 'Português' : 'Inglês'}. Tente novamente.`)
    } finally {
      setDownloadingLang(null)
      setIsDownloading(false)
    }
  }, [onDownload])

  // Variantes de tamanho
  const sizeClasses = {
    sm: "h-9 text-sm",
    default: "h-11 text-base",
    lg: "h-12 text-lg",
    xl: "h-14 text-xl"
  }

  // Variantes de estilo (seguindo o padrão do projeto)
  const variantClasses = {
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 text-white shadow-lg hover:shadow-xl hover:shadow-brand-primary/25 glow-effect-lg shadow-2xl transition-all duration-500",
    secondary: "bg-gradient-to-r from-neutral-800 to-neutral-700 text-white hover:from-neutral-700 hover:to-neutral-600 shadow-lg",
    accent: "bg-gradient-to-r from-brand-accent to-brand-primary text-white shadow-lg hover:shadow-xl hover:shadow-brand-accent/25",
    outline: "border-2 border-white/50 text-white hover:bg-white/10 hover:border-white hover:shadow-lg hover:shadow-white/20",
    ghost: "text-foreground hover:bg-brand-primary/10 hover:text-brand-primary",
    glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg"
  }

  // Larguras responsivas baseadas no tamanho (ligeiramente aumentadas)
  const getWidths = () => {
    switch (size) {
      case 'sm':
        return { collapsed: "140px", expanded: "210px" }
      case 'lg':
        return { collapsed: "190px", expanded: "290px" }
      case 'xl':
        return { collapsed: "210px", expanded: "330px" }
      default:
        return { collapsed: "170px", expanded: "250px" }
    }
  }

  const widths = getWidths()

  // Animações ultra rápidas e espetaculares
  const containerVariants = {
    collapsed: {
      width: widths.collapsed,
      transition: {
        duration: 0.35,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.03,
        staggerDirection: -1
      }
    },
    expanded: {
      width: widths.expanded,
      transition: {
        duration: 0.35,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.03
      }
    }
  }

  return (
    <motion.div
      className={cn(
        "relative inline-flex items-center justify-center rounded-xl font-semibold group cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        isDownloading && "cursor-not-allowed opacity-70",
        className
      )}
      variants={containerVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        minWidth: widths.collapsed,
        overflow: 'visible' // Permitir overflow dos botões
      }}
    >
      {/* Animação de divisão espetacular e rápida */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Efeito de "crack" instantâneo */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "100%", opacity: [0, 1, 0] }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.05
              }}
            />

            {/* Linha de divisão central - mais rápida */}
            <motion.div
              className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/80 to-transparent z-10"
              initial={{
                height: "0%",
                opacity: 0,
                scaleY: 0
              }}
              animate={{
                height: "85%",
                opacity: [0, 1, 0.7],
                scaleY: 1
              }}
              exit={{
                height: "0%",
                opacity: 0,
                scaleY: 0
              }}
              transition={{
                duration: 0.25,
                ease: [0.68, -0.55, 0.265, 1.55],
                delay: 0.1
              }}
              style={{
                top: "7.5%",
                transform: "translateX(-50%)"
              }}
            />

            {/* Múltiplas ondas de energia */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "100%", opacity: [0, 0.8, 0] }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.15
              }}
            />

            {/* Pulso de energia duplo na divisão */}
            <motion.div
              className="absolute inset-y-0 left-1/2 w-3 bg-gradient-to-b from-transparent via-white/30 to-transparent blur-sm"
              initial={{
                opacity: 0,
                scaleX: 0,
                scaleY: 0
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scaleX: [0, 1.5, 0.8, 0],
                scaleY: [0, 1, 1, 0]
              }}
              transition={{
                duration: 0.35,
                ease: [0.68, -0.55, 0.265, 1.55],
                delay: 0.12
              }}
              style={{
                transform: "translateX(-50%)"
              }}
            />

            {/* Efeito de partículas */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: "-100%", opacity: [0, 0.6, 0] }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
          </>
        )}
      </AnimatePresence>
      {/* Estado normal - Texto unificado */}
      <AnimatePresence mode="wait">
        {!isExpanded && !isDownloading && (
          <motion.div
            key="unified"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
            }}
            transition={{
              duration: 0.5,
              ease: [0.23, 1, 0.32, 1],
              delay: isExpanded ? 0 : 0.15
            }}
            className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span className="text-lg">📄</span>
            <span className="font-medium">Download CV</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estado downloading */}
      <AnimatePresence mode="wait">
        {isDownloading && (
          <motion.div
            key="downloading"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-lg"
            >
              ⏳
            </motion.span>
            <span className="font-medium">
              {downloadingLang === 'pt' ? 'A baixar PT...' :
               downloadingLang === 'en' ? 'A baixar EN...' : 'A baixar...'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Estado expandido - Opções de idioma */}
      <AnimatePresence mode="wait">
        {isExpanded && !isDownloading && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] }
            }}
            transition={{
              duration: 0.15,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.02 // Instantâneo
            }}
            className="absolute inset-0 flex items-center justify-center gap-2 overflow-visible"
            style={{
              left: '-10px',
              right: '-10px',
              width: 'calc(100% + 20px)'
            }}
          >
            {/* Botão Português */}
            <motion.button
              ref={ptButtonRef}
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{
                duration: 0.15,
                delay: 0.02, // Instantâneo
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={() => handleDownload('pt')}
              className={cn(
                "flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-300",
                "border backdrop-blur-sm justify-center relative overflow-visible",
                "bg-white/50 border-white/60 hover:border-white/70 hover:bg-white/60 text-gray-800"
              )}
              style={{
                width: size === 'sm' ? '100px' : size === 'lg' ? '140px' : '120px',
                flexShrink: 0
              }}
            >

              <div className="relative z-10 flex items-center">
                <PortugalFlag />
              </div>
              <span ref={ptTextRef} className="text-xs sm:text-sm font-medium relative z-10">Português</span>
            </motion.button>

            {/* Separador elegante - aparece depois da divisão */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0, height: 0 }}
              animate={{ opacity: 1, scaleY: 1, height: "2rem" }}
              exit={{ opacity: 0, scaleY: 0, height: 0 }}
              transition={{
                duration: 0.1,
                delay: 0.05, // Instantâneo
                ease: [0.23, 1, 0.32, 1]
              }}
              className="w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
              style={{ flexShrink: 0 }}
            />

            {/* Botão Inglês */}
            <motion.button
              ref={enButtonRef}
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{
                duration: 0.15,
                delay: 0.05, // Quase simultâneo
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onClick={() => handleDownload('en')}
              className={cn(
                "flex items-center gap-2 px-2 sm:px-3 py-2 rounded-lg transition-all duration-300",
                "border backdrop-blur-sm justify-center relative overflow-visible",
                "bg-white/50 border-white/60 hover:border-white/70 hover:bg-white/60 text-gray-800"
              )}
              style={{
                width: size === 'sm' ? '100px' : size === 'lg' ? '140px' : '120px',
                flexShrink: 0
              }}
            >

              <div className="relative z-10 flex items-center">
                <UKFlag />
              </div>
              <span ref={enTextRef} className="text-xs sm:text-sm font-medium relative z-10">English</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Progress bar para download */}
      {isDownloading && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-current rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      )}
    </motion.div>
  )
}

export default SplitCVButton
