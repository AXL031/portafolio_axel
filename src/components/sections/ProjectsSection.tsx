import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, projectPresentation } from '@/data/portfolio'

export function ProjectsSection() {
  const featured = projects.slice(0, 2)
  const otherProjects = projects.slice(2)

  return (
    <section className="projects-section page-width section-space" id="proyectos" aria-labelledby="projects-title">
      <div className="section-heading"><div><p className="eyebrow">01 / Trabajo seleccionado</p><h2 id="projects-title">Ideas que toman forma.</h2></div><p>Desde una presencia digital<br />hasta una integración con IA.</p></div>
      <div className="featured-projects">
        {featured.map((project, index) => (
          <article className="featured-project" key={project.id}>
            <Link className="project-visual" href={`/proyectos/${project.slug}`} data-project={project.slug} aria-label={`Explorar ${project.title}`}>
              <div className="project-visual-top"><span>{String(index + 1).padStart(2, '0')} / {projectPresentation[project.slug].category}</span><span className="project-visual-arrow"><ArrowUpRight size={19} aria-hidden="true" /></span></div>
              <div className="project-screenshot"><Image src={project.thumbnail} alt={`Vista de ${project.title}`} fill sizes="(max-width: 700px) 90vw, (max-width: 1200px) 50vw, 600px" className="project-image" /></div>
              <div className="project-visual-bottom"><span>{projectPresentation[project.slug].caption}</span><span aria-hidden="true">↗</span></div>
            </Link>
            <div className="project-description"><p className="project-category">{project.type}</p><h3><Link href={`/proyectos/${project.slug}`}>{project.title}</Link></h3><p className="project-summary">{project.shortDescription}</p><p className="project-contribution"><span>Mi aporte</span>{project.contribution}</p><div className="project-meta"><p>{project.technologies.slice(0, 3).join(' / ')}</p><Link className="text-link" href={`/proyectos/${project.slug}`}>Explorar el caso<ArrowUpRight size={16} aria-hidden="true" /></Link></div></div>
          </article>
        ))}
      </div>
      <div className="other-projects"><div className="other-projects-heading"><h3>También he construido</h3><span className="eyebrow">Arquitectura / Investigación / Sistemas</span></div>
        {otherProjects.map((project, index) => (
          <Link className="project-row" href={`/proyectos/${project.slug}`} key={project.id}>
            <span className="project-number">0{index + 3}</span><div className="project-row-title"><h4>{project.title}</h4><p>{project.shortDescription}</p></div><span className="project-row-category">{projectPresentation[project.slug].category}</span><ArrowUpRight className="project-row-arrow" size={23} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </section>
  )
}
