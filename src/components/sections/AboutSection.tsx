import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/portfolio'

export function AboutSection() {
  return (
    <section className="about-section page-width section-space" id="sobre-mi" aria-labelledby="about-title">
      <div className="about-heading"><p className="eyebrow">02 / Un poco sobre mí</p><h2 id="about-title">Curiosidad para explorar.<br /><em>Criterio para construir.</em></h2><a className="text-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Conecta conmigo<ArrowUpRight size={16} aria-hidden="true" /></a></div>
      <div className="about-copy"><p>Me interesa entender lo que pasa detrás de una interfaz: cómo se organiza la información, cómo se comunican los servicios y qué hace que un sistema sea fácil de mantener.</p><p>Estudio Ingeniería de Software en la <strong>Universidad Nacional Mayor de San Marcos</strong>. Trabajo en proyectos académicos e independientes que me permiten conectar el desarrollo frontend, el backend y el despliegue.</p><p>También exploro la inteligencia artificial generativa y el aprendizaje por refuerzo. Me gusta pasar de una idea a una implementación, probarla y aprender de lo que ocurre.</p><div className="about-note"><span className="eyebrow">Mi forma de trabajar</span><p>Entender el problema. Tomar decisiones.<br />Construir, probar y seguir aprendiendo.</p></div></div>
    </section>
  )
}
