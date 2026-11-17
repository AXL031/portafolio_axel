import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { themeInitScript } from '@/lib/theme'

const siteTitle = 'Axel Cueva — Desarrollo full stack e IA'
const siteDescription = 'Axel Cueva, estudiante de Ingeniería de Software en la UNMSM, desarrollador full stack y Practicante de Integraciones TI en Alignet.'

export const metadata: Metadata = {
  title: { default: siteTitle, template: '%s | Axel Cueva' },
  description: siteDescription,
  keywords: ['Axel Cueva', 'Desarrollo full stack', 'Integraciones TI', 'UNMSM', 'Backend', 'Next.js', 'React', 'Java', 'Inteligencia Artificial'],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    locale: 'es_PE',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" id="top" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeInitScript }} /></head>
      <body><a href="#contenido" className="skip-link">Saltar al contenido</a><Navbar /><main id="contenido">{children}</main><Footer /><Analytics /></body>
    </html>
  )
}
