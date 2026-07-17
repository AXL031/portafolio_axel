'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { Github, Linkedin } from '@/components/icons'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="home">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Hola, soy <span className="text-brand-primary">Axel</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-accent font-medium mb-6">
              Software Engineering Student | Full Stack Developer | AI Enthusiast
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-[700px] text-brand-text-muted md:text-xl leading-relaxed"
          >
            Estudiante de Ingeniería de Software enfocado en desarrollo web, arquitectura de software e inteligencia artificial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver proyectos
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <a href="/cv.pdf" download="CV_Axel.pdf" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                Descargar CV
                <Download className="ml-2" size={18} />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-6 mt-8"
          >
            <a href="https://github.com/AXL031" target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-white transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/axelcuevaalcala/" target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-white transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
