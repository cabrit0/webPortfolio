"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography"
import { Button, Icon, SocialIcon, Separator } from "@/components/atoms"
import { ContactForm, type ContactFormData } from "@/components/molecules"
import { DownloadCV } from "@/components/molecules/DownloadCV"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations"

export interface ContactMethod {
  type: 'email' | 'phone' | 'location' | 'social'
  label: string
  value: string
  href?: string
  icon: string
  description?: string
}

export interface ContactSectionProps {
  title?: string
  description?: string
  contactMethods?: ContactMethod[]
  socialLinks?: Array<{
    platform: "github" | "linkedin" | "mail"
    href: string
  }>
  showForm?: boolean
  showMap?: boolean
  onFormSubmit?: (data: ContactFormData) => Promise<void>
  className?: string
}

const ContactSection = React.forwardRef<HTMLElement, ContactSectionProps>(
  ({ 
    title = "Let's Work Together",
    description = "Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities. Let's create something amazing together.",
    contactMethods = [
      {
        type: 'email',
        label: 'Email',
        value: 'joao@example.com',
        href: 'mailto:joao@example.com',
        icon: 'mail',
        description: 'Send me an email anytime'
      },
      {
        type: 'phone',
        label: 'Phone',
        value: '+351 123 456 789',
        href: 'tel:+351123456789',
        icon: 'message',
        description: 'Call or text me'
      },
      {
        type: 'location',
        label: 'Location',
        value: 'Porto, Portugal',
        icon: 'home',
        description: 'Available for remote work worldwide'
      }
    ],
    socialLinks = [
      { platform: "github", href: "https://github.com" },
      { platform: "linkedin", href: "https://linkedin.com" },
      { platform: "mail", href: "mailto:contact@example.com" }
    ],
    showForm = true,
    showMap = false,
    onFormSubmit,
    className,
    ...props 
  }, ref) => {
    const handleFormSubmit = async (data: ContactFormData) => {
      if (onFormSubmit) {
        await onFormSubmit(data)
      } else {
        // Default behavior - simulate API call
        console.log('Contact form submitted:', data)
        await new Promise(resolve => setTimeout(resolve, 2000))
      }
    }

    return (
      <section
        ref={ref}
        id="contact"
        className={cn(
          "py-20 bg-gradient-to-br from-background via-neutral-950/50 to-background",
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

          {/* Main Content */}
          <div className={cn(
            "grid gap-12 items-start",
            showForm ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-4xl mx-auto"
          )}>
            
            {/* Contact Information */}
            <AnimatedSection animation={fadeInLeft}>
              <div className="space-y-8">
                
                {/* Contact Methods */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-xl">Get In Touch</CardTitle>
                    <CardDescription>
                      Choose your preferred way to reach out
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={method.type}
                        className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent/5 transition-colors group cursor-pointer"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1,
                          ease: "easeOut" 
                        }}
                        onClick={() => method.href && window.open(method.href)}
                      >
                        <div className="p-3 rounded-lg bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                          <Icon 
                            name={method.icon as any} 
                            size="lg" 
                            className="text-brand-primary" 
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {method.label}
                          </h4>
                          <p className="text-brand-primary font-medium mb-1">
                            {method.value}
                          </p>
                          {method.description && (
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          )}
                        </div>
                        {method.href && (
                          <Icon 
                            name="external" 
                            size="sm" 
                            className="text-muted-foreground group-hover:text-brand-primary transition-colors" 
                          />
                        )}
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>

                {/* Social Links with Original Icons */}
                <Card className="glass-effect">
                  <CardHeader>
                    <CardTitle className="text-xl">Conecta Comigo</CardTitle>
                    <CardDescription>
                      Segue o meu trabalho e conecta nas redes sociais
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center lg:justify-start gap-6">
                      {socialLinks.filter(social => ['linkedin', 'github', 'mail'].includes(social.platform)).map((social, index) => (
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
                            platform={social.platform as "github" | "linkedin" | "mail"}
                            href={social.href}
                            size="xl"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="glass-effect">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <TypographyH3 className="text-lg">Quick Actions</TypographyH3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <DownloadCV
                          variant="outline"
                          className="justify-start hover:text-brand-primary hover:border-brand-primary/50"
                          showIcon={true}
                        >
                          Download CV
                        </DownloadCV>
                        <Button
                          variant="outline"
                          className="justify-start hover:text-brand-primary hover:border-brand-primary/50"
                          leftIcon={<Icon name="briefcase" size="sm" />}
                          onClick={() => {
                            const element = document.querySelector('#projects')
                            element?.scrollIntoView({ behavior: 'smooth' })
                          }}
                        >
                          View Projects
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </AnimatedSection>

            {/* Contact Form */}
            {showForm && (
              <AnimatedSection animation={fadeInRight}>
                <ContactForm
                  variant="glass"
                  title="Send a Message"
                  description="Fill out the form below and I'll get back to you as soon as possible."
                  onSubmit={handleFormSubmit}
                />
              </AnimatedSection>
            )}

          </div>

          {/* Map Section */}
          {showMap && (
            <AnimatedSection animation={fadeInUp} className="mt-16">
              <Card className="glass-effect">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">Location</CardTitle>
                  <CardDescription>
                    Based in Porto, Portugal - Available worldwide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="home" size="3xl" className="text-muted-foreground mx-auto mb-4" />
                      <TypographyP className="text-muted-foreground">
                        Interactive map would be integrated here
                      </TypographyP>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}

          {/* Call to Action */}
          <AnimatedSection animation={fadeInUp} className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <TypographyH3 className="mb-4">Ready to Start Your Project?</TypographyH3>
              <TypographyP className="text-neutral-400 mb-8">
                Let&apos;s discuss how we can bring your vision to life with modern technology and exceptional design.
              </TypographyP>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  leftIcon={<Icon name="mail" size="sm" />}
                  onClick={() => window.open('mailto:joao@example.com')}
                >
                  Start a Conversation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:text-brand-primary hover:border-brand-primary/50"
                  leftIcon={<Icon name="message" size="sm" />}
                  onClick={() => {
                    const element = document.querySelector('#contact form')
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Send a Message
                </Button>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>
    )
  }
)
ContactSection.displayName = "ContactSection"

export { ContactSection }
