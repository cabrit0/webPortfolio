"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { TypographyH3, TypographyP } from "@/components/ui/typography"
import { Button, Icon, SocialIcon, Separator } from "@/components/atoms"
import { TechStack } from "@/components/molecules"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export interface FooterLink {
  label: string
  href: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterSectionProps {
  logo?: string | React.ReactNode
  tagline?: string
  description?: string
  sections?: FooterSection[]
  socialLinks?: Array<{
    platform: "github" | "linkedin" | "mail"
    href: string
  }>
  technologies?: string[]
  showTechnologies?: boolean
  showBackToTop?: boolean
  copyright?: string
  className?: string
}

const FooterSection = React.forwardRef<HTMLElement, FooterSectionProps>(
  ({ 
    logo = "João Cabrito",
    tagline = "Developer & AI Enthusiast",
    description = "Creating exceptional digital experiences with cutting-edge technology and innovative design.",
    sections = [
      {
        title: "Navigation",
        links: [
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Projects", href: "#projects" },
          { label: "Contact", href: "#contact" }
        ]
      },
      {
        title: "Projects",
        links: [
          { label: "E-commerce Platform", href: "#projects" },
          { label: "AI Dashboard", href: "#projects" },
          { label: "Chat Application", href: "#projects" },
          { label: "Portfolio Website", href: "#projects" }
        ]
      },
      {
        title: "Resources",
        links: [
          { label: "Download CV", href: "/cv.pdf", external: true },
          { label: "GitHub", href: "https://github.com", external: true },
          { label: "LinkedIn", href: "https://linkedin.com", external: true },
          { label: "Email", href: "mailto:contact@example.com", external: true }
        ]
      }
    ],
    socialLinks = [
      { platform: "github", href: "https://github.com" },
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "mail", href: "mailto:contact@example.com" }
    ],
    technologies = [
      "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion",
      "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"
    ],
    showTechnologies = true,
    showBackToTop = true,
    copyright = "© 2024 João Cabrito. All rights reserved.",
    className,
    ...props 
  }, ref) => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleLinkClick = (link: FooterLink) => {
      if (link.external) {
        window.open(link.href, '_blank')
      } else if (link.href.startsWith('#')) {
        const element = document.querySelector(link.href)
        element?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.open(link.href)
      }
    }

    return (
      <footer
        ref={ref}
        className={cn(
          "bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border-t border-border/50",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 py-16">
          
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Section */}
            <AnimatedSection animation={fadeInUp} className="lg:col-span-1">
              <div className="space-y-6">
                
                {/* Logo */}
                <div>
                  {typeof logo === 'string' ? (
                    <div className="text-2xl font-bold bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent bg-clip-text text-transparent">
                      {logo}
                    </div>
                  ) : (
                    logo
                  )}
                  <TypographyP className="text-brand-primary font-medium mt-2">
                    {tagline}
                  </TypographyP>
                </div>

                {/* Description */}
                <TypographyP className="text-neutral-400 leading-relaxed">
                  {description}
                </TypographyP>

                {/* Social Links */}
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.platform}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: "easeOut" 
                      }}
                    >
                      <SocialIcon
                        platform={social.platform}
                        href={social.href}
                      />
                    </motion.div>
                  ))}
                </div>

              </div>
            </AnimatedSection>

            {/* Footer Sections */}
            {sections.map((section, sectionIndex) => (
              <AnimatedSection 
                key={section.title}
                animation={fadeInUp}
                delay={0.2 + (sectionIndex * 0.1)}
              >
                <div className="space-y-4">
                  <TypographyH3 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </TypographyH3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.3 + (sectionIndex * 0.1) + (linkIndex * 0.05),
                          ease: "easeOut" 
                        }}
                      >
                        <button
                          onClick={() => handleLinkClick(link)}
                          className="text-neutral-400 hover:text-brand-primary transition-colors duration-200 flex items-center gap-2 group"
                        >
                          {link.label}
                          {link.external && (
                            <Icon 
                              name="external" 
                              size="xs" 
                              className="opacity-0 group-hover:opacity-100 transition-opacity" 
                            />
                          )}
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}

          </div>

          {/* Technologies Section */}
          {showTechnologies && (
            <AnimatedSection animation={fadeInUp} delay={0.5} className="mb-12">
              <div className="text-center space-y-6">
                <TypographyH3 className="text-lg font-semibold">
                  Built With Modern Technologies
                </TypographyH3>
                <TechStack 
                  technologies={technologies}
                  variant="minimal"
                  size="sm"
                  className="justify-center"
                />
              </div>
            </AnimatedSection>
          )}

          <Separator variant="gradient" className="mb-8" />

          {/* Bottom Section */}
          <AnimatedSection animation={fadeInUp} delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <TypographyP className="text-neutral-500 text-sm">
                {copyright}
              </TypographyP>

              {/* Back to Top */}
              {showBackToTop && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={scrollToTop}
                  leftIcon={<Icon name="arrowUp" size="sm" />}
                  className="hover:text-brand-primary"
                >
                  Back to Top
                </Button>
              )}

            </div>
          </AnimatedSection>

        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent"></div>
      </footer>
    )
  }
)
FooterSection.displayName = "FooterSection"

export { FooterSection }
