"use client"

import * as React from "react"
import { personalInfo } from "@/data/profile"

import { DownloadCV } from "@/components/molecules/DownloadCV"
import { SocialIcon } from "@/components/atoms"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/cabrit0/",
      platform: "linkedin" as const,
      color: "hover:text-blue-400"
    },
    {
      name: "GitHub",
      url: "https://github.com/cabrit0",
      platform: "github" as const,
      color: "hover:text-purple-400"
    },
    {
      name: "Email",
      url: `mailto:${personalInfo.email}`,
      platform: "mail" as const,
      color: "hover:text-green-400"
    }
  ]

  return (
    <footer className={cn(
      "relative bg-background/50 backdrop-blur-md border-t border-border/30",
      className
    )}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left Section - About */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent mb-2">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Software Engineer • {personalInfo.location}
            </p>
            <p className="text-xs text-muted-foreground">
              {personalInfo.email}
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Encontra-me nas redes sociais ou entra em contacto diretamente
            </p>
            <div className="flex gap-4 justify-center">
              {socialLinks.map((social) => (
                <SocialIcon
                  key={social.name}
                  platform={social.platform}
                  href={social.url}
                  size="default"
                />
              ))}
            </div>
          </div>

          {/* Right Section - Download CV */}
          <div>
            <DownloadCV
              variant="outline"
              size="sm"
              className="border-brand-primary/30 hover:border-brand-primary/60 hover:bg-brand-primary/5 hover:text-brand-primary"
            >
              Download CV
            </DownloadCV>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 pt-6 border-t border-border/30">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">
              © {currentYear} {personalInfo.name}. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
              Made with <span className="text-red-500 animate-pulse">❤️</span> by{" "}
              <span className="font-medium text-brand-primary">cabrit0</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
