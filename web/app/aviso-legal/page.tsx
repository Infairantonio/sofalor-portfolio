export default function AvisoLegal() {
  return (
    <main className="container-page section-spacing">
      <h1 className="text-3xl font-bold text-white">Aviso Legal</h1>

      <div className="mt-6 space-y-6 text-slate-300 leading-8">
        <p>
          En cumplimiento con el deber de información recogido en la Ley 34/2002,
          de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE),
          se informa que este sitio web es propiedad de:
        </p>

        <ul className="list-disc pl-6">
          <li><strong>Nombre:</strong> Antonio Romero</li>
          <li><strong>Email:</strong> tuemail@ejemplo.com</li>
          <li><strong>Actividad:</strong> Desarrollo web</li>
        </ul>

        <h2 className="text-xl font-semibold text-white">Condiciones de uso</h2>
        <p>
          El acceso y uso de esta web atribuye la condición de usuario, aceptando
          desde dicho acceso las presentes condiciones de uso.
        </p>

        <h2 className="text-xl font-semibold text-white">Propiedad intelectual</h2>
        <p>
          Todos los contenidos de esta web (textos, imágenes, código, diseño)
          son propiedad de su titular, salvo que se indique lo contrario.
        </p>

        <h2 className="text-xl font-semibold text-white">Responsabilidad</h2>
        <p>
          El titular no se hace responsable del mal uso que se realice de los contenidos
          de esta web.
        </p>
      </div>
    </main>
  )
}