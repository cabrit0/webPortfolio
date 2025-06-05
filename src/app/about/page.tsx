"use client"

import { AboutSection } from "@/components/organisms"
import { Header } from "@/components/organisms"
import { personalInfo, skills, experience, education, technologies } from "@/data/profile"

export default function AboutPage() {
  const handleCtaClick = () => {
    console.log('Download CV clicked')
  }

  // Organize skills by category for better display
  const skillsByCategory = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    mobile: skills.filter(skill => skill.category === 'mobile'),
    database: skills.filter(skill => skill.category === 'database'),
    ai: skills.filter(skill => skill.category === 'ai'),
    language: skills.filter(skill => skill.category === 'language'),
    tool: skills.filter(skill => skill.category === 'tool')
  }

  // Features based on real experience
  const features = [
    {
      title: "Desenvolvimento Web",
      description: "Criação de aplicações web modernas com React, JavaScript, HTML/CSS e frameworks como TailwindCSS.",
      icon: "code"
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Aplicações móveis cross-platform com Flutter e Dart para Android e iOS.",
      icon: "smartphone"
    },
    {
      title: "Inteligência Artificial",
      description: "Desenvolvimento de soluções de reconhecimento visual com PyTorch, YOLO e OpenCV.",
      icon: "zap"
    },
    {
      title: "Backend Development",
      description: "APIs e sistemas backend com Node.js, Express.js, Python e PHP.",
      icon: "database"
    },
    {
      title: "Bases de Dados",
      description: "Gestão de dados com MongoDB e SQL para aplicações web e mobile.",
      icon: "database"
    },
    {
      title: "Game Development",
      description: "Desenvolvimento de jogos e aplicações interativas com Unity e C.",
      icon: "gamepad"
    }
  ]

  // Stats based on real experience
  const stats = [
    { label: "Projetos", value: "7+", icon: "briefcase" },
    { label: "Tecnologias", value: "15+", icon: "code" },
    { label: "Finalista", value: "2025", icon: "star" },
    { label: "Trabalhador-Estudante", value: "2+ anos", icon: "building" }
  ]

  // All technologies for display
  const allTechnologies = [
    ...technologies.frontend,
    ...technologies.backend,
    ...technologies.mobile,
    ...technologies.database,
    ...technologies.ai,
    ...technologies.tools
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header
        variant="glass"
        position="fixed"
        showThemeToggle={false}
        showCTA={true}
        ctaLabel="Download CV"
        navigationItems={[
          { label: "Home", href: "/", icon: "home" },
          { label: "About", href: "/about", icon: "user", active: true },
          { label: "Projects", href: "#projects", icon: "briefcase" },
          { label: "Contact", href: "#contact", icon: "mail" }
        ]}
        onCtaClick={handleCtaClick}
      />

      {/* About Section */}
      <AboutSection
        title="Sobre Mim"
        description={personalInfo.bio}
        avatar={personalInfo.avatar}
        skills={skills}
        technologies={allTechnologies}
        features={features}
        stats={stats}
        className="pt-20"
      />
    </div>
  )
}
