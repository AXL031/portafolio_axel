import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/portfolio'

export function AboutSection() {
  return (
    <section className="about-section page-width section-space" id="sobre-mi" aria-labelledby="about-title">
      <div className="about-heading"><p className="eyebrow">03 / Un poco sobre mí</p><h2 id="about-title">Curiosidad para explorar.<br /><em>Criterio para construir.</em></h2><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Conecta conmigo<ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className="about-copy">
        <p>Estudio Ingeniería de Software en la <strong>Universidad Nacional Mayor de San Marcos</strong>. Mi trabajo con integraciones de pago en Alignet me permite ver cómo se conectan los sistemas y cómo se comportan en la operación diaria.</p>
        <p>Desarrollo proyectos académicos e independientes de principio a fin. Dentro del desarrollo full stack, me interesan especialmente el backend y la arquitectura, desde cómo se comunican los componentes hasta las decisiones que facilitan su mantenimiento.</p>
        <p>También exploro la inteligencia artificial generativa y el aprendizaje por refuerzo. Me interesa probar dónde estas técnicas pueden ayudar a resolver un problema concreto.</p>
        <div className="about-note"><span className="eyebrow">Mi forma de trabajar</span><p>Entender el problema. Tomar decisiones.<br />Construir, probar y seguir aprendiendo.</p></div>
      </div>
    </section>
  )
}
