const projects = [
  {
    title: 'Explora Huelva',
    description:
      'Proyecto web orientado a descubrir lugares, rutas y experiencias. Enfoque visual, utilidad real y arquitectura preparada para crecer.',
    stack: ['React', 'Node.js', 'MongoDB', 'Docker'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
    type: 'Proyecto destacado',
  },
  {
    title: 'Portfolio Rafa Romero',
    description:
      'Web profesional con fotobook, panel de administración y diseño editorial orientado a imagen de marca personal.',
    stack: ['React', 'Express', 'PostgreSQL', 'JWT'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
    type: 'Portfolio profesional',
  },
  {
    title: 'Blog / API / Laravel',
    description:
      'Distintos proyectos de aprendizaje real con CRUD, autenticación, paneles, roles, subida de imágenes y diseño responsive.',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
    type: 'Proyecto académico real',
  },
]

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="anchor-offset section-spacing"
      aria-labelledby="projects-title"
    >
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <div className="flex justify-center">
            <p className="section-kicker">Proyectos</p>
          </div>

          <h2
            id="projects-title"
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Proyectos reales con enfoque visual, técnico y profesional
          </h2>

          <p className="mt-4 leading-8 text-slate-300">
            Aquí presento trabajos que reflejan mi evolución como desarrollador:
            diseño cuidado, estructura limpia, uso de tecnologías modernas y una
            forma de trabajar pensada para crear productos reales.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className={`project-card glass-card shine-border group rounded-[2rem] p-6 text-center transition-transform active:scale-[0.995] sm:text-left ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                  {project.featured ? 'Top' : 'Activo'}
                </span>
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-sky-400/30 via-slate-700/40 to-transparent" />

              <p className="mt-5 leading-8 text-slate-300">
                {project.description}
              </p>

              <ul
                className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start"
                aria-label={`Tecnologías usadas en ${project.title}`}
              >
                {project.stack.map((item) => (
                  <li key={item} className="tag-chip text-sm">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
                <a
                  href={project.liveUrl}
                  className="button-primary w-full sm:w-auto"
                  aria-label={`Ver proyecto ${project.title}`}
                >
                  Ver proyecto
                </a>

                <a
                  href={project.repoUrl}
                  className="button-secondary w-full sm:w-auto"
                  aria-label={`Ver código de ${project.title}`}
                >
                  Ver código
                </a>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-sm text-slate-400">
                <span>Diseño + desarrollo</span>
                <span className="text-sky-300 transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}