import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animations/AnimatedSection"
import TypewriterText from "@/components/animations/TypewriterText"
import MagneticButton from "@/components/animations/MagneticButton"
import GlitchText from "@/components/animations/GlitchText"
import ParallaxSection from "@/components/animations/ParallaxSection"
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from "@/lib/animations"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <AnimatedSection animation={staggerContainer} className="text-center mb-12">
          <ParallaxSection speed={0.2} className="mb-6">
            <AnimatedSection animation={fadeInDown}>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                <GlitchText
                  text="João Cabrito"
                  triggerOnHover={true}
                  autoGlitch={false}
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                />
              </h1>
            </AnimatedSection>
          </ParallaxSection>

          <AnimatedSection animation={fadeInUp} delay={0.3} className="mb-8">
            <p className="text-xl md:text-2xl text-purple-200">
              <TypewriterText
                text="Developer & AI Enthusiast"
                delay={0.5}
                speed={100}
                className="font-light tracking-wide"
              />
            </p>
          </AnimatedSection>

          <AnimatedSection animation={fadeInUp} delay={0.6} className="flex gap-6 justify-center mb-8">
            <MagneticButton
              variant="default"
              size="lg"
              magneticStrength={0.4}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-500/25"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              variant="outline"
              size="lg"
              magneticStrength={0.4}
              className="border-purple-400/50 text-purple-200 hover:bg-purple-500/10 shadow-lg shadow-purple-500/25"
            >
              Contact Me
            </MagneticButton>
          </AnimatedSection>
        </AnimatedSection>

        {/* Professional Tech Stack Showcase */}
        <ParallaxSection speed={0.3} className="max-w-4xl mx-auto">
          <AnimatedSection animation={fadeInUp} delay={0.8}>
            <Card className="bg-card/30 backdrop-blur-md border-border/50 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5"></div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-foreground">
                  <GlitchText
                    text="✨ Professional Animation Stack"
                    triggerOnHover={true}
                    autoGlitch={false}
                  />
                </CardTitle>
                <CardDescription className="text-muted-foreground/80">
                  Cutting-edge technologies with cinematic animations and professional interactions
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <AnimatedSection animation={staggerContainer} className="flex flex-wrap gap-3 mb-6">
                  <AnimatedSection animation={staggerItem}>
                    <Badge variant="default" className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">React 18</Badge>
                  </AnimatedSection>
                  <AnimatedSection animation={staggerItem}>
                    <Badge variant="secondary" className="bg-gradient-to-r from-gray-700 to-gray-800 shadow-lg">Next.js 15</Badge>
                  </AnimatedSection>
                  <AnimatedSection animation={staggerItem}>
                    <Badge variant="outline" className="border-purple-400/50 text-purple-300 shadow-lg">TypeScript</Badge>
                  </AnimatedSection>
                  <AnimatedSection animation={staggerItem}>
                    <Badge variant="default" className="bg-gradient-to-r from-cyan-600 to-cyan-700 shadow-lg">TailwindCSS</Badge>
                  </AnimatedSection>
                  <AnimatedSection animation={staggerItem}>
                    <Badge variant="secondary" className="bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg">Shadcn/ui</Badge>
                  </AnimatedSection>
                  <AnimatedSection animation={staggerItem}>
                    <Badge variant="default" className="bg-gradient-to-r from-pink-600 to-pink-700 shadow-lg">Framer Motion</Badge>
                  </AnimatedSection>
                  <AnimatedSection animation={staggerItem}>
                    <Badge variant="default" className="bg-gradient-to-r from-green-600 to-green-700 shadow-lg">GSAP</Badge>
                  </AnimatedSection>
                </AnimatedSection>

                <div className="space-y-2 text-sm text-muted-foreground/70">
                  <p>🎭 <strong>Magnetic interactions</strong> - Professional hover effects</p>
                  <p>✨ <strong>Glitch animations</strong> - Unique visual emphasis</p>
                  <p>🌊 <strong>Parallax scrolling</strong> - Immersive depth experience</p>
                  <p>🎬 <strong>Cinematic transitions</strong> - Movie-quality animations</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </ParallaxSection>
      </div>
    </main>
  )
}
