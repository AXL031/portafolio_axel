import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { projects, projectPresentation } from '@/data/portfolio'
import { ProjectGallery } from '@/components/ui/ProjectGallery'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(project => project.slug === slug)
  return project
    ? { title: project.title, description: project.shortDescription, openGraph: { title: `${project.title} | Axel Cueva`, description: project.shortDescription } }
    : { title: 'Proyecto no encontrado' }
}

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find(project => project.slug === slug)
  if (!project) notFound()
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length]

  return (
    <article className="case-study page-width">
      <Link href="/#proyectos" className="back-link"><ArrowLeft size={16} aria-hidden="true" />Volver al trabajo seleccionado</Link>
      <header className="case-header"><div><p className="eyebrow">{projectPresentation[project.slug].category} / {project.type}</p><h1 className="case-title">{project.title}</h1><p className="case-description">{project.shortDescription}</p></div><div className="case-intro-meta"><span className="eyebrow">Tecnologías</span><p>{project.technologies.join(' / ')}</p><div className="case-actions">{project.demoUrl && <a className="button-link" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Visitar sitio<ArrowUpRight size={16} aria-hidden="true" /></a>}{project.repoUrl && <a className="button-link secondary" href={project.repoUrl} target="_blank" rel="noopener noreferrer">Ver código<ArrowUpRight size={16} aria-hidden="true" /></a>}</div></div></header>
      <div className="case-cover" data-project={project.slug}><Image src={project.thumbnail} alt={`Vista principal de ${project.title}`} fill sizes="(max-width: 700px) 95vw, (max-width: 1200px) 90vw, 1120px" preload /></div>
      <div className="case-section case-two-columns"><section><p className="eyebrow">01 / El punto de partida</p><h2>Contexto</h2><p>{project.context}</p></section><section><p className="eyebrow">02 / El desafío</p><h2>El problema</h2><p>{project.problem}</p></section></div>
      <section className="case-section"><p className="eyebrow">03 / De la idea a la implementación</p><h2>La solución</h2><p className="case-solution">{project.solution}</p></section>
      <div className="case-section case-two-columns"><section><p className="eyebrow">04 / Cómo se conecta</p><h2>Arquitectura</h2><ul className="architecture-list">{project.architecture?.map(item => <li key={item}>{item}</li>)}</ul></section><section className="case-contribution"><p className="eyebrow">05 / Mi participación</p><h2>Lo que construí</h2><p>{project.contribution}</p></section></div>
      {!!project.results?.length && <section className="case-section"><p className="eyebrow">06 / El resultado</p><h2>Resultados del proyecto</h2><ul className="results-list">{project.results.map((result, index) => <li key={result}><span>{String(index + 1).padStart(2, '0')}</span>{result}</li>)}</ul></section>}
      <ProjectGallery images={project.images ?? []} title={project.title} />
      <Link className="case-next" href={`/proyectos/${nextProject.slug}`}><div><p className="eyebrow">Siguiente proyecto</p><h2>{nextProject.title}</h2></div><ArrowUpRight size={32} aria-hidden="true" /></Link>
    </article>
  )
}
