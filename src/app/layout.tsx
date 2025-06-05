import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'João Cabrito - Developer & AI Enthusiast',
  description: 'Modern portfolio showcasing expertise in AI, multimedia, and database technologies',
  keywords: ['developer', 'AI', 'multimedia', 'databases', 'portfolio'],
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
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrollProvider
          showProgress={true}
          showScrollToTop={true}
          progressPosition="top"
        >
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
