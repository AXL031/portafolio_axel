import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { default: 'Axel Cueva — Desarrollo full stack e IA', template: '%s | Axel Cueva' },
  description: 'Soy Axel Cueva, estudiante de Ingeniería de Software en la UNMSM. Desarrollo aplicaciones web y exploro arquitectura de software e inteligencia artificial.',
  keywords: ['Axel Cueva', 'Full Stack Developer', 'UNMSM', 'Next.js', 'React', 'Java', 'Inteligencia Artificial'],
  openGraph: { title: 'Axel Cueva — Desarrollo full stack e IA', description: 'Interfaces claras. Sistemas bien pensados. Conoce mis proyectos de desarrollo web, arquitectura e inteligencia artificial.', locale: 'es_PE', type: 'website' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" id="top" data-scroll-behavior="smooth"><body><a href="#contenido" className="skip-link">Saltar al contenido</a><Navbar /><main id="contenido">{children}</main><Footer /><Analytics /></body></html>
  )
}
