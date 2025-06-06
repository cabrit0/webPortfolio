"use client"

import { motion } from "framer-motion"
import { Button, Icon } from "@/components/atoms"
import Link from "next/link"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 max-w-2xl mx-auto"
        >
          {/* 404 Icon */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              className="w-32 h-32 mx-auto bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-full flex items-center justify-center"
            >
              <Icon name="search" size="3xl" className="text-brand-primary" />
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Projeto Não Encontrado
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-neutral-300 leading-relaxed"
          >
            O projeto que procuras não existe ou foi movido. 
            Que tal explorares outros projetos interessantes?
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
          >
            <Link href="/#projetos">
              <Button
                variant="primary"
                size="lg"
                leftIcon={<Icon name="briefcase" size="sm" />}
                className="min-w-[200px]"
              >
                Ver Todos os Projetos
              </Button>
            </Link>

            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Icon name="arrowLeft" size="sm" />}
                className="min-w-[200px] hover:text-brand-primary hover:border-brand-primary/50"
              >
                Voltar ao Início
              </Button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-primary/30 rounded-full animate-pulse" />
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-brand-secondary/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-brand-primary/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
