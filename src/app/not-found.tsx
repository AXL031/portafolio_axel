import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return <section className="not-found page-width"><p className="eyebrow">404 / Fuera de ruta</p><h1>Aquí no hay un proyecto.</h1><p>Puedes volver al portafolio y explorar el trabajo seleccionado.</p><Link className="text-link" href="/#proyectos"><ArrowLeft size={17} aria-hidden="true" />Volver a los proyectos</Link></section>
}
