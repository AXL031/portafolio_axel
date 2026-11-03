import { ArrowUpRight, Download } from 'lucide-react'
import { profile } from '@/data/portfolio'

export function ContactSection() {
  return (
    <section className="contact-section page-width section-space" id="contacto" aria-labelledby="contact-title">
      <p className="eyebrow">04 / La siguiente conversación</p>
      <div className="contact-body"><div><h2 id="contact-title">¿Construimos<br /><em>algo juntos?</em></h2><p>Si tienes un proyecto, una oportunidad o una idea que compartir, me encantará conocerla.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={24} aria-hidden="true" /></a></div><div className="contact-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={18} aria-hidden="true" /></a><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={18} aria-hidden="true" /></a><a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp<ArrowUpRight size={18} aria-hidden="true" /></a><a href="/cv.pdf" download="CV_Axel_Cueva.pdf">Descargar CV<Download size={17} aria-hidden="true" /></a></div></div>
    </section>
  )
}
