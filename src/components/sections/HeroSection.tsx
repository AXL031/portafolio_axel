import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { profile } from '@/data/portfolio'

export function HeroSection() {
  return (
    <section className="hero page-width" id="home" aria-labelledby="intro-title">
      <div className="hero-identity">
        <p className="eyebrow hero-eyebrow"><span aria-hidden="true" />Desarrollador full stack</p>
        <h1 id="intro-title">Axel<span>Cueva.</span></h1>
        <p className="hero-disciplines">Desarrollo web. Arquitectura.<br className="mobile-break" /> Inteligencia artificial.</p>
      </div>
      <div className="hero-story">
        <p className="hero-introduction">Conecto interfaces claras<br className="desktop-break" /> con sistemas bien pensados.</p>
        <p className="hero-description">Soy estudiante de Ingeniería de Software en la UNMSM. Construyo aplicaciones web y exploro cómo la inteligencia artificial puede hacerlas más útiles.</p>
        <dl className="hero-facts">
          <div><dt>Formación</dt><dd>Ingeniería de Software · UNMSM</dd></div>
          <div><dt>Enfoque</dt><dd>Desarrollo full stack + IA</dd></div>
        </dl>
        <div className="hero-actions">
          <a className="text-link" href="#proyectos">Conoce mi trabajo<ArrowDown size={17} aria-hidden="true" /></a>
          <a className="quiet-link" href="/cv.pdf" download="CV_Axel_Cueva.pdf">Descargar CV<Download size={15} aria-hidden="true" /></a>
        </div>
      </div>
      <div className="hero-bottom"><span>Una selección de ideas llevadas al código.</span><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={14} aria-hidden="true" /></a></div>
    </section>
  )
}
