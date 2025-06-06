"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TypographyH1, TypographyLead, GradientText } from "@/components/ui/typography"
import AnimatedSection from "@/components/animations/AnimatedSection"
import TypewriterText from "@/components/animations/TypewriterText"
import MagneticButton from "@/components/animations/MagneticButton"
import GlitchText from "@/components/animations/GlitchText"
import ParallaxSection from "@/components/animations/ParallaxSection"
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from "@/lib/animations"
import { Header } from "@/components/organisms"
import { SocialIcon } from "@/components/atoms"
import { personalInfo, projects, technologies } from "@/data/profile"
import { ProjectFilter, useProjectFilter } from "@/components/molecules/ProjectFilter"
import { AdvancedDownloadCV } from "@/components/molecules/DownloadCV"
import { getProjectUrl } from "@/lib/project-utils"
import { getCategoryStyle } from "@/lib/category-styles"
import Footer from "@/components/organisms/Footer"
import Link from "next/link"

export default function Home() {
  const handleCtaClick = () => {
    console.log('Download CV clicked')
  }

  // Project filtering
  const {
    categories,
    selectedCategory,
    filteredProjects,
    setSelectedCategory
  } = useProjectFilter(projects)



  return (
    <div className="min-h-screen">
      {/* Header with Navigation */}
      <Header
        variant="glass"
        position="fixed"
        showThemeToggle={true}
        showCTA={true}
        currentPath="/"
        onCtaClick={handleCtaClick}
      />

      <main id="home" className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Enhanced floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-brand-primary/30 rounded-full animate-pulse blur-sm"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-brand-secondary/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-brand-accent/25 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-brand-accent/35 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-brand-primary/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-brand-secondary/25 rounded-full animate-pulse-slow"></div>

        {/* Additional ambient particles */}
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-brand-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/5 w-2 h-2 bg-brand-primary/15 rounded-full animate-float"></div>
        <div className="absolute top-80 right-1/2 w-1.5 h-1.5 bg-brand-secondary/20 rounded-full animate-bounce"></div>
      </div>

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-accent/5 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="text-center mb-20">
          <div className="mb-12">
            <div>
              <TypographyH1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl mb-4 sm:mb-6 text-geist-tight">
                <GlitchText
                  text={personalInfo.name}
                  triggerOnHover={true}
                  autoGlitch={false}
                  className="font-display font-black tracking-tighter bg-gradient-to-r from-white via-white to-brand-accent/80 bg-clip-text text-transparent inline-block w-full"
                />
              </TypographyH1>
            </div>
          </div>

          <div className="mb-16">
            <TypographyLead className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-300 max-w-4xl mx-auto mb-6 sm:mb-8 text-geist-display">
              <TypewriterText
                text={personalInfo.title}
                delay={0.5}
                speed={80}
                className="font-medium tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"
              />
            </TypographyLead>
            <div className="max-w-3xl mx-auto">
              <TypographyLead className="text-lg sm:text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                {personalInfo.description}
              </TypographyLead>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-16 sm:mb-20">
            <MagneticButton
              variant="default"
              size="lg"
              magneticStrength={0.5}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 glow-effect-lg transition-all duration-500 rounded-2xl shadow-2xl"
              onClick={() => {
                const projectsSection = document.querySelector('#projects')
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Ver Projetos
            </MagneticButton>
            <MagneticButton
              variant="outline"
              size="lg"
              magneticStrength={0.5}
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold border-2 border-brand-accent/60 text-brand-accent hover:bg-brand-accent/15 hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-500 rounded-2xl backdrop-blur-sm"
              onClick={() => {
                const contactSection = document.querySelector('#contact')
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              Contactar
            </MagneticButton>
          </div>
        </div>

        {/* Tech Stack Showcase */}
        <ParallaxSection speed={0.3} className="max-w-7xl mx-auto">
          <AnimatedSection animation={fadeInUp} delay={0.8}>
            <div className="relative">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-accent/10 rounded-3xl blur-3xl"></div>

              <Card className="glass-effect professional-shadow relative overflow-hidden border-border/20">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/3 via-brand-secondary/3 to-brand-accent/3"></div>

                <CardHeader className="relative z-10 text-center pb-12">
                  <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
                    <GradientText className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
                      Tecnologias
                    </GradientText>
                  </CardTitle>
                  <CardDescription className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed px-4">
                    Linguagens e ferramentas que utilizo para criar soluções inovadoras
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 pb-16">
                  {/* Tech Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
                    {[
                      {
                        name: "JavaScript",
                        gradient: "from-yellow-400 to-yellow-600",
                        icon: "⚡",
                        description: "Linguagem principal"
                      },
                      {
                        name: "Java",
                        gradient: "from-red-500 to-orange-500",
                        icon: "☕",
                        description: "Backend robusto"
                      },
                      {
                        name: "Python",
                        gradient: "from-blue-400 to-blue-600",
                        icon: "🐍",
                        description: "IA & Backend"
                      },
                      {
                        name: "React",
                        gradient: "from-cyan-400 to-cyan-600",
                        icon: "⚛️",
                        description: "Frontend moderno"
                      },
                      {
                        name: "Flutter",
                        gradient: "from-blue-300 to-blue-500",
                        icon: "📱",
                        description: "Apps móveis"
                      },
                      {
                        name: "PHP",
                        gradient: "from-purple-400 to-purple-600",
                        icon: "🌐",
                        description: "Web development"
                      },
                      {
                        name: "Node.js",
                        gradient: "from-green-400 to-green-600",
                        icon: "🚀",
                        description: "Backend escalável"
                      },
                      {
                        name: "MySQL",
                        gradient: "from-orange-400 to-orange-600",
                        icon: "🗄️",
                        description: "Base de dados"
                      },
                      {
                        name: "PyTorch",
                        gradient: "from-red-400 to-red-600",
                        icon: "🧠",
                        description: "Machine Learning"
                      }
                    ].map((tech, index) => (
                      <AnimatedSection key={tech.name} animation={staggerItem} delay={index * 0.1}>
                        <div className="group relative">
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                          {/* Card */}
                          <div className="relative bg-card/40 backdrop-blur-sm border border-border/30 rounded-2xl p-4 sm:p-6 hover:border-border/60 transition-all duration-300 group-hover:transform group-hover:scale-105">
                            <div className="text-center space-y-2 sm:space-y-3">
                              <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{tech.icon}</div>
                              <h3 className="font-bold text-base sm:text-lg text-foreground">
                                {tech.name}
                              </h3>
                              <p className="text-xs sm:text-sm text-muted-foreground">
                                {tech.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 rounded-full border border-brand-primary/20">
                      <span className="text-brand-primary text-xl">🌟</span>
                      <div className="text-center">
                        <span className="text-sm font-semibold text-foreground italic">"Só é útil o conhecimento que nos torna melhores"</span>
                        <div className="text-xs text-muted-foreground mt-1 font-medium">— Sócrates</div>
                      </div>
                      <span className="text-brand-accent text-xl">⚡</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </ParallaxSection>

        {/* Additional sections for smooth scrolling demo */}
        <div className="mt-16 sm:mt-24 lg:mt-32 space-y-16 sm:space-y-24 lg:space-y-32">
          {/* About Section */}
          <section id="about">
            <ParallaxSection speed={0.4} className="max-w-4xl mx-auto">
              <AnimatedSection animation={fadeInUp}>
                <Card className="bg-card/20 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="text-3xl text-center">
                      <GlitchText
                        text="Sobre Mim"
                        triggerOnHover={true}
                        autoGlitch={false}
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Software Engineer com competências autodidatas e espírito criativo. <span className="text-brand-primary font-medium">Finalista</span> da Licenciatura em Informática e Multimédia na <span className="text-brand-accent font-medium">ESTCB (IPCB)</span> com muito bom aproveitamento.
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Procuro uma mudança de carreira para alinhar com a minha <span className="text-brand-primary font-medium">paixão pela programação</span>.
                        De <span className="text-brand-accent font-medium">Castelo Branco</span>, com o mantra <span className="text-brand-primary font-medium italic">&ldquo;{personalInfo.mantra}&rdquo;</span>.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <MagneticButton
                        variant="outline"
                        magneticStrength={0.3}
                        onClick={() => {
                          // Navigate to about page
                          window.location.href = '/about'
                        }}
                      >
                        Ver Mais Sobre Mim
                      </MagneticButton>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </ParallaxSection>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <ParallaxSection speed={0.6} className="max-w-6xl mx-auto">
              <AnimatedSection animation={fadeInUp}>
                <Card className="bg-card/20 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="text-3xl text-center">
                      <GlitchText
                        text="Projetos"
                        triggerOnHover={true}
                        autoGlitch={false}
                        className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                      />
                    </CardTitle>
                    <CardDescription className="text-center text-lg mt-4">
                      Explore os meus projetos por categoria ou tecnologia
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Project Filters */}
                    <ProjectFilter
                      categories={categories}
                      selectedCategory={selectedCategory}
                      onCategoryChange={setSelectedCategory}
                    />

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                      {filteredProjects.map((project, index) => (
                        <AnimatedSection key={project.title} animation={staggerItem} delay={index * 0.1}>
                          <Link href={getProjectUrl(project.title)} className="block h-full">
                            <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-border/30 hover:border-brand-primary/30 transition-all duration-300 h-full flex flex-col cursor-pointer group hover:scale-105 hover:shadow-xl hover:shadow-brand-primary/10">
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-brand-primary transition-colors">
                                    {project.title}
                                  </h4>
                                  <Badge
                                    variant="outline"
                                    className={`ml-2 text-xs capitalize ${getCategoryStyle(project.category)}`}
                                  >
                                    {project.category}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                              </div>
                              <div className="space-y-3">
                                <div className="flex flex-wrap gap-1">
                                  {project.technologies.slice(0, 4).map((tech: string) => (
                                    <Badge
                                      key={tech}
                                      variant="outline"
                                      className="text-xs hover:bg-brand-primary/10 transition-colors"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                  {project.technologies.length > 4 && (
                                    <Badge
                                      variant="outline"
                                      className="text-xs text-muted-foreground"
                                    >
                                      +{project.technologies.length - 4}
                                    </Badge>
                                  )}
                                </div>
                                <div className="text-xs text-brand-primary/70 group-hover:text-brand-primary transition-colors">
                                  Clique para ver detalhes →
                                </div>
                              </div>
                            </div>
                          </Link>
                        </AnimatedSection>
                      ))}
                    </div>

                    {/* No results message */}
                    {filteredProjects.length === 0 && (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground">
                          Nenhum projeto encontrado com os filtros selecionados.
                        </p>
                        <button
                          onClick={() => setSelectedCategory("all")}
                          className="mt-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
                        >
                          Limpar filtro
                        </button>
                      </div>
                    )}

                    {/* Project count */}
                    <div className="text-center text-sm text-muted-foreground">
                      {filteredProjects.length === projects.length
                        ? `${projects.length} projetos`
                        : `${filteredProjects.length} de ${projects.length} projetos`
                      }
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </ParallaxSection>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ParallaxSection speed={0.8} className="max-w-6xl mx-auto mb-16 sm:mb-24">
              <AnimatedSection animation={fadeInUp}>
                <Card className="bg-card/20 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="text-3xl text-center">
                      <GlitchText
                        text="Vamos Trabalhar Juntos"
                        triggerOnHover={true}
                        autoGlitch={false}
                        className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
                      />
                    </CardTitle>
                    <CardDescription className="text-center text-lg">
                      Pronto para criar algo incrível juntos?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="text-center space-y-2">
                      <p className="text-muted-foreground">
                        Procuro oportunidades na área da programação para pôr em prática o conhecimento adquirido.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Disponível imediatamente para oportunidades full-time • <span className="text-brand-primary">{personalInfo.location}</span>
                      </p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                      {/* Contact Info */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Informações de Contacto</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-primary/5 hover:bg-brand-primary/10 transition-colors">
                            <div className="w-10 h-10 bg-brand-primary/20 rounded-lg flex items-center justify-center">
                              <span className="text-brand-primary text-lg">✉</span>
                            </div>
                            <div>
                              <p className="font-medium">Email</p>
                              <p className="text-muted-foreground">{personalInfo.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-secondary/5 hover:bg-brand-secondary/10 transition-colors">
                            <div className="w-10 h-10 bg-brand-secondary/20 rounded-lg flex items-center justify-center">
                              <span className="text-brand-secondary text-lg">📍</span>
                            </div>
                            <div>
                              <p className="font-medium">Localização</p>
                              <p className="text-muted-foreground">{personalInfo.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 rounded-lg bg-brand-accent/5 hover:bg-brand-accent/10 transition-colors">
                            <div className="w-10 h-10 bg-brand-accent/20 rounded-lg flex items-center justify-center">
                              <span className="text-brand-accent text-lg">💼</span>
                            </div>
                            <div>
                              <p className="font-medium">Disponibilidade</p>
                              <p className="text-muted-foreground">Imediatamente disponível</p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-medium">Redes Sociais</h4>
                          <div className="flex gap-3">
                            <SocialIcon
                              platform="linkedin"
                              href="https://linkedin.com/in/cabrit0/"
                              size="default"
                            />
                            <SocialIcon
                              platform="github"
                              href="https://github.com/cabrit0"
                              size="default"
                            />
                            <SocialIcon
                              platform="mail"
                              href={`mailto:${personalInfo.email}`}
                              size="default"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Enviar Mensagem</h3>
                        <form className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium mb-2">Nome</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                                placeholder="O seu nome"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                                placeholder="seu@email.com"
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">Assunto</label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all"
                              placeholder="Assunto da mensagem"
                            />
                          </div>
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">Mensagem</label>
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary/50 resize-none transition-all"
                              placeholder="A sua mensagem..."
                            />
                          </div>
                          <MagneticButton
                            type="submit"
                            variant="default"
                            size="lg"
                            magneticStrength={0.4}
                            className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700"
                          >
                            Enviar Mensagem
                          </MagneticButton>
                        </form>
                      </div>
                    </div>

                    <div className="text-center pt-6 border-t border-border/30">
                      <AdvancedDownloadCV />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </ParallaxSection>
          </section>
        </div>
      </div>
    </main>

    {/* Footer */}
    <Footer />
    </div>
  )
}
