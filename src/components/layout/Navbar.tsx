'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { label: 'Trabajo', href: '/#proyectos' },
  { label: 'Sobre mí', href: '/#sobre-mi' },
  { label: 'Herramientas', href: '/#tecnologias' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        document.getElementById('menu-toggle')?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <header className="site-header"><div className="header-inner page-width">
      <Link href="/" className="wordmark" aria-label="Axel Cueva, inicio" onClick={() => setMenuOpen(false)}>axel <span>/</span> cueva<span className="wordmark-dot">.</span></Link>
      <nav className="desktop-navigation" aria-label="Navegación principal">{links.map(link => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav>
      <Link className="header-contact" href="/#contacto">Hablemos<ArrowUpRight size={15} aria-hidden="true" /></Link>
      <button id="menu-toggle" className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}</button>
    </div><nav id="mobile-navigation" className="mobile-navigation page-width" aria-label="Navegación móvil" hidden={!menuOpen}>{[...links, { label: 'Hablemos', href: '/#contacto' }].map(link => <Link href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>{link.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}</nav></header>
  )
}
