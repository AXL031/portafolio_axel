import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, projectPresentation, type Project } from '@/data/portfolio'

function ProjectCard({ project, number, sizes }: { project: Project; number: number; sizes: string }) {
  const href = `/proyectos/${project.slug}`
  const { category, caption } = projectPresentation[project.slug]

  return (
    <article className="featured-project">
      <Link className="project-visual" href={href} data-project={project.slug} aria-label={`Explorar ${project.title}`}>
        <div className="project-visual-top">
          <span>{String(number).padStart(2, '0')} / {category}</span>
          <span className="project-visual-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span>
        </div>
        <div className="project-screenshot">
          <Image src={project.thumbnail} alt="" fill sizes={sizes} className="project-image" />
        </div>
        <div className="project-visual-bottom"><span>{caption}</span><span aria-hidden="true">↗</span></div>
      </Link>
      <div className="project-description">
        <p className="project-category">{project.type}</p>
        <h3><Link href={href}>{project.title}</Link></h3>
        <p className="project-summary">{project.shortDescription}</p>
        <p className="project-contribution">
          <span>Mi aporte</span>
          {project.contribution}
        </p>
        <div className="project-meta">
          <p>{project.technologies.slice(0, 3).join(' / ')}</p>
          <div className="project-card-actions">
            {project.repoUrl && <a className="quiet-link" href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.title} en GitHub`}>GitHub<ArrowUpRight size={14} aria-hidden="true" /></a>}
            <Link className="text-link" href={href}>Explorar el caso<ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const featured = projects.slice(0, 3)
  const additionalCases = projects.slice(3, 5)
  const otherProjects = projects.slice(5)

  return (
    <section className="projects-section page-width section-space" id="proyectos" aria-labelledby="projects-title">
      <div className="section-heading"><div><p className="eyebrow">01 / Trabajo seleccionado</p><h2 id="projects-title">Ideas que toman forma.</h2></div><p>Automatización, sistemas distribuidos<br /> y ciencia de datos.</p></div>
      <div className="featured-projects featured-projects-primary">
        {featured.map((project, index) => <ProjectCard key={project.id} project={project} number={index + 1} sizes="(max-width: 700px) 90vw, 33vw" />)}
      </div>
      <div className="featured-projects additional-cases">
        {additionalCases.map((project, index) => <ProjectCard key={project.id} project={project} number={featured.length + index + 1} sizes="(max-width: 700px) 90vw, (max-width: 1200px) 50vw, 600px" />)}
      </div>
      <div className="other-projects"><div className="other-projects-heading"><h3>También he construido</h3><span className="eyebrow">Arquitectura / Investigación / Sistemas</span></div>
        {otherProjects.map((project, index) => (
          <Link className="project-row" href={`/proyectos/${project.slug}`} key={project.id}>
            <span className="project-number">{String(featured.length + additionalCases.length + index + 1).padStart(2, '0')}</span><div className="project-row-title"><h4>{project.title}</h4><p>{project.shortDescription}</p></div><span className="project-row-category">{projectPresentation[project.slug].category}</span><ArrowUpRight className="project-row-arrow" size={23} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  )
}
