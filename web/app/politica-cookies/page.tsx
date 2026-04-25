'use client'

import { useRouter } from 'next/navigation'

export default function PoliticaCookies() {
  const router = useRouter()

  return (
    <main className="container-page section-spacing relative">
      
      {/* 🔝 BOTÓN ARRIBA */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => router.push('/')}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur hover:border-sky-400/40 hover:text-white active:scale-95"
        >
          ← Volver
        </button>
      </div>

      <h1 className="text-3xl font-bold text-white mt-16 text-center">
        Política de Cookies
      </h1>

      <div className="mt-6 space-y-6 text-slate-300 leading-8">
        <p>
          Esta web utiliza cookies para mejorar la experiencia del usuario.
        </p>

        <h2 className="text-xl font-semibold text-white">
          ¿Qué son las cookies?
        </h2>
        <p>
          Son pequeños archivos que se almacenan en el navegador del usuario.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Tipos de cookies
        </h2>
        <ul className="list-disc pl-6">
          <li>Cookies técnicas necesarias</li>
          <li>Cookies de análisis (si se usan en el futuro)</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">
          Configuración
        </h2>
        <p>
          El usuario puede configurar o eliminar cookies desde su navegador.
        </p>

        <p className="text-sm text-slate-400">
          Actualmente esta web no utiliza cookies de seguimiento externas.
        </p>
      </div>

      {/* 🔽 BOTÓN ABAJO */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => router.push('/')}
          className="rounded-full border border-slate-700 bg-slate-900/80 px-5 py-2 text-sm font-medium text-slate-200 backdrop-blur hover:border-sky-400/40 hover:text-white active:scale-95"
        >
          ← Volver al inicio
        </button>
      </div>
    </main>
  )
}