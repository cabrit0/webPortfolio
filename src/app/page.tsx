"use client"

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
import { personalInfo, projects, technologies } from "@/data/profile"
import { ProjectFilter, useProjectFilter } from "@/components/molecules/ProjectFilter"

export default function Home() {
  const handleCtaClick = () => {
    console.log('Download CV clicked')
  }

  // Project filtering
  const {
    categories,
    technologies: allTechnologies,
    selectedCategory,
    selectedTechnology,
    filteredProjects,
    setSelectedCategory,
    setSelectedTechnology
  } = useProjectFilter(projects)

  return (
    <div className="min-h-screen">
      {/* Header with Navigation */}
      <Header
        variant="glass"
        position="fixed"
        showThemeToggle={false}
        showCTA={true}
        ctaLabel="Download CV"
        navigationItems={[
          { label: "Home", href: "#home", icon: "home", active: true },
          { label: "About", href: "#about", icon: "user" },
          { label: "Projects", href: "#projects", icon: "briefcase" },
          { label: "Contact", href: "#contact", icon: "mail" }
        ]}
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <AnimatedSection animation={staggerContainer} className="text-center mb-20">
          <ParallaxSection speed={0.2} className="mb-12">
            <AnimatedSection animation={fadeInDown}>
              <TypographyH1 className="text-6xl md:text-8xl lg:text-9xl mb-6 text-geist-tight">
                <GlitchText
                  text={personalInfo.name}
                  triggerOnHover={true}
                  autoGlitch={false}
                  className="font-display font-black tracking-tighter bg-gradient-to-r from-white via-white to-brand-accent/80 bg-clip-text text-transparent"
                />
              </TypographyH1>
            </AnimatedSection>
          </ParallaxSection>

          <AnimatedSection animation={fadeInUp} delay={0.3} className="mb-16">
            <TypographyLead className="text-3xl md:text-4xl lg:text-5xl text-neutral-300 max-w-4xl mx-auto mb-8 text-geist-display">
              <TypewriterText
                text={personalInfo.title}
                delay={0.5}
                speed={80}
                className="font-medium tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"
              />
            </TypographyLead>
            <div className="max-w-3xl mx-auto">
              <TypographyLead className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                {personalInfo.description}
              </TypographyLead>
            </div>
          </AnimatedSection>

          <AnimatedSection animation={fadeInUp} delay={0.6} className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
            <MagneticButton
              variant="default"
              size="lg"
              magneticStrength={0.5}
              className="px-10 py-5 text-xl font-semibold bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary/90 hover:to-brand-secondary/90 glow-effect-lg transition-all duration-500 rounded-2xl shadow-2xl"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              variant="outline"
              size="lg"
              magneticStrength={0.5}
              className="px-10 py-5 text-xl font-semibold border-2 border-brand-accent/60 text-brand-accent hover:bg-brand-accent/15 hover:border-brand-accent hover:shadow-2xl hover:shadow-brand-accent/20 transition-all duration-500 rounded-2xl backdrop-blur-sm"
            >
              Contact Me
            </MagneticButton>
          </AnimatedSection>
        </AnimatedSection>

        {/* Tech Stack Showcase */}
        <ParallaxSection speed={0.3} className="max-w-6xl mx-auto">
          <AnimatedSection animation={fadeInUp} delay={0.8}>
            <Card className="glass-effect professional-shadow relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5"></div>

              <CardHeader className="relative z-10 text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl font-display font-bold mb-4">
                  <GradientText>
                    Tecnologias
                  </GradientText>
                </CardTitle>
                <CardDescription className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  Linguagens e ferramentas que utilizo para criar soluções inovadoras
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="mb-8">
                  <AnimatedSection animation={staggerContainer} className="flex flex-wrap justify-center gap-3 mb-8">
                    {[
                      { name: "JavaScript", gradient: "from-yellow-500 to-yellow-600" },
                      { name: "Python", gradient: "from-blue-500 to-blue-600" },
                      { name: "React", gradient: "from-cyan-500 to-cyan-600" },
                      { name: "Flutter", gradient: "from-blue-400 to-blue-500" },
                      { name: "PHP", gradient: "from-purple-500 to-purple-600" },
                      { name: "Node.js", gradient: "from-green-500 to-green-600" },
                      { name: "MySQL", gradient: "from-orange-500 to-orange-600" },
                      { name: "PyTorch", gradient: "from-red-500 to-red-600" }
                    ].map((tech, index) => (
                      <AnimatedSection key={tech.name} animation={staggerItem}>
                        <Badge className={`px-4 py-2 text-sm font-medium bg-gradient-to-r ${tech.gradient} hover:scale-105 transition-all duration-300 text-white`}>
                          {tech.name}
                        </Badge>
                      </AnimatedSection>
                    ))}
                  </AnimatedSection>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </ParallaxSection>

        {/* Additional sections for smooth scrolling demo */}
        <div className="mt-32 space-y-32">
          {/* About Section */}
          <section id="about">
            <ParallaxSection speed={0.4} className="max-w-4xl mx-auto">
              <AnimatedSection animation={fadeInUp}>
                <Card className="bg-card/20 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="text-3xl text-center">
                      <GlitchText
                        text="About Me"
                        triggerOnHover={true}
                        autoGlitch={false}
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Frontend Developer com competências autodidatas e espírito criativo. <span className="text-brand-primary font-medium">Finalista</span> da Licenciatura em Informática e Multimédia na <span className="text-brand-accent font-medium">ESTCB (IPCB)</span> com muito bom aproveitamento.
                      </p>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Procuro uma mudança de carreira para alinhar com a minha <span className="text-brand-primary font-medium">paixão pela programação</span>.
                        De <span className="text-brand-accent font-medium">Castelo Branco</span>, com o mantra <span className="text-brand-primary font-medium italic">&ldquo;{personalInfo.mantra}&rdquo;</span>.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <MagneticButton variant="outline" magneticStrength={0.3}>
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
                      technologies={allTechnologies}
                      selectedCategory={selectedCategory}
                      selectedTechnology={selectedTechnology}
                      onCategoryChange={setSelectedCategory}
                      onTechnologyChange={setSelectedTechnology}
                    />

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredProjects.map((project, index) => (
                        <AnimatedSection key={project.title} animation={staggerItem} delay={index * 0.1}>
                          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-border/30 hover:border-brand-primary/30 transition-all duration-300 h-full flex flex-col">
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-3">
                                <h4 className="text-lg font-semibold text-foreground line-clamp-2">{project.title}</h4>
                                <Badge
                                  variant="outline"
                                  className={`ml-2 text-xs capitalize ${
                                    project.category === 'ai' ? 'border-orange-500/50 text-orange-400' :
                                    project.category === 'mobile' ? 'border-blue-500/50 text-blue-400' :
                                    'border-green-500/50 text-green-400'
                                  }`}
                                >
                                  {project.category}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                            </div>
                            <div className="space-y-3">
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 4).map((tech) => (
                                  <Badge key={tech} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                                {project.technologies.length > 4 && (
                                  <Badge variant="outline" className="text-xs opacity-60">
                                    +{project.technologies.length - 4}
                                  </Badge>
                                )}
                              </div>
                              {project.featured && (
                                <div className="flex items-center gap-1">
                                  <span className="text-yellow-400 text-sm">⭐</span>
                                  <span className="text-xs text-muted-foreground">Projeto em destaque</span>
                                </div>
                              )}
                            </div>
                          </div>
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
                          onClick={() => {
                            setSelectedCategory("all")
                            setSelectedTechnology("all")
                          }}
                          className="mt-2 text-brand-primary hover:text-brand-primary/80 transition-colors"
                        >
                          Limpar filtros
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
            <ParallaxSection speed={0.8} className="max-w-6xl mx-auto mb-32">
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
                    <div className="grid lg:grid-cols-2 gap-8">
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
                            <a
                              href="https://linkedin.com/in/cabrit0/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors group"
                            >
                              <span className="text-blue-500 group-hover:scale-110 transition-transform">💼</span>
                            </a>
                            <a
                              href={`mailto:${personalInfo.email}`}
                              className="w-10 h-10 bg-green-500/10 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors group"
                            >
                              <span className="text-green-500 group-hover:scale-110 transition-transform">✉</span>
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold">Enviar Mensagem</h3>
                        <form className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
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
                      <MagneticButton
                        variant="outline"
                        size="lg"
                        magneticStrength={0.3}
                        className="border-cyan-400/50 text-cyan-200 hover:bg-cyan-500/10"
                      >
                        Download CV
                      </MagneticButton>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </ParallaxSection>
          </section>
        </div>
      </div>
    </main>
    </div>
  )
}
