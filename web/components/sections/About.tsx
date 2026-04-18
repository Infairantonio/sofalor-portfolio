export default function About() {
  return (
    <section
      id="sobre-mi"
      className="anchor-offset section-spacing"
      aria-labelledby="about-title"
    >
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div
            className="glass-card shine-border rounded-[2rem] p-6 text-center sm:p-8 lg:text-left"
            data-aos="fade-up"
          >
            <div className="flex justify-center lg:justify-start">
              <p className="section-kicker">Sobre mí</p>
            </div>

            <h2
              id="about-title"
              className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:mx-0"
            >
              Un perfil junior con una base seria, ordenada y orientada a proyectos reales
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300 lg:mx-0">
              Me interesa crear webs y aplicaciones con una estructura clara,
              buen diseño y una experiencia de uso cuidada. Trabajo paso a paso,
              con organización, atención al detalle y pensando desde el principio
              en cómo se comportará el proyecto tanto a nivel visual como técnico.
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300 lg:mx-0">
              Busco construir una base profesional de verdad: código limpio,
              componentes bien separados, diseño responsive, accesibilidad,
              rendimiento y una arquitectura que permita crecer con sentido.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4 text-center sm:text-left">
                <p className="text-2xl font-bold text-sky-300">UI</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Interfaces modernas y visualmente cuidadas
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4 text-center sm:text-left">
                <p className="text-2xl font-bold text-sky-300">UX</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Usabilidad clara y experiencia limpia
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4 text-center sm:text-left">
                <p className="text-2xl font-bold text-sky-300">Code</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Estructura ordenada y preparada para crecer
                </p>
              </div>
            </div>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <article className="glass-card rounded-[1.75rem] p-6 text-center transition-transform hover:-translate-y-1 sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                01
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Frontend cuidado
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Interfaces responsive, accesibles y visualmente potentes,
                pensadas para móvil, tablet y escritorio.
              </p>
            </article>

            <article className="glass-card rounded-[1.75rem] p-6 text-center transition-transform hover:-translate-y-1 sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                02
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Backend y lógica
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Experiencia en proyectos con autenticación, APIs, bases de datos
                y separación clara por responsabilidades.
              </p>
            </article>

            <article className="glass-card rounded-[1.75rem] p-6 text-center transition-transform hover:-translate-y-1 sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                03
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Trabajo ordenado
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Docker desde el inicio, estructura limpia, componentes bien
                planteados y visión profesional desde la base.
              </p>
            </article>

            <article className="glass-card rounded-[1.75rem] p-6 text-center transition-transform hover:-translate-y-1 sm:text-left">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-300">
                04
              </p>
              <h3 className="mt-3 text-lg font-semibold text-white">
                Visión real
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                No busco solo que funcione. Busco que el proyecto transmita
                calidad, confianza, claridad y personalidad.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}