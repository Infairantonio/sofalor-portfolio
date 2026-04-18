export default function PoliticaCookies() {
  return (
    <main className="container-page section-spacing">
      <h1 className="text-3xl font-bold text-white">Política de Cookies</h1>

      <div className="mt-6 space-y-6 text-slate-300 leading-8">
        <p>
          Esta web utiliza cookies para mejorar la experiencia del usuario.
        </p>

        <h2 className="text-xl font-semibold text-white">¿Qué son las cookies?</h2>
        <p>
          Son pequeños archivos que se almacenan en el navegador del usuario.
        </p>

        <h2 className="text-xl font-semibold text-white">Tipos de cookies</h2>
        <ul className="list-disc pl-6">
          <li>Cookies técnicas necesarias</li>
          <li>Cookies de análisis (si se usan en el futuro)</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">Configuración</h2>
        <p>
          El usuario puede configurar o eliminar cookies desde su navegador.
        </p>

        <p className="text-sm text-slate-400">
          Actualmente esta web no utiliza cookies de seguimiento externas.
        </p>
      </div>
    </main>
  )
}