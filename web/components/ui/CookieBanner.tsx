'use client'

import { useEffect, useState } from 'react'

type CookieChoice = 'accepted' | 'rejected'

const STORAGE_KEY = 'antonio-romero-cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (!saved) {
      setVisible(true)
    }
  }, [])

  const handleChoice = (choice: CookieChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[999] px-4 pb-4 sm:px-6 sm:pb-6"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      aria-modal="false"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-sky-400/20 bg-slate-950/95 shadow-[0_20px_80px_rgba(2,6,23,0.75)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_38%)]" />
        
        <div className="relative grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:p-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">
              Cookies y privacidad
            </p>

            <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
              Usamos solo las cookies necesarias mientras desarrollamos esta web en local
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-[15px]">
              Ahora mismo esta web está en fase de desarrollo y no usa herramientas de seguimiento externas.
              Más adelante, si añadimos analítica u otros servicios, actualizaremos esta información y la gestión
              del consentimiento.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                href="/politica-cookies"
                className="inline-flex items-center rounded-full border border-sky-400/20 bg-slate-900/70 px-4 py-2 font-semibold text-sky-200 hover:border-sky-400/50 hover:text-white"
              >
                Ver política de cookies
              </a>

              <a
                href="/politica-privacidad"
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 font-semibold text-slate-200 hover:border-sky-400/40 hover:text-white"
              >
                Ver privacidad
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => handleChoice('accepted')}
              className="button-primary w-full"
            >
              Aceptar
            </button>

            <button
              type="button"
              onClick={() => handleChoice('rejected')}
              className="button-secondary w-full"
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}