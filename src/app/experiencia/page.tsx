"use client"

import { ExperienceSection } from "@/components/organisms/ExperienceSection"
import { Header } from "@/components/organisms"
import Footer from "@/components/organisms/Footer"
import { skills, technologies } from "@/data/profile"

export default function ExperiencePage() {
  const handleCtaClick = () => {
    console.log('Download CV clicked')
  }

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
        currentPath="/experiencia"
        onCtaClick={handleCtaClick}
      />

      {/* Experience Section */}
      <ExperienceSection
        title="Experiência & Competências"
        description="Percurso técnico e profissional com foco em tecnologias modernas e desenvolvimento de soluções inovadoras que criam valor real."
        skills={skills}
        technologies={allTechnologies}
        className="pt-20"
      />

      {/* Footer */}
      <Footer />
    </div>
  )
}
