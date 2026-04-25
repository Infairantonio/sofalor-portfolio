export default function Contact() {
  return (
    <section
      id="contacto"
      className="anchor-offset section-spacing pb-20"
      aria-labelledby="contact-title"
    >
      <div className="container-page">
        <div className="glass-card shine-border rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div className="text-center lg:text-left" data-aos="fade-up">
              <div className="flex justify-center lg:justify-start">
                <p className="section-kicker">Contacto</p>
              </div>

              <h2
                id="contact-title"
                className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:mx-0"
              >
                ¿Hablamos sobre una oportunidad, una colaboración o un proyecto?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300 lg:mx-0">
                Estoy construyendo una base sólida como desarrollador web y me
                interesa seguir creciendo en proyectos reales, entornos
                profesionales y oportunidades donde pueda aportar, aprender y
                evolucionar.
              </p>

              <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300 lg:mx-0">
                Si buscas una persona con ganas de seguir mejorando, cuidar los
                detalles y trabajar con una base moderna y ordenada, estaré
                encantado de escuchar tu propuesta.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="mailto:antoniojoseromeromendez@gmail.com"
                  className="button-primary w-full sm:w-auto active:scale-[0.98]"
                >
                  Enviar email
                </a>

                <a
                  href="https://github.com/Infairantonio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary w-full sm:w-auto active:scale-[0.98]"
                >
                  GitHub ↗
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4 text-center transition active:scale-[0.99] sm:text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                    Email
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Contacto directo para oportunidades y colaboraciones
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-slate-800 bg-slate-950/70 p-4 text-center transition active:scale-[0.99] sm:text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                    GitHub
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Repositorios, práctica real y evolución técnica
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mx-auto w-full max-w-md lg:mx-0"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950/70 p-6 text-center transition active:scale-[0.995] sm:text-left">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-center">
                  <h3 className="text-lg font-semibold text-white">
                    Información de contacto
                  </h3>

                  <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                    Disponible
                  </span>
                </div>

                <dl className="mt-6 space-y-5 text-sm">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <dt className="font-semibold text-sky-300">Email</dt>
                    <dd className="mt-1 text-slate-300 break-all">
                      antoniojoseromeromendez@gmail.com
                    </dd>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <dt className="font-semibold text-sky-300">Ubicación</dt>
                    <dd className="mt-1 text-slate-300">España</dd>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <dt className="font-semibold text-sky-300">
                      Disponibilidad
                    </dt>
                    <dd className="mt-1 text-slate-300">
                      Abierto a oportunidades junior, prácticas y proyectos web
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 border-t border-slate-800/80 pt-5">
                  <p className="text-sm leading-7 text-slate-400">
                    Puedes contactarme directamente por email o ver mi trabajo en GitHub.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}