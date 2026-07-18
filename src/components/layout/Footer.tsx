import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Github, Linkedin, Whatsapp } from '@/components/icons'

export function Footer() {
  return (
    <footer className="relative z-50 border-t border-white/10 bg-brand-bg py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-bold tracking-tighter text-white mb-2">
              Axel<span className="text-brand-primary">.dev</span>
            </Link>
            <p className="text-sm text-brand-text-muted text-center md:text-left">
              Software Engineering Student & Full Stack Developer.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/AXL031" target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-brand-primary transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/axelcuevaalcala/" target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-brand-primary transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://wa.me/51994055173" target="_blank" rel="noreferrer" className="text-brand-text-muted hover:text-green-400 transition-colors">
              <Whatsapp size={20} />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a href="mailto:axelcueva2601@gmail.com" className="text-brand-text-muted hover:text-brand-primary transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-brand-text-muted">
            &copy; {new Date().getFullYear()} Axel. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
