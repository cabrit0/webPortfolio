"use client"

import { AboutSection } from "@/components/organisms"
import { Header } from "@/components/organisms"
import Footer from "@/components/organisms/Footer"
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
      description: "Criação de aplicações web modernas com React, JavaScript, HTML/CSS e frameworks como TailwindCSS. Experiência em desenvolvimento full-stack com foco na experiência do utilizador.",
      icon: "code"
    },
    {
      title: "Desenvolvimento Mobile",
      description: "Aplicações móveis cross-platform com Flutter e Dart, incluindo gestores financeiros e sistemas de controlo. Experiência em desenvolvimento nativo para Android e iOS.",
      icon: "smartphone"
    },
    {
      title: "Inteligência Artificial",
      description: "Desenvolvimento de soluções de reconhecimento visual com PyTorch, YOLO e OpenCV. Projeto de final de licenciatura focado em IA para a indústria automóvel.",
      icon: "zap"
    },
    {
      title: "Desenvolvimento Backend",
      description: "APIs e sistemas backend robustos com Node.js, Express.js, Python e PHP para gestão de dados complexos e arquiteturas escaláveis.",
      icon: "server"
    },
    {
      title: "Bases de Dados",
      description: "Gestão eficiente de dados com MongoDB, MySQL, SQLite e SQL. Experiência em modelação de dados e otimização de consultas para aplicações web e mobile.",
      icon: "database"
    },
    {
      title: "Desenvolvimento de Jogos",
      description: "Desenvolvimento de jogos e aplicações interativas com Unity e C. Experiência adquirida durante estágio na Horus Gaming Entertainment.",
      icon: "gamepad"
    }
  ]

  // Stats based on real experience
  const stats = [
    { label: "Projetos Realizados", value: "9+", icon: "briefcase" },
    { label: "Tecnologias Usadas", value: "17+", icon: "code" },
    { label: "Ano de Finalização", value: "2025", icon: "star" },
    { label: "Experiência Profissional", value: "1 ano", icon: "building" }
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

        showCTA={true}
        currentPath="/about"
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
