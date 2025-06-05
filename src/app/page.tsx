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

export default function Home() {
  const handleCtaClick = () => {
    console.log('Download CV clicked')
  }

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
            <ParallaxSection speed={0.6} className="max-w-4xl mx-auto">
              <AnimatedSection animation={fadeInUp}>
                <Card className="bg-card/20 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="text-3xl text-center">
                      <GlitchText
                        text="Featured Projects"
                        triggerOnHover={true}
                        autoGlitch={false}
                        className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                      />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {projects.filter(p => p.featured).slice(0, 4).map((project, index) => (
                        <AnimatedSection key={project.title} animation={staggerItem} delay={index * 0.1}>
                          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-border/30 hover:border-brand-primary/30 transition-all duration-300">
                            <h4 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h4>
                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 3).map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 3 && (
                                <Badge variant="outline" className="text-xs opacity-60">
                                  +{project.technologies.length - 3}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </AnimatedSection>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </ParallaxSection>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ParallaxSection speed={0.8} className="max-w-4xl mx-auto mb-32">
              <AnimatedSection animation={fadeInUp}>
                <Card className="bg-card/20 backdrop-blur-md border-border/30">
                  <CardHeader>
                    <CardTitle className="text-3xl text-center">
                      <GlitchText
                        text="Get In Touch"
                        triggerOnHover={true}
                        autoGlitch={false}
                        className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
                      />
                    </CardTitle>
                    <CardDescription className="text-center text-lg">
                      Pronto para criar algo incrível juntos?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        Procuro oportunidades na área da programação para pôr em prática o conhecimento adquirido.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Disponível imediatamente para oportunidades full-time • <span className="text-brand-primary">{personalInfo.location}</span>
                      </p>
                    </div>
                    <div className="flex gap-4 justify-center">
                      <MagneticButton
                        variant="default"
                        size="lg"
                        magneticStrength={0.4}
                        className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700"
                      >
                        Send Message
                      </MagneticButton>
                      <MagneticButton
                        variant="outline"
                        size="lg"
                        magneticStrength={0.4}
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
