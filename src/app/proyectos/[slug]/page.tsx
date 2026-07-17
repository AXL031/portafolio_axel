import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react'
import { Github } from '@/components/icons'
import { projects } from '@/data/portfolio'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { ProjectGallery } from '@/components/ui/ProjectGallery'

// Generate metadata for each project page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug)
  
  if (!project) {
    return { title: 'Proyecto no encontrado' }
  }
  
  return {
    title: `${project.title} | Axel - Portfolio`,
    description: project.shortDescription,
  }
}

// Ensure static generation for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Header / Nav */}
        <Link href="/#proyectos" className="inline-flex items-center text-brand-text-muted hover:text-white transition-colors mb-8">
          <ArrowLeft className="mr-2" size={20} />
          Volver a Proyectos
        </Link>

        {/* Project Hero */}
        <div className="space-y-6 mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">{project.type}</Badge>
            {project.technologies.map(tech => (
              <Badge key={tech} variant="outline">{tech}</Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-brand-text-muted leading-relaxed">
            {project.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <Button>
                  Ver Demo <ExternalLink size={18} className="ml-2" />
                </Button>
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <Button variant="secondary">
                  Repositorio <Github size={18} className="ml-2" />
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden bg-brand-card border border-white/10 mb-16 flex items-center justify-center relative">
           <Image 
             src={project.thumbnail} 
             alt={`Imagen principal de ${project.title}`}
             fill
             className="object-contain p-4 md:p-8"
             priority
           />
        </div>

        {/* Project Details */}
        <div className="grid gap-12">
          
          {/* Context and Problem */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-brand-bg/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Contexto</h3>
                <p className="text-brand-text-muted leading-relaxed">{project.context || 'Contexto no especificado.'}</p>
              </CardContent>
            </Card>
            
            <Card className="bg-brand-bg/50 border-brand-accent/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">El Problema</h3>
                <p className="text-brand-text-muted leading-relaxed">{project.problem || 'Problema no especificado.'}</p>
              </CardContent>
            </Card>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">La Solución</h2>
            <p className="text-lg text-brand-text-muted leading-relaxed">
              {project.solution || 'Solución en desarrollo.'}
            </p>
          </div>

          {/* Architecture and Contribution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Arquitectura</h3>
              <ul className="space-y-3">
                {project.architecture?.map((arch, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-text-muted">
                    <div className="mt-1 min-w-[20px] text-brand-primary">
                      <div className="w-2 h-2 rounded-full bg-brand-primary mt-1.5" />
                    </div>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Mi Contribución</h3>
              <Card className="bg-brand-primary/5 border-brand-primary/20">
                <CardContent className="p-6">
                  <p className="text-brand-text-muted leading-relaxed font-medium">
                    {project.contribution}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Results */}
          {project.results && project.results.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 border-b border-white/10 pb-4">Resultados e Impacto</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((result, i) => (
                  <div key={i} className="flex items-start gap-3 bg-brand-card p-4 rounded-lg border border-white/5">
                    <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-brand-text-muted">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Gallery */}
          <ProjectGallery images={project.images || []} title={project.title} />

        </div>
      </div>
    </div>
  )
}
