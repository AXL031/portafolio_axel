import Link from 'next/link'
import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="site-footer page-width"><div><Link className="wordmark" href="/">axel <span>/</span> cueva.</Link><p>Ingeniería de Software · UNMSM</p></div><span className="footer-copyright">© {new Date().getFullYear()} Axel Cueva</span><a className="quiet-link" href="#top">Volver arriba<ArrowUp size={15} aria-hidden="true" /></a></footer>
  )
}
