"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypographyH2, TypographyH3, TypographyP, GradientText } from "@/components/ui/typography"
import { Icon, Separator } from "@/components/atoms"
import { TechStack } from "@/components/molecules"
import AnimatedSection from "@/components/animations/AnimatedSection"
import ParallaxSection from "@/components/animations/ParallaxSection"
import GlitchText from "@/components/animations/GlitchText"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations"
import { experience, education, skills } from "@/data/profile"
import { calculateDevelopmentPreferences } from "@/lib/development-preferences"

export interface Skill {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'ai' | 'tool' | 'language'
}

export interface ExperienceSectionProps {
  title?: string
  description?: string
  skills?: Skill[]
  technologies?: string[]
  className?: string
}

const ExperienceSection = React.forwardRef<HTMLElement, ExperienceSectionProps>(
  ({ 
    title = "Experiência & Competências",
    description = "Percurso técnico e profissional com foco em tecnologias modernas e desenvolvimento de soluções inovadoras.",
    skills = [],
    technologies = [],
    className,
    ...props 
  }, ref) => {
    // Calculate dynamic development preferences based on projects
    const developmentPreferences = calculateDevelopmentPreferences()

    return (
      <section
        ref={ref}
        id="experience"
        className={cn(
          "py-20 bg-gradient-to-br from-background via-background to-neutral-950/50",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4">

          {/* Hero Section */}
          <AnimatedSection animation={fadeInUp} className="text-center mb-20">
            <div className="relative">
              <GlitchText
                text={title}
                triggerOnHover={false}
                autoGlitch={true}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent mb-8"
              />
              <div className="max-w-4xl mx-auto">
                <TypographyP className="text-xl text-neutral-300 leading-relaxed mb-8">
                  {description}
                </TypographyP>
              </div>
            </div>
          </AnimatedSection>

          {/* Stack Tecnológico & Competências */}
          <AnimatedSection animation={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <GlitchText
                text="Stack Tecnológico & Competências"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Tecnologias e competências organizadas por área de especialização
              </TypographyP>
            </div>

            {/* Competências organizadas por categoria */}
            <div className="max-w-6xl mx-auto space-y-8">

              {/* Linguagens de Programação */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Icon name="code" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-400">Linguagens de Programação</h4>
                        <p className="text-sm text-muted-foreground">Fundação técnica sólida</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'JavaScript', experience: '3+ anos', context: 'Desenvolvimento web e mobile' },
                        { name: 'Java', experience: '3 anos', context: 'Programação académica e sistemas' },
                        { name: 'Python', experience: '1+ ano', context: 'IA, automação e backend' },
                        { name: 'Dart', experience: '1 ano', context: 'Desenvolvimento Flutter' },
                        { name: 'C', experience: '1 ano', context: 'Sistemas e game development' },
                        { name: 'PHP', experience: '1+ ano', context: 'Desenvolvimento web backend' }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className="text-xs text-blue-400 border-blue-400/30">
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.context}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-green-500 hover:border-l-green-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <Icon name="palette" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-green-400">Frontend Development</h4>
                        <p className="text-sm text-muted-foreground">Interface de utilizador e experiência</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'React', experience: '1+ ano', context: 'SPAs e aplicações complexas' },
                        { name: 'HTML/CSS', experience: '3+ anos', context: 'Websites responsivos' },
                        { name: 'TailwindCSS', experience: '2+ anos', context: 'Design systems modernos' }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg p-4 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.context}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Backend & Mobile */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-orange-500 hover:border-l-orange-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Icon name="code" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-orange-400">Backend & Mobile</h4>
                        <p className="text-sm text-muted-foreground">Servidor e aplicações móveis</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'Node.js', experience: '1+ ano', context: 'APIs e serviços web' },
                        { name: 'Express.js', experience: '1+ ano', context: 'Servidores web robustos' },
                        { name: 'Flutter', experience: '1 ano', context: 'Apps móveis cross-platform' }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-4 border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className="text-xs text-orange-400 border-orange-400/30">
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.context}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bases de Dados */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-purple-500 hover:border-l-purple-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Icon name="database" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-purple-400">Bases de Dados</h4>
                        <p className="text-sm text-muted-foreground">Armazenamento e gestão de dados</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { name: 'MongoDB', experience: '2+ anos', context: 'Dados não-relacionais' },
                        { name: 'MySQL', experience: '2+ anos', context: 'Sistemas relacionais' },
                        { name: 'SQL', experience: '2+ anos', context: 'Consultas e otimização' },
                        { name: 'SQLite', experience: '1+ ano', context: 'Aplicações móveis' }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className="text-xs text-purple-400 border-purple-400/30">
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.context}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* IA & Machine Learning */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-yellow-500 hover:border-l-yellow-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                        <Icon name="zap" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-yellow-400">IA & Machine Learning</h4>
                        <p className="text-sm text-muted-foreground">Inteligência artificial e visão computacional</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { name: 'PyTorch', experience: '1+ ano', context: 'Projeto final de licenciatura' },
                        { name: 'YOLO', experience: '1+ ano', context: 'Reconhecimento visual' },
                        { name: 'OpenCV', experience: '1+ ano', context: 'Processamento de imagem' }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className="text-xs text-yellow-400 border-yellow-400/30">
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.context}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Ferramentas & Outros */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-gray-500 hover:border-l-gray-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-slate-500 rounded-lg flex items-center justify-center">
                        <Icon name="briefcase" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-400">Ferramentas & Outros</h4>
                        <p className="text-sm text-muted-foreground">Desenvolvimento e controlo de versões</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { name: 'Unity', experience: '6 meses', context: 'Estágio game development' },
                        { name: 'Git', experience: '3+ anos', context: 'Controlo de versões' }
                      ].map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-lg p-4 border border-gray-500/20 hover:border-gray-400/40 transition-all duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <Badge variant="outline" className="text-xs text-gray-400 border-gray-400/30">
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.context}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </div>

            {/* Development Preference Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="mt-12 text-center"
            >
              <Card className="glass-effect max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-brand-primary">Preferência de Desenvolvimento</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {developmentPreferences.map((preference, index) => (
                      <motion.div
                        key={preference.category}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className={`text-2xl font-bold ${preference.color}`}>
                          {preference.percentage}%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {preference.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>



          {/* Experience & Education Timeline */}
          <AnimatedSection animation={fadeInUp} className="mt-20">
            <div className="text-center mb-12">
              <GlitchText
                text="Experiência & Formação"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Percurso profissional e académico que moldou as minhas competências
              </TypographyP>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">

              {/* Experience */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-brand-primary">Experiência Profissional</h4>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      className="relative pl-8 pb-6 border-l-2 border-brand-primary/30 last:border-l-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-primary rounded-full"></div>
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-brand-primary/30 transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-foreground">{exp.position}</h5>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-brand-primary font-medium mb-1">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies?.map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-brand-secondary">Formação Académica</h4>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={edu.institution}
                      className="relative pl-8 pb-6 border-l-2 border-brand-secondary/30 last:border-l-0"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut"
                      }}
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-secondary rounded-full"></div>
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-brand-secondary/30 transition-all duration-300">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                        </div>
                        <p className="text-brand-secondary font-medium mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                        <Badge
                          variant={edu.status === 'completed' ? 'default' : 'outline'}
                          className="text-xs"
                        >
                          {edu.status === 'completed' ? 'Concluído' : 'Em Curso'}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>
          </AnimatedSection>

        </div>
      </section>
    )
  }
)
ExperienceSection.displayName = "ExperienceSection"

export { ExperienceSection }
