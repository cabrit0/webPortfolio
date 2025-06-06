import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export const metadata: Metadata = {
  title: 'João Cabrito - Software Engineer & AI Enthusiast',
  description: 'Modern portfolio showcasing expertise in software engineering, AI, and full-stack development',
  keywords: ['software engineer', 'developer', 'AI', 'full-stack', 'portfolio'],
  authors: [{ name: 'João Cabrito' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <SmoothScrollProvider
            showProgress={true}
            showScrollToTop={true}
            progressPosition="top"
          >
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
