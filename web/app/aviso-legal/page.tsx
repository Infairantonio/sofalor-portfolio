'use client'

import { useRouter } from 'next/navigation'

export default function AvisoLegal() {
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
        Aviso Legal
      </h1>

      <div className="mt-6 space-y-6 text-slate-300 leading-8">
        <p>
          En cumplimiento con el deber de información recogido en la Ley 34/2002,
          de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE),
          se informa que este sitio web es propiedad de:
        </p>

        <ul className="list-disc pl-6">
          <li><strong>Nombre:</strong> Antonio Romero</li>
          <li><strong>Email:</strong> antoniojoseromeromendez@gmail.com</li>
          <li><strong>Actividad:</strong> Desarrollo web</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">
          Condiciones de uso
        </h2>
        <p>
          El acceso y uso de esta web atribuye la condición de usuario, aceptando
          desde dicho acceso las presentes condiciones de uso.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Propiedad intelectual
        </h2>
        <p>
          Todos los contenidos de esta web (textos, imágenes, código, diseño)
          son propiedad de su titular, salvo que se indique lo contrario.
        </p>

        <h2 className="text-xl font-semibold text-white">
          Responsabilidad
        </h2>
        <p>
          El titular no se hace responsable del mal uso que se realice de los contenidos
          de esta web.
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