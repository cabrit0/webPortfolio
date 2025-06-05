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
                  text="João Cabrito"
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
                text="Developer & AI Enthusiast"
                delay={0.5}
                speed={80}
                className="font-medium tracking-tight bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent"
              />
            </TypographyLead>
            <div className="max-w-3xl mx-auto">
              <TypographyLead className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light">
                Creating <span className="text-brand-accent font-medium">exceptional digital experiences</span> with cutting-edge technology,
                innovative design, and <span className="text-brand-primary font-medium">meticulous attention to detail</span>.
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

        {/* Professional Tech Stack Showcase */}
        <ParallaxSection speed={0.3} className="max-w-6xl mx-auto">
          <AnimatedSection animation={fadeInUp} delay={0.8}>
            <Card className="glass-effect professional-shadow relative overflow-hidden">
              {/* Professional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5"></div>

              <CardHeader className="relative z-10 text-center pb-8">
                <CardTitle className="text-3xl md:text-4xl font-display font-bold mb-4">
                  <GradientText>
                    Professional Design System
                  </GradientText>
                </CardTitle>
                <CardDescription className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                  A comprehensive design system built with cutting-edge technologies,
                  cinematic animations, and meticulous attention to professional details.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                {/* Technology Stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Technology Stack</h3>
                  <AnimatedSection animation={staggerContainer} className="flex flex-wrap justify-center gap-3 mb-8">
                    <AnimatedSection animation={staggerItem}>
                      <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-brand-primary to-brand-primary/80 hover:from-brand-primary/90 hover:to-brand-primary/70 transition-all duration-300">
                        React 18
                      </Badge>
                    </AnimatedSection>
                    <AnimatedSection animation={staggerItem}>
                      <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-neutral-700 to-neutral-800 hover:from-neutral-600 hover:to-neutral-700 transition-all duration-300">
                        Next.js 15
                      </Badge>
                    </AnimatedSection>
                    <AnimatedSection animation={staggerItem}>
                      <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-brand-secondary/50 text-brand-secondary hover:bg-brand-secondary/10 transition-all duration-300">
                        TypeScript
                      </Badge>
                    </AnimatedSection>
                    <AnimatedSection animation={staggerItem}>
                      <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-brand-accent to-brand-accent/80 hover:from-brand-accent/90 hover:to-brand-accent/70 transition-all duration-300">
                        TailwindCSS
                      </Badge>
                    </AnimatedSection>
                    <AnimatedSection animation={staggerItem}>
                      <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-brand-secondary to-brand-secondary/80 hover:from-brand-secondary/90 hover:to-brand-secondary/70 transition-all duration-300">
                        Shadcn/ui
                      </Badge>
                    </AnimatedSection>
                    <AnimatedSection animation={staggerItem}>
                      <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 transition-all duration-300">
                        Framer Motion
                      </Badge>
                    </AnimatedSection>
                    <AnimatedSection animation={staggerItem}>
                      <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 transition-all duration-300">
                        GSAP
                      </Badge>
                    </AnimatedSection>
                    <AnimatedSection animation={staggerItem}>
                      <Badge className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 transition-all duration-300">
                        Lenis
                      </Badge>
                    </AnimatedSection>
                  </AnimatedSection>
                </div>

                {/* Professional Features */}
                <div className="grid md:grid-cols-2 gap-6 text-neutral-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full"></div>
                      <span className="font-medium">Magnetic Interactions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-secondary rounded-full"></div>
                      <span className="font-medium">Cinematic Animations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                      <span className="font-medium">Smooth Scrolling</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-success rounded-full"></div>
                      <span className="font-medium">Professional Typography</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand-warning rounded-full"></div>
                      <span className="font-medium">Responsive Design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="font-medium">Accessibility First</span>
                    </div>
                  </div>
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
                  <CardContent className="text-center space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Passionate developer with expertise in AI, multimedia technologies, and modern web development.
                      Creating exceptional digital experiences with cutting-edge animations and interactions.
                    </p>
                    <div className="flex justify-center">
                      <MagneticButton variant="outline" magneticStrength={0.3}>
                        Learn More
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
                      {[
                        { name: "AI Portfolio Assistant", tech: ["React", "TypeScript", "OpenAI"] },
                        { name: "Modern E-commerce", tech: ["Next.js", "Stripe", "Prisma"] },
                        { name: "Real-time Chat App", tech: ["Node.js", "Socket.io", "MongoDB"] },
                        { name: "Data Visualization", tech: ["D3.js", "Python", "FastAPI"] }
                      ].map((project, index) => (
                        <AnimatedSection key={project.name} animation={staggerItem} delay={index * 0.1}>
                          <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-border/30">
                            <h4 className="text-lg font-semibold mb-2">{project.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech) => (
                                <Badge key={tech} variant="outline" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
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
                      Ready to create something amazing together?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-6">
                    <p className="text-muted-foreground">
                      Let&apos;s discuss your next project and bring your ideas to life with cutting-edge technology.
                    </p>
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
