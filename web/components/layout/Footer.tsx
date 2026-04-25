export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-800/80 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.10),transparent_30%)]" />

      <div className="container-page relative">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="flex h-11 w-11 items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="h-11 w-11 drop-shadow-[0_0_10px_rgba(0,116,217,0.6)] transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="gradNav"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#0074d9" />
                      <stop offset="100%" stopColor="#00e6b8" />
                    </linearGradient>
                  </defs>

                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradNav)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="25"
                    stroke="url(#gradNav)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle cx="50" cy="50" r="10" fill="url(#gradNav)" />
                </svg>
              </span>

              <div>
                <p className="text-sm font-semibold text-white">Sofalor</p>
                <p className="text-sm text-slate-400">
                  Desarrollador web · Diseño moderno · Enfoque profesional
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Portfolio desarrollado con una base moderna y escalable, cuidando
              diseño, usabilidad, accesibilidad y estructura técnica desde el
              inicio.
            </p>
          </div>

          <nav
            aria-label="Enlaces legales"
            className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 lg:justify-end"
          >
            <a href="/aviso-legal" className="transition hover:text-sky-300">
              Aviso legal
            </a>
            <a
              href="/politica-privacidad"
              className="transition hover:text-sky-300"
            >
              Privacidad
            </a>
            <a
              href="/politica-cookies"
              className="transition hover:text-sky-300"
            >
              Cookies
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-slate-800/80 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Sofalor. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
