"use client"

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Header,
  FooterSection
} from "@/components/organisms"

export default function PortfolioDemo() {
  const sampleProjects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management. Built with modern technologies for optimal performance.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "An intelligent analytics platform that uses machine learning to provide insights and predictions for business data visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "FastAPI", "MongoDB", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calls. Features end-to-end encryption and group management.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing modern design principles, smooth animations, and optimal performance across all devices.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Task Management System",
      description: "A comprehensive project management tool with team collaboration features, time tracking, and advanced reporting capabilities.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with detailed forecasts, interactive maps, and location-based recommendations.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "OpenWeather API", "Mapbox"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example"
    }
  ]

  const handleContactSubmit = async (data: any) => {
    console.log('Contact form submitted:', data)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header
        variant="glass"
        position="fixed"
        showThemeToggle={true}
        showCTA={true}
        ctaLabel="Download CV"
        onCtaClick={() => console.log('Download CV clicked')}
      />

      {/* Hero Section */}
      <HeroSection
        name="João Cabrito"
        title="Developer & AI Enthusiast"
        description="Creating exceptional digital experiences with cutting-edge technology, innovative design, and meticulous attention to detail."
        ctaButtons={[
          { 
            label: "View Projects", 
            href: "#projects", 
            variant: "primary", 
            icon: "briefcase" 
          },
          { 
            label: "Contact Me", 
            href: "#contact", 
            variant: "outline", 
            icon: "mail" 
          }
        ]}
        socialLinks={[
          { platform: "github", href: "https://github.com" },
          { platform: "linkedin", href: "https://linkedin.com" },
          { platform: "mail", href: "mailto:contact@example.com" }
        ]}
        backgroundVariant="particles"
        showScrollIndicator={true}
      />

      {/* About Section */}
      <AboutSection
        title="About Me"
        description="I'm a passionate developer with expertise in modern web technologies, AI integration, and creating exceptional user experiences. With a strong background in both frontend and backend development, I bring ideas to life through clean, efficient code."
        skills={[
          { name: "React/Next.js", level: 95, category: 'frontend' },
          { name: "TypeScript", level: 90, category: 'language' },
          { name: "Node.js", level: 85, category: 'backend' },
          { name: "Python", level: 80, category: 'language' },
          { name: "PostgreSQL", level: 75, category: 'database' },
          { name: "Docker", level: 70, category: 'tool' }
        ]}
        technologies={[
          "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion",
          "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "Git"
        ]}
        features={[
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
        ]}
        stats={[
          { label: "Years Experience", value: "5+", icon: "star" },
          { label: "Projects Completed", value: "50+", icon: "briefcase" },
          { label: "Technologies", value: "20+", icon: "code" },
          { label: "Happy Clients", value: "30+", icon: "heart" }
        ]}
      />

      {/* Projects Section */}
      <ProjectsSection
        title="Featured Projects"
        description="A showcase of my recent work, featuring modern web applications built with cutting-edge technologies."
        projects={sampleProjects}
        showFilters={true}
        showSearch={true}
        itemsPerPage={6}
      />

      {/* Contact Section */}
      <ContactSection
        title="Let's Work Together"
        description="Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities. Let's create something amazing together."
        contactMethods={[
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
        ]}
        socialLinks={[
          { platform: "github", href: "https://github.com" },
          { platform: "linkedin", href: "https://linkedin.com" },
          { platform: "mail", href: "mailto:contact@example.com" }
        ]}
        showForm={true}
        onFormSubmit={handleContactSubmit}
      />

      {/* Footer */}
      <FooterSection
        logo="João Cabrito"
        tagline="Developer & AI Enthusiast"
        description="Creating exceptional digital experiences with cutting-edge technology and innovative design."
        sections={[
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
        ]}
        socialLinks={[
          { platform: "github", href: "https://github.com" },
          { platform: "linkedin", href: "https://linkedin.com" },
          { platform: "mail", href: "mailto:contact@example.com" }
        ]}
        technologies={[
          "React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion",
          "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"
        ]}
        showTechnologies={true}
        showBackToTop={true}
        copyright="© 2024 João Cabrito. All rights reserved."
      />
    </div>
  )
}
