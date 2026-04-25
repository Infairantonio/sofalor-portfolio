'use client'

import { useRouter } from 'next/navigation'

export default function VolverButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:text-white active:scale-95"
    >
      ← Volver
    </button>
  )
}