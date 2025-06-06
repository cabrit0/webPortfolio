"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypographyP } from "@/components/ui/typography"
import { Avatar, Icon } from "@/components/atoms"
import { FeatureGrid } from "@/components/molecules"
import AnimatedSection from "@/components/animations/AnimatedSection"
import GlitchText from "@/components/animations/GlitchText"
import MagneticButton from "@/components/animations/MagneticButton"
import { fadeInUp } from "@/lib/animations"
import { socialSkills } from "@/data/profile"

export interface Skill {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'ai' | 'tool' | 'language'
}

export interface AboutSectionProps {
  title?: string
  description?: string
  avatar?: string
  skills?: Skill[]
  technologies?: string[]
  features?: Array<{
    title: string
    description: string
    icon: string
  }>
  stats?: Array<{
    label: string
    value: string
    icon?: string
  }>
  className?: string
}

const AboutSection = React.forwardRef<HTMLElement, AboutSectionProps>(
  ({ 
    title = "About Me",
    description = "Sou um desenvolvedor apaixonado especializado em engenharia de software, sistemas inteligentes e desenvolvimento multimédia. Com formação multidisciplinar em programação, bases de dados e sistemas de informação, crio soluções inovadoras que combinam tecnologias modernas com design centrado no utilizador.",
    avatar,
    skills = [
      { name: "React/Next.js", level: 95, category: 'frontend' },
      { name: "TypeScript", level: 90, category: 'language' },
      { name: "Node.js", level: 85, category: 'backend' },
      { name: "Python", level: 80, category: 'language' },
      { name: "PostgreSQL", level: 75, category: 'database' },
      { name: "Docker", level: 70, category: 'tool' }
    ],
    technologies = [
      "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion",
      "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "Git"
    ],
    features = [
      {
        title: "Frontend Development",
        description: "Creating responsive, interactive user interfaces with modern frameworks and libraries.",
        icon: "palette"
      },
      {
        title: "Backend Development",
        description: "Building scalable APIs and server-side applications with robust architecture.",
        icon: "server"
      },
      {
        title: "AI Integration",
        description: "Implementing AI-powered features and machine learning solutions in web applications.",
        icon: "zap"
      }
    ],
    stats = [
      { label: "Years Experience", value: "5+", icon: "star" },
      { label: "Projects Completed", value: "50+", icon: "briefcase" },
      { label: "Technologies", value: "20+", icon: "code" },
      { label: "Happy Clients", value: "30+", icon: "heart" }
    ],
    className,
    ...props 
  }, ref) => {


    return (
      <section
        ref={ref}
        id="about"
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

              {/* Avatar with floating effect */}
              <motion.div
                className="relative inline-block mb-12"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Avatar
                  src={avatar}
                  fallback="JC"
                  size="3xl"
                  border="gradient"
                  interactive
                  className="shadow-2xl shadow-brand-primary/20"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-full blur-xl -z-10"></div>
              </motion.div>

              {/* Quick Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="glass-effect border-border/30 hover:border-brand-primary/50 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-6 text-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {stat.icon && (
                          <Icon
                            name={stat.icon as any}
                            size="xl"
                            className="text-brand-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                          />
                        )}
                        <div className="text-3xl font-bold text-foreground mb-2 relative z-10">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground relative z-10">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action for Experience Page */}
          <AnimatedSection animation={fadeInUp} className="mb-20">
            <div className="text-center">
              <Card className="glass-effect max-w-2xl mx-auto border-border/30 hover:border-brand-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 rounded-xl flex items-center justify-center mx-auto">
                      <Icon name="star" size="xl" className="text-brand-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3">
                        Competências Técnicas Detalhadas
                      </h3>
                      <TypographyP className="text-neutral-300 leading-relaxed mb-6">
                        Descobre o meu percurso técnico completo, tecnologias dominadas, experiência profissional
                        e formação académica numa página dedicada.
                      </TypographyP>
                    </div>
                    <MagneticButton
                      variant="primary"
                      size="lg"
                      magneticStrength={0.4}
                      leftIcon={<Icon name="briefcase" size="lg" />}
                      onClick={() => window.location.href = '/experiencia'}
                      className="bg-gradient-to-r from-brand-primary to-brand-accent hover:from-brand-primary/90 hover:to-brand-accent/90 glow-effect shadow-lg"
                    >
                      Ver Experiência Completa
                    </MagneticButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>





          {/* What I Do Section */}
          <AnimatedSection animation={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <GlitchText
                text="O Que Faço"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Serviços especializados para dar vida à sua visão digital
              </TypographyP>
            </div>

            <FeatureGrid
              features={features.map(feature => ({
                ...feature,
                icon: feature.icon as any,
                variant: "glass" as const,
                interactive: true
              }))}
              columns={3}
            />
          </AnimatedSection>

          {/* Mentoring Section - Distributed Layout */}
          <AnimatedSection animation={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <GlitchText
                text="Mentorias & Ensino"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Experiência em partilha de conhecimento e apoio académico
              </TypographyP>
            </div>

            {/* Main Project Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              <Card className="glass-effect border-border/30 hover:border-purple-400/30 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                      <Icon name="star" size="xl" className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-semibold text-foreground">Projeto Rev Up</h4>
                      <p className="text-muted-foreground">Programa de Mentoria Universitária</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Description */}
                    <div className="md:col-span-2 space-y-4">
                      <TypographyP className="text-neutral-300 leading-relaxed">
                        <span className="text-brand-primary font-medium">Participei no Projeto Rev Up</span>,
                        um programa de mentoria onde tive a oportunidade de orientar e apoiar
                        <span className="text-brand-accent font-medium"> estudantes universitários do primeiro ano </span>
                        durante o seu percurso académico inicial.
                      </TypographyP>

                      <TypographyP className="text-neutral-300 leading-relaxed">
                        Esta experiência permitiu-me partilhar conhecimentos técnicos, metodologias de estudo e
                        estratégias de adaptação ao ambiente universitário, contribuindo para o sucesso académico
                        dos novos estudantes.
                      </TypographyP>
                    </div>

                    {/* Stats */}
                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                      <div className="text-center space-y-3">
                        <div className="text-3xl font-bold text-purple-400">1º Ano</div>
                        <p className="text-sm text-neutral-300">Estudantes Apoiados</p>
                        <div className="flex justify-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="star" size="sm" className="text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">Impacto Positivo</p>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/30">
                    {["Mentoria", "Ensino", "Apoio Académico", "Orientação", "Partilha de Conhecimento"].map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-purple-400/30 text-purple-300 hover:border-purple-400/50 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>



          {/* Social Skills */}
          <AnimatedSection animation={fadeInUp} className="mt-20">
            <div className="text-center mb-12">
              <GlitchText
                text="Competências Sociais"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Destaco-me pela excelência na comunicação e capacidade de trabalho em equipa
              </TypographyP>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {socialSkills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="group relative"
                  initial={{ opacity: 0, y: 20, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Card className="glass-effect border-border/30 hover:border-brand-primary/50 transition-all duration-300 h-full overflow-hidden">
                    <CardContent className="p-6 relative">
                      {/* Background gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Icon */}
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          name={
                            skill.title.includes('comunicação') ? 'message' :
                            skill.title.includes('sociável') ? 'heart' :
                            skill.title.includes('pressão') ? 'zap' :
                            skill.title.includes('equipa') ? 'heart' :
                            skill.title.includes('aprendizagem') ? 'star' :
                            'briefcase'
                          }
                          size="lg"
                          className="text-green-400 group-hover:text-blue-400 transition-colors duration-300"
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-3">
                        <h4 className="text-foreground font-semibold text-lg leading-tight group-hover:text-brand-primary transition-colors duration-300">
                          {skill.title}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>



        </div>
      </section>
    )
  }
)
AboutSection.displayName = "AboutSection"

export { AboutSection }
