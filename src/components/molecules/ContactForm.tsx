"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, Input, Textarea, Icon, Separator } from "@/components/atoms"

export interface ContactFormData {
  name: string
  email: string
  subject?: string
  message: string
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void> | void
  className?: string
  title?: string
  description?: string
  showSubject?: boolean
  variant?: "default" | "glass" | "minimal"
}

const ContactForm = React.forwardRef<HTMLFormElement, ContactFormProps>(
  ({ 
    onSubmit,
    className,
    title = "Get In Touch",
    description = "Let's discuss your next project or collaboration opportunity.",
    showSubject = true,
    variant = "default",
    ...props 
  }, ref) => {
    const [formData, setFormData] = React.useState<ContactFormData>({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    const [errors, setErrors] = React.useState<Partial<ContactFormData>>({})
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

    // Validation rules
    const validateForm = (): boolean => {
      const newErrors: Partial<ContactFormData> = {}

      if (!formData.name.trim()) {
        newErrors.name = "Name is required"
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email is required"
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address"
      }

      if (!formData.message.trim()) {
        newErrors.message = "Message is required"
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters long"
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }

    const handleInputChange = (field: keyof ContactFormData) => (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }))
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }))
      }
    }

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      
      if (!validateForm()) return

      setIsSubmitting(true)
      setSubmitStatus('idle')

      try {
        await onSubmit?.(formData)
        setSubmitStatus('success')
        setFormData({ name: "", email: "", subject: "", message: "" })
      } catch (error) {
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    }

    const formVariants = {
      default: "bg-card border border-border",
      glass: "glass-effect",
      minimal: "bg-transparent border-0",
    }

    return (
      <Card className={cn(formVariants[variant], className)}>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form ref={ref} onSubmit={handleSubmit} className="space-y-6" {...props}>
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange('name')}
                errorText={errors.name}
                leftIcon={<Icon name="user" size="sm" />}
                variant={variant === "glass" ? "glass" : "default"}
              />
              <Input
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleInputChange('email')}
                errorText={errors.email}
                leftIcon={<Icon name="mail" size="sm" />}
                variant={variant === "glass" ? "glass" : "default"}
              />
            </div>

            {/* Subject (optional) */}
            {showSubject && (
              <Input
                label="Subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleInputChange('subject')}
                errorText={errors.subject}
                leftIcon={<Icon name="message" size="sm" />}
                variant={variant === "glass" ? "glass" : "default"}
              />
            )}

            {/* Message */}
            <Textarea
              label="Message"
              placeholder="Tell me about your project, ideas, or just say hello..."
              value={formData.message}
              onChange={handleInputChange('message')}
              errorText={errors.message}
              rows={6}
              variant={variant === "glass" ? "glass" : "default"}
            />

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-brand-success/10 border border-brand-success/20 rounded-lg"
              >
                <div className="flex items-center gap-2 text-brand-success">
                  <Icon name="check" size="sm" />
                  <span className="font-medium">Message sent successfully!</span>
                </div>
                <p className="text-sm text-brand-success/80 mt-1">
                  Thank you for reaching out. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-brand-danger/10 border border-brand-danger/20 rounded-lg"
              >
                <div className="flex items-center gap-2 text-brand-danger">
                  <Icon name="x" size="sm" />
                  <span className="font-medium">Failed to send message</span>
                </div>
                <p className="text-sm text-brand-danger/80 mt-1">
                  Something went wrong. Please try again or contact me directly.
                </p>
              </motion.div>
            )}

            <Separator variant="subtle" />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              loading={isSubmitting}
              leftIcon={!isSubmitting ? <Icon name="mail" size="sm" /> : undefined}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>

            {/* Alternative Contact Methods */}
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Or reach out directly
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<Icon name="mail" size="sm" />}
                  onClick={() => window.open('mailto:joao@example.com')}
                >
                  Email
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  leftIcon={<Icon name="linkedin" size="sm" />}
                  onClick={() => window.open('https://linkedin.com/in/joao')}
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    )
  }
)
ContactForm.displayName = "ContactForm"

export { ContactForm }
