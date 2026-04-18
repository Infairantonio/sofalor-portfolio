'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio', id: 'inicio' },
  { href: '#sobre-mi', label: 'Sobre mí', id: 'sobre-mi' },
  { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16)

      const sections = links
        .map((link) => document.getElementById(link.id))
        .filter(Boolean) as HTMLElement[]

      const scrollPosition = window.scrollY + 140

      for (const section of sections) {
        const top = section.offsetTop
        const height = section.offsetHeight

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id)
          break
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-sky-400/10 bg-slate-950/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full px-2 py-2"
            aria-label="Ir al inicio"
          >
            <span className="flex h-11 w-11 items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="h-11 w-11 drop-shadow-[0_0_10px_rgba(0,116,217,0.6)] transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="gradNav" x1="0%" y1="0%" x2="100%" y2="100%">
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

            <span className="flex flex-col text-left">
              <span className="text-sm font-semibold text-slate-50">
                Antonio Romero
              </span>
              <span className="text-xs text-slate-400">
                Desarrollador Web Junior
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center md:flex"
            aria-label="Navegación principal"
          >
            <div className="flex items-center rounded-full border border-slate-800/80 bg-slate-950/55 p-1 shadow-[0_0_30px_rgba(2,6,23,0.35)] backdrop-blur-xl">
              {links.map((link) => {
                const isActive = activeSection === link.id

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-slate-900/90 text-white shadow-[0_0_20px_rgba(56,189,248,0.16)]'
                        : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            <a href="#contacto" className="button-primary ml-3 text-sm">
              Hablemos
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-100 shadow-[0_0_20px_rgba(2,6,23,0.35)] transition active:scale-95 hover:border-sky-400/30 hover:text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="8" x2="20" y2="8" />
                  <line x1="4" y1="16" x2="20" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav
            id="mobile-menu"
            className="glass-card shine-border mb-4 rounded-[1.75rem] p-4 text-center md:hidden"
            aria-label="Menú móvil"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                const isActive = activeSection === link.id

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-2xl px-4 py-3 text-base font-medium transition active:scale-[0.99] ${
                      isActive
                        ? 'bg-slate-900/90 text-white shadow-[0_0_20px_rgba(56,189,248,0.14)]'
                        : 'text-slate-200 hover:bg-slate-900/80 hover:text-white'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              })}

              <a
                href="#contacto"
                className="button-primary mt-2"
                onClick={() => setOpen(false)}
              >
                Hablemos
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}