// Configuração centralizada de navegação
// Seguindo princípios SOLID: Single Responsibility + DRY

import { type IconName } from "@/components/atoms"

export interface NavigationItem {
  id: string
  label: string
  href: string
  icon?: IconName
  external?: boolean
  description?: string
  active?: boolean
}

export interface NavigationConfig {
  main: NavigationItem[]
  footer: NavigationItem[]
  social: NavigationItem[]
}

// Configuração principal de navegação - ÚNICA FONTE DE VERDADE
export const navigationConfig: NavigationConfig = {
  main: [
    {
      id: "home",
      label: "Início",
      href: "/",
      icon: "home",
      description: "Página principal"
    },
    {
      id: "about", 
      label: "Sobre Mim",
      href: "/about",
      icon: "user",
      description: "Informações pessoais e profissionais"
    },
    {
      id: "projects",
      label: "Projetos", 
      href: "/#projects",
      icon: "briefcase",
      description: "Portfolio de projetos desenvolvidos"
    },
    {
      id: "contact",
      label: "Contacto",
      href: "/#contact", 
      icon: "mail",
      description: "Informações de contacto"
    }
  ],
  footer: [
    {
      id: "privacy",
      label: "Privacidade",
      href: "/privacy",
      description: "Política de privacidade"
    },
    {
      id: "terms",
      label: "Termos",
      href: "/terms", 
      description: "Termos de utilização"
    }
  ],
  social: [
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://linkedin.com/in/cabrit0/",
      icon: "briefcase",
      external: true,
      description: "Perfil profissional no LinkedIn"
    },
    {
      id: "github", 
      label: "GitHub",
      href: "https://github.com/cabrit0",
      icon: "code",
      external: true,
      description: "Repositórios de código no GitHub"
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:cabrit0o.dev@gmail.com",
      icon: "mail",
      description: "Contacto por email"
    }
  ]
}

// Utilitários para navegação
export const getNavigationItem = (id: string): NavigationItem | undefined => {
  return [
    ...navigationConfig.main,
    ...navigationConfig.footer, 
    ...navigationConfig.social
  ].find(item => item.id === id)
}

export const getMainNavigation = (): NavigationItem[] => {
  return navigationConfig.main
}

export const getNavigationWithActive = (currentPath: string): NavigationItem[] => {
  return navigationConfig.main.map(item => {
    let isActive = false

    if (item.href === currentPath) {
      // Exact match for pages like /about
      isActive = true
    } else if (item.href.includes('#') && currentPath === '/') {
      // For anchor links on home page, only activate when on home page
      isActive = item.id === 'home'
    } else if (item.id === 'home' && currentPath === '/') {
      // Home is active when on root path
      isActive = true
    }

    return {
      ...item,
      active: isActive
    }
  })
}

// Labels centralizados para CTAs e botões
export const labels = {
  cta: {
    downloadCV: "Download CV",
    viewMore: "Ver Mais",
    contact: "Entrar em Contacto",
    backToTop: "Voltar ao Topo"
  },
  navigation: {
    menu: "Menu",
    close: "Fechar",
    back: "Voltar"
  },
  actions: {
    submit: "Enviar",
    cancel: "Cancelar",
    save: "Guardar",
    edit: "Editar",
    delete: "Eliminar"
  }
} as const

export type LabelKey = keyof typeof labels
export type CTALabelKey = keyof typeof labels.cta
export type NavigationLabelKey = keyof typeof labels.navigation
export type ActionLabelKey = keyof typeof labels.actions
