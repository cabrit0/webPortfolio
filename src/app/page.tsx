import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            João Cabrito
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8">
            Developer & AI Enthusiast
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Button variant="default" size="lg">
              View Projects
            </Button>
            <Button variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>

        {/* Shadcn/ui Components Test */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                ✅ Shadcn/ui Setup Complete!
              </CardTitle>
              <CardDescription>
                Modern UI components integrated with TailwindCSS and dark theme
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="default">React</Badge>
                <Badge variant="secondary">Next.js 15</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="default">TailwindCSS</Badge>
                <Badge variant="secondary">Shadcn/ui</Badge>
              </div>
              <p className="text-muted-foreground">
                All components are ready for building a modern, accessible portfolio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
