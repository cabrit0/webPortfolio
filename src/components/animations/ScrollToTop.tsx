"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { useSmoothScroll, useScrollPosition } from "@/hooks/useSmoothScroll"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ScrollToTopProps {
  showAfter?: number
  className?: string
}

export default function ScrollToTop({
  showAfter = 300,
  className
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollToTop } = useSmoothScroll()

  useScrollPosition((position) => {
    setIsVisible(position > showAfter)
  })

  const handleScrollToTop = () => {
    scrollToTop(1.5)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            "fixed bottom-8 right-8 z-50",
            className
          )}
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Button
            onClick={handleScrollToTop}
            size="icon"
            className={cn(
              "h-12 w-12 rounded-full shadow-lg",
              "bg-gradient-to-r from-blue-600 to-purple-600",
              "hover:from-blue-700 hover:to-purple-700",
              "hover:shadow-xl hover:shadow-blue-500/25",
              "transition-all duration-300",
              "group"
            )}
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronUp className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
            </motion.div>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
