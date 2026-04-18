export default function Hero() {
  return (
    <section
      id="inicio"
      className="anchor-offset relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20"
      aria-labelledby="hero-title"
    >
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />
      <div className="hero-orb hero-orb-3" aria-hidden="true" />

      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.08),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left" data-aos="fade-up">
            <div className="flex justify-center lg:justify-start">
              <p className="section-kicker">Portfolio 2026</p>
            </div>

            <h1
              id="hero-title"
              className="glow-text mx-auto max-w-4xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:mx-0 lg:text-7xl"
            >
              Desarrollo webs con una imagen
              <span className="block bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                moderna, sólida y memorable
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
              Soy Antonio Romero, desarrollador web junior. Me centro en crear
              interfaces modernas, visuales y bien construidas, con especial
              atención a la usabilidad, la accesibilidad, el rendimiento y una
              presencia profesional real.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#proyectos"
                className="button-primary w-full sm:w-auto active:scale-[0.98]"
              >
                Ver proyectos
              </a>

              <a
                href="#contacto"
                className="button-secondary w-full sm:w-auto active:scale-[0.98]"
              >
                Contactar
              </a>
            </div>

            <ul
              className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
              aria-label="Tecnologías principales"
            >
              <li className="tag-chip">Next.js</li>
              <li className="tag-chip">TypeScript</li>
              <li className="tag-chip">Tailwind CSS</li>
              <li className="tag-chip">Docker</li>
              <li className="tag-chip">UI/UX</li>
            </ul>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="glass-card rounded-[1.5rem] p-4 text-center transition active:scale-[0.99] sm:text-left">
                <p className="text-2xl font-bold text-sky-300">100%</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Enfoque responsive y mobile-first
                </p>
              </div>

              <div className="glass-card rounded-[1.5rem] p-4 text-center transition active:scale-[0.99] sm:text-left">
                <p className="text-2xl font-bold text-sky-300">SEO</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Base preparada para visibilidad y estructura
                </p>
              </div>

              <div className="glass-card rounded-[1.5rem] p-4 text-center transition active:scale-[0.99] sm:text-left">
                <p className="text-2xl font-bold text-sky-300">UX</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Experiencia clara, usable y profesional
                </p>
              </div>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-2xl"
            data-aos="fade-left"
          >
            <div className="glass-card shine-border rounded-[2rem] p-5 transition active:scale-[0.995] sm:p-7">
              <div className="rounded-[1.5rem] border border-sky-300/10 bg-slate-950/80 p-5 sm:p-6">
                <div className="mb-6 flex items-center justify-center gap-2 sm:justify-start">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <div className="space-y-4 text-center sm:text-left">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                      Enfoque
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Diseño visual potente con una base limpia y bien organizada
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                        Frontend
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        Interfaces modernas, accesibles y bien cuidadas.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                        Estructura
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        Componentes limpios y base preparada para crecer.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                      Objetivo
                    </p>
                    <p className="mt-2 leading-7 text-slate-300">
                      Mostrar proyectos reales y transmitir una imagen seria,
                      moderna y profesional para abrir nuevas oportunidades como
                      desarrollador web.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-sky-400/20 bg-slate-950/85 px-4 py-3 text-sm font-medium text-sky-200 shadow-[0_0_30px_rgba(56,189,248,0.18)] sm:block"
              aria-hidden="true"
            >
              Diseño moderno + código limpio
            </div>

            <div
              className="absolute -right-4 top-8 hidden rounded-2xl border border-cyan-400/15 bg-slate-950/80 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.14)] lg:block"
              aria-hidden="true"
            >
              Portfolio profesional
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}