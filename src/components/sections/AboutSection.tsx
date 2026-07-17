'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card, CardContent } from '@/components/ui/Card'
import { Code2, Brain, Laptop } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="py-24 bg-brand-bg relative" id="sobre-mi">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Sobre mí" 
          subtitle="Conoce un poco más acerca de mi formación y lo que me apasiona."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-brand-text-muted leading-relaxed"
          >
            <p>
              Soy estudiante de <strong className="text-white">Ingeniería de Software en la UNMSM</strong>, con una profunda pasión por la resolución de problemas a través del código. Mi viaje en la tecnología comenzó con la curiosidad de entender cómo funcionaban los sistemas detrás de las pantallas.
            </p>
            <p>
              Me especializo en el <strong className="text-white">desarrollo Full Stack</strong>, construyendo aplicaciones web robustas desde la interfaz de usuario hasta la arquitectura de la base de datos y despliegue en la nube. Disfruto trabajando en proyectos académicos e independientes que me retan a aprender nuevas tecnologías.
            </p>
            <p>
              Además del desarrollo web, tengo un fuerte interés en la <strong className="text-white">Inteligencia Artificial Generativa y la optimización</strong>. Exploro activamente cómo integrar la IA para crear productos más inteligentes y eficientes que aporten valor real a los usuarios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6"
          >
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-primary/20 text-brand-primary">
                  <Laptop size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Desarrollo Full Stack</h3>
                  <p className="text-sm text-brand-text-muted">Creación de aplicaciones web escalables con React, Next.js, Java y Spring Boot.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-brand-accent/20 text-brand-accent">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Inteligencia Artificial</h3>
                  <p className="text-sm text-brand-text-muted">Integración de modelos generativos y algoritmos de Machine Learning y Q-Learning.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:-translate-y-1 transition-transform duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/10 text-white">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Arquitectura de Software</h3>
                  <p className="text-sm text-brand-text-muted">Diseño de sistemas mantenibles utilizando patrones como la Arquitectura Hexagonal y microservicios.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
