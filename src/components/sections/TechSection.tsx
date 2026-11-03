import { skills } from '@/data/portfolio'

const categories = [
  { title: 'Interfaces', description: 'La experiencia del usuario.', items: skills.frontend },
  { title: 'Backend', description: 'La lógica detrás del producto.', items: skills.backend },
  { title: 'Datos', description: 'Información bien estructurada.', items: skills.databases },
  { title: 'Inteligencia artificial', description: 'Explorar nuevas posibilidades.', items: skills.ai },
  { title: 'Herramientas y despliegue', description: 'Del desarrollo a la entrega.', items: skills.tools },
]

export function TechSection() {
  return (
    <section className="tech-section page-width section-space" id="tecnologias" aria-labelledby="tech-title">
      <div className="section-heading"><div><p className="eyebrow">03 / Herramientas y capacidades</p><h2 id="tech-title">Del cliente al servidor.</h2></div><p>Las tecnologías con las que<br />doy forma a mis proyectos.</p></div>
      <div className="tech-list">{categories.map((category, index) => <section className="tech-row" key={category.title}><span className="tech-number">0{index + 1}</span><div className="tech-category"><h3>{category.title}</h3><p>{category.description}</p></div><ul aria-label={`Tecnologías de ${category.title}`}>{category.items.map(tech => <li key={tech}>{tech}</li>)}</ul></section>)}</div>
    </section>
  )
}
