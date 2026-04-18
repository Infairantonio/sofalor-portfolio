const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'Laravel',
  'PHP',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Git',
  'Responsive Design',
  'Accesibilidad',
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="anchor-offset section-spacing"
      aria-labelledby="skills-title"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div
            className="text-center lg:text-left"
            data-aos="fade-up"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="section-kicker">Skills</p>
            </div>

            <h2
              id="skills-title"
              className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:mx-0"
            >
              Tecnologías y capacidades que ya forman parte de mi base profesional
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300 lg:mx-0">
              Mi foco está en el desarrollo web moderno, tanto en la parte visual
              como en la lógica y la organización técnica del proyecto. Busco una
              base sólida, práctica y preparada para seguir creciendo.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass-card rounded-[1.5rem] p-4 text-center transition active:scale-[0.99] sm:text-left">
                <p className="text-2xl font-bold text-sky-300">Frontend</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Interfaces modernas, responsive y bien cuidadas
                </p>
              </div>

              <div className="glass-card rounded-[1.5rem] p-4 text-center transition active:scale-[0.99] sm:text-left">
                <p className="text-2xl font-bold text-sky-300">Backend</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  APIs, lógica, autenticación y bases de datos
                </p>
              </div>

              <div className="glass-card rounded-[1.5rem] p-4 text-center transition active:scale-[0.99] sm:text-left">
                <p className="text-2xl font-bold text-sky-300">Workflow</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Docker, Git y estructura ordenada desde el inicio
                </p>
              </div>
            </div>
          </div>

          <div
            className="glass-card shine-border rounded-[2rem] p-6 text-center sm:p-8 sm:text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-5 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                  Stack principal
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Herramientas y tecnologías con las que ya trabajo
                </p>
              </div>

              <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                En evolución
              </span>
            </div>

            <ul
              className="flex flex-wrap justify-center gap-3 sm:justify-start"
              aria-label="Listado de habilidades"
            >
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="tag-chip cursor-default transition active:scale-[0.98] hover:-translate-y-1"
                >
                  {skill}
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-slate-800/80 pt-5">
              <p className="text-center text-sm leading-7 text-slate-400 sm:text-left">
                Esta base combina tecnologías de frontend, backend, bases de datos
                e infraestructura, con una forma de trabajo centrada en orden,
                claridad y crecimiento progresivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}