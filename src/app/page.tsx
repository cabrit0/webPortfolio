import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animations/AnimatedSection"
import TypewriterText from "@/components/animations/TypewriterText"
import AnimatedButton from "@/components/animations/AnimatedButton"
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from "@/lib/animations"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection animation={staggerContainer} className="text-center mb-12">
          <AnimatedSection animation={fadeInDown} className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              João Cabrito
            </h1>
          </AnimatedSection>

          <AnimatedSection animation={fadeInUp} delay={0.3} className="mb-8">
            <p className="text-xl md:text-2xl text-purple-200">
              <TypewriterText
                text="Developer & AI Enthusiast"
                delay={0.5}
                speed={100}
              />
            </p>
          </AnimatedSection>

          <AnimatedSection animation={fadeInUp} delay={0.6} className="flex gap-4 justify-center mb-8">
            <AnimatedButton variant="default" size="lg" hoverScale={1.05}>
              View Projects
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg" hoverScale={1.05}>
              Contact Me
            </AnimatedButton>
          </AnimatedSection>
        </AnimatedSection>

        {/* Animated Components Demo */}
        <AnimatedSection animation={fadeInUp} delay={0.8} className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                ✅ Framer Motion + Shadcn/ui Setup Complete!
              </CardTitle>
              <CardDescription>
                Modern UI components with smooth animations and dark theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AnimatedSection animation={staggerContainer} className="flex flex-wrap gap-2 mb-4">
                <AnimatedSection animation={staggerItem}>
                  <Badge variant="default">React</Badge>
                </AnimatedSection>
                <AnimatedSection animation={staggerItem}>
                  <Badge variant="secondary">Next.js 15</Badge>
                </AnimatedSection>
                <AnimatedSection animation={staggerItem}>
                  <Badge variant="outline">TypeScript</Badge>
                </AnimatedSection>
                <AnimatedSection animation={staggerItem}>
                  <Badge variant="default">TailwindCSS</Badge>
                </AnimatedSection>
                <AnimatedSection animation={staggerItem}>
                  <Badge variant="secondary">Shadcn/ui</Badge>
                </AnimatedSection>
                <AnimatedSection animation={staggerItem}>
                  <Badge variant="default">Framer Motion</Badge>
                </AnimatedSection>
              </AnimatedSection>
              <p className="text-muted-foreground">
                All components are ready with smooth animations for building a modern, accessible portfolio.
              </p>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </main>
  )
}
