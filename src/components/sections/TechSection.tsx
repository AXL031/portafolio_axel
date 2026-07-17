'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { skills } from '@/data/portfolio'

export function TechSection() {
  const categories = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Bases de Datos', items: skills.databases },
    { title: 'Inteligencia Artificial', items: skills.ai },
    { title: 'Herramientas', items: skills.tools },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 bg-brand-bg relative" id="tecnologias">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionHeading 
          title="Tecnologías" 
          subtitle="Las herramientas y lenguajes que utilizo para transformar ideas en realidad."
        />

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-white/5 bg-brand-card/50 hover:bg-brand-card transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-brand-text-muted hover:text-white hover:border-brand-accent transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
