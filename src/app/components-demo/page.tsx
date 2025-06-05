"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TypographyH2, TypographyH3, TypographyP } from "@/components/ui/typography"
import { 
  Button, 
  Input, 
  Textarea,
  Icon, 
  IconButton, 
  SocialIcon,
  Avatar,
  AvatarGroup,
  Separator,
  DecorativeSeparator,
  Skeleton,
  SkeletonCard,
  SkeletonText
} from "@/components/atoms"
import AnimatedSection from "@/components/animations/AnimatedSection"
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations"

export default function ComponentsDemo() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 py-20">
      <div className="container mx-auto px-4 space-y-16">
        
        {/* Header */}
        <AnimatedSection animation={fadeInUp} className="text-center">
          <TypographyH2 className="mb-4">
            Professional Component Library
          </TypographyH2>
          <TypographyP className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A showcase of our meticulously crafted atomic components, designed with attention to detail and professional standards.
          </TypographyP>
        </AnimatedSection>

        {/* Buttons Section */}
        <AnimatedSection animation={fadeInUp}>
          <Card className="glass-effect">
            <CardHeader>
              <TypographyH3>Buttons</TypographyH3>
              <CardDescription>
                Professional button variants with animations and states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="glass">Glass</Button>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button loading>Loading</Button>
                  <Button leftIcon={<Icon name="download" size="sm" />}>
                    Download
                  </Button>
                  <Button rightIcon={<Icon name="external" size="sm" />}>
                    External
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Inputs Section */}
        <AnimatedSection animation={fadeInUp}>
          <Card className="glass-effect">
            <CardHeader>
              <TypographyH3>Inputs</TypographyH3>
              <CardDescription>
                Form inputs with professional styling and validation states
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input 
                  label="Default Input"
                  placeholder="Enter text..."
                  helperText="This is a helper text"
                />
                <Input 
                  label="With Icon"
                  placeholder="Search..."
                  leftIcon={<Icon name="search" size="sm" />}
                />
                <Input 
                  label="Error State"
                  placeholder="Invalid input"
                  errorText="This field is required"
                  state="error"
                />
                <Input 
                  label="Success State"
                  placeholder="Valid input"
                  state="success"
                  rightIcon={<Icon name="check" size="sm" />}
                />
              </div>
              
              <Textarea 
                label="Message"
                placeholder="Enter your message..."
                helperText="Maximum 500 characters"
                rows={4}
              />
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Icons Section */}
        <AnimatedSection animation={fadeInUp}>
          <Card className="glass-effect">
            <CardHeader>
              <TypographyH3>Icons & Social</TypographyH3>
              <CardDescription>
                Comprehensive icon system with interactive variants
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Icon name="home" />
                  <Icon name="user" variant="primary" />
                  <Icon name="code" variant="accent" size="lg" />
                  <Icon name="star" variant="warning" animation="pulse" />
                  <Icon name="heart" variant="danger" interactive />
                </div>
                
                <div className="flex gap-4">
                  <IconButton name="settings" label="Settings" />
                  <IconButton name="search" variant="primary" label="Search" />
                  <IconButton name="menu" variant="accent" size="lg" label="Menu" />
                </div>
                
                <div className="flex gap-4">
                  <SocialIcon platform="github" href="https://github.com" />
                  <SocialIcon platform="linkedin" href="https://linkedin.com" />
                  <SocialIcon platform="mail" href="mailto:contact@example.com" />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Avatars Section */}
        <AnimatedSection animation={fadeInUp}>
          <Card className="glass-effect">
            <CardHeader>
              <TypographyH3>Avatars</TypographyH3>
              <CardDescription>
                Professional avatar components with various states and styles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar fallback="JC" size="sm" />
                  <Avatar fallback="JC" size="default" status="online" />
                  <Avatar fallback="JC" size="lg" border="gradient" />
                  <Avatar fallback="JC" size="xl" hover="scale" interactive />
                  <Avatar fallback="JC" size="2xl" variant="rounded" />
                </div>
                
                <AvatarGroup max={4}>
                  <Avatar fallback="JC" />
                  <Avatar fallback="AB" />
                  <Avatar fallback="CD" />
                  <Avatar fallback="EF" />
                  <Avatar fallback="GH" />
                  <Avatar fallback="IJ" />
                </AvatarGroup>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Separators & Skeletons */}
        <AnimatedSection animation={fadeInUp}>
          <Card className="glass-effect">
            <CardHeader>
              <TypographyH3>Separators & Loading States</TypographyH3>
              <CardDescription>
                Elegant separators and professional loading skeletons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <Separator />
                <Separator variant="gradient" />
                <Separator variant="primary" size="lg" />
                <DecorativeSeparator icon={<Icon name="star" />} />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <TypographyP className="mb-4 text-sm font-medium">Text Skeleton</TypographyP>
                  <SkeletonText lines={3} />
                </div>
                <div>
                  <TypographyP className="mb-4 text-sm font-medium">Card Skeleton</TypographyP>
                  <SkeletonCard showAvatar showImage={false} />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

      </div>
    </main>
  )
}
