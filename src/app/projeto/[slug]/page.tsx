"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import { TechBadge } from "@/components/molecules/TechBadge"
import { ProjectHeader } from "@/components/molecules/ProjectHeader"
import { ProjectActionButtons } from "@/components/molecules/ProjectActionButtons"
import { SectionHeader } from "@/components/molecules/SectionHeader"
import { ProjectSection } from "@/components/molecules/ProjectSection"
import { ProjectGallery } from "@/components/molecules/ProjectGallery"
import { findProjectBySlug } from "@/lib/project-utils"
import { fadeInUp, staggerContainer } from "@/lib/animations"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = React.use(params)

  // Find project by slug using utility function
  const project = findProjectBySlug(slug)

  if (!project) {
    notFound()
  }



  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <ProjectHeader category={project.category} featured={project.featured} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-6xl mx-auto space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              {project.longDescription || project.description}
            </p>

            {/* Action Buttons */}
            <ProjectActionButtons
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </motion.div>

          {/* Project Gallery */}
          {(project.images || project.image) && (
            <ProjectGallery
              images={project.images || (project.image ? [project.image] : [])}
              title={project.title}
              className="mb-12"
            />
          )}

          {/* Technologies Section */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <SectionHeader
              title="Tecnologias Utilizadas"
              description="Stack tecnológico que deu vida a este projeto"
            />

            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech) => (
                <TechBadge
                  key={tech}
                  tech={tech}
                  className="text-base px-4 py-2 hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </motion.div>

          {/* Features Section */}
          <ProjectSection
            title="Principais Funcionalidades"
            description="As características que tornam este projeto especial"
            items={project.features || []}
            icon="check"
            iconColor="text-brand-primary"
            bgColor="bg-brand-primary/20"
            layout="grid"
          />

          {/* Challenges Section */}
          <ProjectSection
            title="Desafios Enfrentados"
            description="Os principais obstáculos superados durante o desenvolvimento"
            items={project.challenges || []}
            icon="zap"
            iconColor="text-yellow-400"
            bgColor="bg-yellow-400/20"
            layout="list"
          />

          {/* Learnings Section */}
          <ProjectSection
            title="Principais Aprendizagens"
            description="O conhecimento e experiência adquiridos através deste projeto"
            items={project.learnings || []}
            icon="star"
            iconColor="text-blue-400"
            bgColor="bg-blue-400/20"
            layout="grid"
          />


        </motion.div>
      </div>
    </div>
  )
}
