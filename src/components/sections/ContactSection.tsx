'use client'

import { motion } from 'framer-motion'
import { Mail, Send, MessageCircle } from 'lucide-react'
import { Whatsapp } from '@/components/icons'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'

export function ContactSection() {
  return (
    <section className="py-24 bg-brand-bg relative" id="contacto">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Contacto" 
          subtitle="¿Interesado en colaborar o tienes alguna oportunidad profesional? Estaré encantado de conversar."
        />

        <div className="max-w-2xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary mb-4">
                  <Mail size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-white">¡Hablemos!</h3>
                
                <p className="text-brand-text-muted mb-8">
                  Actualmente estoy abierto a nuevas oportunidades para prácticas profesionales o posiciones Jr. en desarrollo de software.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
                  <a href="mailto:axelcueva2601@gmail.com">
                    <Button size="lg" className="w-full sm:w-auto">
                      <Send size={18} className="mr-2" />
                      Enviar correo
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/axelcuevaalcala/" target="_blank" rel="noreferrer">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      LinkedIn
                    </Button>
                  </a>
                  <a href="https://wa.me/51994055173" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto bg-green-500/10 hover:bg-green-500/20 text-green-400 border-green-500/20">
                      <Whatsapp size={18} className="mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
