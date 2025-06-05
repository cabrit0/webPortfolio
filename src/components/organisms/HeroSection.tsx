"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { TypographyH1, TypographyLead, GradientText } from "@/components/ui/typography"
import { Button, Icon, SocialIcon } from "@/components/atoms"
import TypewriterText from "@/components/animations/TypewriterText"
import GlitchText from "@/components/animations/GlitchText"
import ParallaxSection from "@/components/animations/ParallaxSection"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { fadeInUp, fadeInDown, staggerContainer, staggerItem } from "@/lib/animations"

export interface HeroSectionProps {
  name?: string
  title?: string
  description?: string
  ctaButtons?: Array<{
    label: string
    href?: string
    onClick?: () => void
    variant?: "primary" | "secondary" | "outline" | "ghost"
    icon?: string
  }>
  socialLinks?: Array<{
    platform: "github" | "linkedin" | "mail"
    href: string
  }>
  showScrollIndicator?: boolean
  backgroundVariant?: "particles" | "gradient" | "minimal"
  className?: string
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ 
    name = "João Cabrito",
    title = "Developer & AI Enthusiast",
    description = "Creating exceptional digital experiences with cutting-edge technology, innovative design, and meticulous attention to detail.",
    ctaButtons = [
      { label: "View Projects", href: "#projects", variant: "primary", icon: "briefcase" },
      { label: "Contact Me", href: "#contact", variant: "outline", icon: "mail" }
    ],
    socialLinks = [
      { platform: "github", href: "https://github.com" },
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "mail", href: "mailto:contact@example.com" }
    ],
    showScrollIndicator = true,
    backgroundVariant = "particles",
    className,
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden",
          "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950",
          className
        )}
        {...props}
      >
        {/* Background Effects */}
        {backgroundVariant === "particles" && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-2 h-2 bg-brand-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-brand-secondary/30 rounded-full animate-bounce"></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-brand-accent/15 rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-brand-accent/25 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-brand-primary/20 rounded-full animate-float"></div>
            <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-brand-secondary/15 rounded-full animate-pulse-slow"></div>
          </div>
        )}

        {backgroundVariant === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-brand-secondary/5 to-brand-accent/5"></div>
        )}

        {/* Main Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <AnimatedSection animation={staggerContainer} className="text-center max-w-4xl mx-auto">
            
            {/* Name with Glitch Effect */}
            <ParallaxSection speed={0.2} className="mb-8">
              <AnimatedSection animation={fadeInDown}>
                <TypographyH1 className="text-5xl md:text-7xl lg:text-8xl mb-6">
                  <GlitchText 
                    text={name} 
                    triggerOnHover={true}
                    autoGlitch={false}
                    className="font-display font-black tracking-tight"
                  />
                </TypographyH1>
              </AnimatedSection>
            </ParallaxSection>
            
            {/* Title with Typewriter */}
            <AnimatedSection animation={fadeInUp} delay={0.3} className="mb-8">
              <TypographyLead className="text-2xl md:text-4xl lg:text-5xl text-neutral-300 mb-6">
                <TypewriterText 
                  text={title} 
                  delay={0.5}
                  speed={100}
                  className="font-light tracking-wide"
                />
              </TypographyLead>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection animation={fadeInUp} delay={0.6} className="mb-12">
              <div className="max-w-2xl mx-auto">
                <TypographyLead className="text-lg md:text-xl text-neutral-400 leading-relaxed">
                  {description}
                </TypographyLead>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation={fadeInUp} delay={0.9} className="mb-16">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                {ctaButtons.map((button, index) => (
                  <motion.div
                    key={button.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.9 + (index * 0.1),
                      ease: "easeOut" 
                    }}
                  >
                    <Button
                      variant={button.variant as any}
                      size="lg"
                      className={cn(
                        "px-8 py-4 text-lg font-semibold transition-all duration-300",
                        button.variant === "primary" && "glow-effect",
                        button.variant === "outline" && "professional-shadow"
                      )}
                      leftIcon={button.icon ? <Icon name={button.icon as any} size="sm" /> : undefined}
                      onClick={() => {
                        if (button.onClick) {
                          button.onClick()
                        } else if (button.href) {
                          if (button.href.startsWith('#')) {
                            const element = document.querySelector(button.href)
                            element?.scrollIntoView({ behavior: 'smooth' })
                          } else {
                            window.open(button.href, '_blank')
                          }
                        }
                      }}
                    >
                      {button.label}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection animation={staggerContainer} delay={1.2} className="mb-16">
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <AnimatedSection
                    key={social.platform}
                    animation={staggerItem}
                    delay={1.2 + (index * 0.1)}
                  >
                    <SocialIcon
                      platform={social.platform}
                      href={social.href}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* Scroll Indicator */}
            {showScrollIndicator && (
              <AnimatedSection animation={fadeInUp} delay={1.5}>
                <motion.div
                  className="flex flex-col items-center gap-2 text-neutral-500"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <span className="text-sm font-medium">Scroll to explore</span>
                  <Icon name="chevronDown" size="sm" />
                </motion.div>
              </AnimatedSection>
            )}

          </AnimatedSection>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      </section>
    )
  }
)
HeroSection.displayName = "HeroSection"

// Hero Variants for different styles
export const HeroVariants = {
  minimal: {
    backgroundVariant: "minimal" as const,
    showScrollIndicator: false,
  },
  creative: {
    backgroundVariant: "particles" as const,
    showScrollIndicator: true,
  },
  professional: {
    backgroundVariant: "gradient" as const,
    showScrollIndicator: true,
  }
}

export { HeroSection }
