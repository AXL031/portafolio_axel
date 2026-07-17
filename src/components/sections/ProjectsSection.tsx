'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { Github } from '@/components/icons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardContent, CardFooter } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/portfolio'

export function ProjectsSection() {
  return (
    <section className="py-24 bg-brand-bg relative" id="proyectos">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Proyectos Destacados" 
          subtitle="Una selección de mis mejores trabajos, abarcando desde desarrollo Full Stack hasta investigación en IA."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:border-brand-primary/50 transition-all duration-300">
                <div className="relative h-48 w-full overflow-hidden border-b border-white/5 bg-brand-bg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card to-transparent z-10 opacity-60"></div>
                  <Image 
                    src={project.thumbnail} 
                    alt={project.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="accent" className="mb-2">{project.type}</Badge>
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-white transition-colors" title="Ver código fuente">
                          <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-white transition-colors" title="Visitar demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                    <Link href={`/proyectos/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-brand-text-muted mb-4 flex-grow">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs text-brand-accent font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs text-brand-text-muted">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Link href={`/proyectos/${project.slug}`} className="w-full">
                    <Button variant="secondary" className="w-full group-hover:bg-brand-primary group-hover:text-white transition-all">
                      Ver Detalles
                      <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
