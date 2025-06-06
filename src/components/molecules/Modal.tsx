"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, Icon } from "@/components/atoms"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl" | "full"
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
  className?: string
  overlayClassName?: string
  contentClassName?: string
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ 
    isOpen,
    onClose,
    title,
    children,
    size = "md",
    showCloseButton = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    className,
    overlayClassName,
    contentClassName,
    ...props 
  }, ref) => {
    const modalRef = React.useRef<HTMLDivElement>(null)

    // Handle escape key
    React.useEffect(() => {
      if (!closeOnEscape) return

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
          onClose()
        }
      }

      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose, closeOnEscape])

    // Lock body scroll when modal is open
    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }

      return () => {
        document.body.style.overflow = 'unset'
      }
    }, [isOpen])

    // Focus management
    React.useEffect(() => {
      if (isOpen && modalRef.current) {
        modalRef.current.focus()
      }
    }, [isOpen])

    const sizeClasses = {
      sm: "max-w-md",
      md: "max-w-2xl",
      lg: "max-w-4xl",
      xl: "max-w-6xl",
      full: "max-w-[95vw]"
    }

    const overlayVariants = {
      closed: {
        opacity: 0,
        transition: {
          duration: 0.2
        }
      },
      open: {
        opacity: 1,
        transition: {
          duration: 0.3
        }
      }
    }

    const modalVariants = {
      closed: {
        opacity: 0,
        scale: 0.95,
        y: 20,
        transition: {
          duration: 0.2,
          ease: "easeIn"
        }
      },
      open: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut"
        }
      }
    }

    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className={cn(
                "fixed inset-0 bg-black/60 backdrop-blur-sm z-50",
                overlayClassName
              )}
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeOnOverlayClick ? onClose : undefined}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-start justify-center p-2 sm:p-4 overflow-y-auto">
              <motion.div
                ref={modalRef}
                className={cn(
                  "relative w-full mx-auto my-8 max-h-[calc(100vh-4rem)]",
                  sizeClasses[size],
                  className
                )}
                variants={modalVariants}
                initial="closed"
                animate="open"
                exit="closed"
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? "modal-title" : undefined}
                onClick={(e) => e.stopPropagation()}
                {...props}
              >
                {/* Modal Content */}
                <div className={cn(
                  "relative bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl",
                  "border border-border/30 overflow-hidden my-auto",
                  "glass-effect w-full",
                  contentClassName
                )}>
                  {/* Header */}
                  {(title || showCloseButton) && (
                    <div className="flex items-center justify-between p-6 border-b border-border/30">
                      {title && (
                        <h2 
                          id="modal-title"
                          className="text-xl font-semibold text-foreground"
                        >
                          {title}
                        </h2>
                      )}
                      
                      {showCloseButton && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={onClose}
                          className="ml-auto hover:bg-destructive/10 hover:text-destructive"
                        >
                          <Icon name="x" size="sm" />
                          <span className="sr-only">Fechar modal</span>
                        </Button>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative">
                    {children}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    )
  }
)

Modal.displayName = "Modal"

export { Modal }
