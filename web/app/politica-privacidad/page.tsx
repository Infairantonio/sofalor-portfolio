export default function PoliticaPrivacidad() {
  return (
    <main className="container-page section-spacing">
      <h1 className="text-3xl font-bold text-white">Política de Privacidad</h1>

      <div className="mt-6 space-y-6 text-slate-300 leading-8">
        <p>
          Esta política describe cómo se recogen, usan y protegen los datos personales
          de los usuarios de esta web.
        </p>

        <h2 className="text-xl font-semibold text-white">Responsable del tratamiento</h2>
        <ul className="list-disc pl-6">
          <li><strong>Nombre:</strong> Antonio Romero</li>
          <li><strong>Email:</strong> tuemail@ejemplo.com</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">Datos que se recogen</h2>
        <p>
          Los datos que se pueden recoger son los proporcionados por el usuario
          a través de formularios de contacto o correo electrónico.
        </p>

        <h2 className="text-xl font-semibold text-white">Finalidad</h2>
        <p>
          Los datos se utilizan únicamente para responder a consultas o contactos
          realizados por el usuario.
        </p>

        <h2 className="text-xl font-semibold text-white">Legitimación</h2>
        <p>
          La base legal es el consentimiento del usuario al contactar.
        </p>

        <h2 className="text-xl font-semibold text-white">Conservación</h2>
        <p>
          Los datos se conservarán el tiempo necesario para atender la solicitud.
        </p>

        <h2 className="text-xl font-semibold text-white">Derechos</h2>
        <p>
          El usuario puede ejercer sus derechos de acceso, rectificación o supresión
          enviando un email a la dirección indicada.
        </p>
      </div>
    </main>
  )
}