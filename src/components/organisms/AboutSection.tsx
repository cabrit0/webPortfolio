"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography"
import { Avatar, Icon, Separator } from "@/components/atoms"
import { TechStack, FeatureGrid } from "@/components/molecules"
import AnimatedSection from "@/components/animations/AnimatedSection"
import ParallaxSection from "@/components/animations/ParallaxSection"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations"

export interface Skill {
  name: string
  level: number // 0-100
  category: 'frontend' | 'backend' | 'database' | 'tool' | 'language'
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
          
          {/* Section Header */}
          <AnimatedSection animation={fadeInUp} className="text-center mb-16">
            <TypographyH2 className="mb-6">{title}</TypographyH2>
            <div className="max-w-3xl mx-auto">
              <TypographyP className="text-lg text-neutral-400 leading-relaxed">
                {description}
              </TypographyP>
            </div>
          </AnimatedSection>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            
            {/* Left Column - Avatar & Stats */}
            <AnimatedSection animation={fadeInLeft}>
              <div className="space-y-8">
                
                {/* Avatar */}
                <div className="text-center lg:text-left">
                  <Avatar
                    src={avatar}
                    fallback="JC"
                    size="5xl"
                    border="gradient"
                    interactive
                    className="mx-auto lg:mx-0"
                  />
                </div>

                {/* Stats */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-xl">Quick Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          className="text-center p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.1,
                            ease: "easeOut" 
                          }}
                        >
                          {stat.icon && (
                            <Icon 
                              name={stat.icon as any} 
                              size="lg" 
                              className="text-brand-primary mx-auto mb-2" 
                            />
                          )}
                          <div className="text-2xl font-bold text-foreground mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AnimatedSection>

            {/* Right Column - Skills */}
            <AnimatedSection animation={fadeInRight}>
              <Card className="glass-effect h-full">
                <CardHeader>
                  <CardTitle className="text-xl">Skills & Expertise</CardTitle>
                  <CardDescription>
                    My technical proficiency across different technologies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-brand-primary to-brand-accent rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: index * 0.1 + 0.5,
                            ease: "easeOut" 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>

          </div>

          {/* Technologies Section */}
          <AnimatedSection animation={fadeInUp} className="mb-20">
            <Card className="glass-effect">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Technologies I Work With</CardTitle>
                <CardDescription>
                  A comprehensive toolkit for building modern applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TechStack 
                  technologies={technologies}
                  variant="default"
                  interactive
                  className="justify-center"
                />
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Features/Services */}
          <AnimatedSection animation={fadeInUp}>
            <div className="text-center mb-12">
              <TypographyH3 className="mb-4">What I Do</TypographyH3>
              <TypographyP className="text-neutral-400 max-w-2xl mx-auto">
                Specialized services to bring your digital vision to life
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

        </div>
      </section>
    )
  }
)
AboutSection.displayName = "AboutSection"

export { AboutSection }
