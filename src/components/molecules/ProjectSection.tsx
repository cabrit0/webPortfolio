"use client"

import { motion } from "framer-motion"
import { Icon } from "@/components/atoms"
import { SectionHeader } from "./SectionHeader"
import { fadeInUp } from "@/lib/animation-variants"

interface ProjectSectionProps {
  title: string
  description: string
  items: string[]
  icon: string
  iconColor: string
  bgColor: string
  layout?: "grid" | "list"
}

export function ProjectSection({ 
  title, 
  description, 
  items, 
  icon, 
  iconColor, 
  bgColor,
  layout = "grid" 
}: ProjectSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <motion.div variants={fadeInUp} className="space-y-8">
      <SectionHeader title={title} description={description} />
      
      <div className={layout === "grid" 
        ? "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        : "space-y-4 max-w-4xl mx-auto"
      }>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors duration-300"
          >
            <div className={`flex-shrink-0 w-6 h-6 ${bgColor} rounded-lg flex items-center justify-center mt-1`}>
              <Icon name={icon as any} size="sm" className={iconColor} />
            </div>
            <p className="text-neutral-300 leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
