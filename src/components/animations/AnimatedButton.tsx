"use client"

import { motion } from "framer-motion"
import { Button, ButtonProps } from "@/components/atoms/Button"
import { ReactNode } from "react"

interface AnimatedButtonProps extends ButtonProps {
  children: ReactNode
  hoverScale?: number
  tapScale?: number
  className?: string
}

export default function AnimatedButton({
  children,
  hoverScale = 1.05,
  tapScale = 0.95,
  className = "",
  ...props
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: hoverScale }}
      whileTap={{ scale: tapScale }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <Button className={className} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}
