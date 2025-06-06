"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypographyH2, TypographyH3, TypographyP, GradientText } from "@/components/ui/typography"
import { Avatar, Icon, Separator, SocialIcon } from "@/components/atoms"
import { TechStack, FeatureGrid } from "@/components/molecules"
import AnimatedSection from "@/components/animations/AnimatedSection"
import ParallaxSection from "@/components/animations/ParallaxSection"
import GlitchText from "@/components/animations/GlitchText"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations"
import { experience, education, socialSkills, socialLinks } from "@/data/profile"
import { calculateDevelopmentPreferences } from "@/lib/development-preferences"

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
    description = "I'm a passionate developer with expertise in modern web technologies, AI integration, and creating exceptional user experiences. With a strong background in both frontend and backend development, I bring ideas to life through clean, efficient code.",
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
        icon: "code"
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
    // Calculate dynamic development preferences based on projects
    const developmentPreferences = calculateDevelopmentPreferences()

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

          {/* Tech Stack Visualization */}
          <AnimatedSection animation={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <GlitchText
                text="O Meu Stack Tecnológico"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Uma visão abrangente das tecnologias que uso para criar soluções completas
              </TypographyP>
            </div>



            {/* Tech Stack Layers */}
            <div className="max-w-5xl mx-auto space-y-8">

              {/* Frontend Layer */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-green-500 hover:border-l-green-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <Icon name="palette" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-green-400">Frontend Development</h4>
                        <p className="text-sm text-muted-foreground">Interface de utilizador e experiência</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['React', 'JavaScript', 'HTML/CSS', 'TailwindCSS'].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-lg p-3 text-center border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-foreground">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Backend Layer */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-orange-500 hover:border-l-orange-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Icon name="code" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-orange-400">Backend & APIs</h4>
                        <p className="text-sm text-muted-foreground">Servidor e lógica de negócio</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Node.js', 'Express.js', 'Python', 'Java', 'PHP'].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg p-3 text-center border border-orange-500/20 hover:border-orange-400/40 transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-foreground">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Database Layer */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-purple-500 hover:border-l-purple-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Icon name="database" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-purple-400">Bases de Dados</h4>
                        <p className="text-sm text-muted-foreground">Armazenamento e gestão de dados</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['MongoDB', 'MySQL', 'SQL', 'SQLite'].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-3 text-center border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-foreground">{tech}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Mobile & AI Layer */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <Card className="glass-effect border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <Icon name="zap" size="lg" className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-blue-400">Mobile & IA</h4>
                        <p className="text-sm text-muted-foreground">Aplicações móveis e inteligência artificial</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['Flutter', 'Dart', 'PyTorch', 'YOLO', 'OpenCV', 'Unity'].map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-3 text-center border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                        >
                          <span className="text-sm font-medium text-foreground">{tech}</span>
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

          {/* Skills & Expertise Section */}
          <AnimatedSection animation={fadeInUp} className="mb-20">
            <div className="text-center mb-12">
              <GlitchText
                text="Competências & Experiência"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                As minhas competências técnicas organizadas por categoria
              </TypographyP>
            </div>

            {/* Skills organized by category with experience context */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'Linguagens de Programação',
                  skills: [
                    { name: 'JavaScript', experience: '3+ anos', context: 'Desenvolvimento web e mobile' },
                    { name: 'Java', experience: '3 anos', context: 'Programação académica e sistemas' },
                    { name: 'Python', experience: '1+ ano', context: 'IA, automação e backend' },
                    { name: 'Dart', experience: '1 ano', context: 'Desenvolvimento Flutter' },
                    { name: 'C', experience: '1 ano', context: 'Sistemas e game development' },
                    { name: 'PHP', experience: '1+ ano', context: 'Desenvolvimento web backend' }
                  ],
                  icon: 'code',
                  color: 'from-blue-500 to-purple-500'
                },
                {
                  category: 'Frontend Development',
                  skills: [
                    { name: 'React', experience: '1+ ano', context: 'SPAs e aplicações complexas' },
                    { name: 'HTML/CSS', experience: '3+ anos', context: 'Websites responsivos' },
                    { name: 'TailwindCSS', experience: '2+ anos', context: 'Design systems modernos' }
                  ],
                  icon: 'palette',
                  color: 'from-green-500 to-teal-500'
                },
                {
                  category: 'Backend & Mobile',
                  skills: [
                    { name: 'Node.js', experience: '1+ ano', context: 'APIs e serviços web' },
                    { name: 'Express.js', experience: '1+ ano', context: 'Servidores web robustos' },
                    { name: 'Flutter', experience: '1 ano', context: 'Apps móveis cross-platform' }
                  ],
                  icon: 'code',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  category: 'Bases de Dados',
                  skills: [
                    { name: 'MongoDB', experience: '2+ anos', context: 'Dados não-relacionais' },
                    { name: 'MySQL', experience: '2+ anos', context: 'Sistemas relacionais' },
                    { name: 'SQL', experience: '2+ anos', context: 'Consultas e otimização' },
                    { name: 'SQLite', experience: '1+ ano', context: 'Aplicações móveis' }
                  ],
                  icon: 'database',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  category: 'IA & Machine Learning',
                  skills: [
                    { name: 'PyTorch', experience: '1+ ano', context: 'Projeto final de licenciatura' },
                    { name: 'YOLO', experience: '1+ ano', context: 'Reconhecimento visual' },
                    { name: 'OpenCV', experience: '1+ ano', context: 'Processamento de imagem' }
                  ],
                  icon: 'zap',
                  color: 'from-yellow-500 to-orange-500'
                },
                {
                  category: 'Ferramentas & Outros',
                  skills: [
                    { name: 'Unity', experience: '6 meses', context: 'Estágio game development' },
                    { name: 'Git', experience: '3+ anos', context: 'Controlo de versões' }
                  ],
                  icon: 'briefcase',
                  color: 'from-gray-500 to-slate-500'
                }
              ].map((categoryData, categoryIndex) => (
                <motion.div
                  key={categoryData.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="glass-effect border-border/30 hover:border-brand-primary/50 transition-all duration-300 h-full overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${categoryData.color} p-2 flex items-center justify-center`}>
                          <Icon name={categoryData.icon as any} size="sm" className="text-white" />
                        </div>
                        <CardTitle className="text-lg group-hover:text-brand-primary transition-colors duration-300">
                          {categoryData.category}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {categoryData.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          className="relative p-3 rounded-lg bg-gradient-to-r from-background/50 to-background/30 hover:from-brand-primary/5 hover:to-brand-accent/5 transition-all duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        >
                          <div className="flex items-start justify-between mb-1">
                            <span className="font-medium text-foreground text-sm">{skill.name}</span>
                            <Badge variant="outline" className="text-xs text-brand-primary border-brand-primary/30">
                              {skill.experience}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {skill.context}
                          </p>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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

          {/* Experience & Education Timeline */}
          <AnimatedSection animation={fadeInUp} className="mt-20">
            <div className="text-center mb-12">
              <TypographyH3 className="mb-4">Experiência & Formação</TypographyH3>
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                A minha jornada profissional e académica
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
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="font-semibold text-foreground">{exp.position}</h5>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-brand-primary font-medium mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech) => (
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
                      <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/30">
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

          {/* Social Links Section */}
          <AnimatedSection animation={fadeInUp} className="mt-20">
            <div className="text-center mb-12">
              <GlitchText
                text="Vamos Conectar"
                triggerOnHover={true}
                autoGlitch={false}
                className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-4"
              />
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Encontra-me nas redes sociais ou entra em contacto diretamente
              </TypographyP>
            </div>

            <div className="flex justify-center gap-6">
              {socialLinks.filter(social => ['linkedin', 'github', 'mail'].includes(social.platform)).map((link, index) => (
                <motion.div
                  key={link.platform}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                >
                  <Card className="glass-effect border-border/30 hover:border-brand-primary/50 transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-6 text-center relative">
                      {/* Background gradient effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${link.color}10, ${link.color}05)`
                        }}
                      ></div>

                      {/* Social Icon Component */}
                      <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                        <SocialIcon
                          platform={link.platform as "github" | "linkedin" | "mail"}
                          href={link.href}
                          size="2xl"
                        />
                      </div>

                      {/* Label */}
                      <div className="relative z-10">
                        <p className="text-foreground font-medium group-hover:text-brand-primary transition-colors duration-300">
                          {link.label}
                        </p>
                      </div>

                      {/* Decorative glow */}
                      <div
                        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                        style={{ backgroundColor: link.color }}
                      ></div>
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
