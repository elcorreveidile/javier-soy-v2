export default function ArchivoPage() {
  const ejes = [
    { titulo: 'Poesía y creación', desc: 'Escritura, recitación y performances poéticos' },
    { titulo: 'Docencia ELE', desc: 'Enseñanza de español como lengua extranjera y formación de profesorado' },
    { titulo: 'Edición cultural', desc: 'Proyectos editoriales independientes y crítica cultural' },
    { titulo: 'Tecnología educativa', desc: 'IA aplicada a la enseñanza y la creación digital' },
    { titulo: 'Activismo cultural', desc: 'Derechos laborales, universidad y políticas culturales' },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Archivo</p>
          <h1 className="text-5xl font-bold mb-4">Memoria y recorrido</h1>
          <p className="text-xl text-muted max-w-2xl">
            Trayectoria, revistas y proyectos editoriales. Aquí conviven lo que ya está hecho y lo que sigue en proceso.
          </p>
        </div>

        {/* Revistas y proyectos */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-5">Revistas y proyectos editoriales</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                rol: 'Editor',
                titulo: 'Olvidos de Granada',
                desc: 'Revista de cultura, pensamiento crítico y memoria. Edición y trabajo cultural independiente.',
                tags: ['Cultura contemporánea', 'Ensayo y crítica', 'Memoria cultural'],
              },
              {
                rol: 'Poeta',
                titulo: 'Proyectos de poesía',
                desc: 'Revistas, colecciones y proyectos editoriales de poesía contemporánea.',
                tags: ['Poesía experimental', 'Edición independiente', 'Performances'],
              },
              {
                rol: 'Colaborador',
                titulo: 'Prensa y medios',
                desc: 'Artículos, ensayos y colaboraciones en medios de comunicación.',
                tags: ['Ensayo cultural', 'Crítica literaria', 'Opinión y cultura'],
              },
              {
                rol: 'Conferenciante',
                titulo: 'Instituciones culturales',
                desc: 'Colaboraciones con centros culturales, universidades y festivales.',
                tags: ['Talleres y charlas', 'Ponencias', 'Recitales'],
              },
            ].map(item => (
              <div key={item.titulo} className="bg-panel border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-fg">{item.titulo}</h3>
                  <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs rounded-full">{item.rol}</span>
                </div>
                <p className="text-sm text-muted mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Textos cerrados */}
        <div className="bg-panel border border-border rounded-2xl p-7 mb-8">
          <h2 className="text-xl font-semibold mb-4">Textos cerrados y materiales de archivo</h2>
          <div className="space-y-3">
            {[
              { titulo: 'Poemas completos', desc: 'Selección de poemas publicados entre 1990 y 2020' },
              { titulo: 'Ensayos literarios', desc: 'Artículos sobre poesía contemporánea y teoría literaria' },
              { titulo: 'Materiales didácticos', desc: 'Secuencias, tareas y recursos para ELE' },
              { titulo: 'Documentación de proyectos', desc: 'Registros de intervenciones culturales y performances' },
            ].map(item => (
              <div key={item.titulo} className="flex items-start gap-2 text-sm">
                <span className="text-accent mt-0.5 shrink-0">→</span>
                <span>
                  <strong className="text-fg">{item.titulo}:</strong>{' '}
                  <span className="text-muted">{item.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ejes */}
        <div className="bg-bg border border-border rounded-2xl p-7">
          <h2 className="text-xl font-semibold mb-4">Cinco ejes que se cruzan y dialogan</h2>
          <div className="space-y-3">
            {ejes.map(e => (
              <div key={e.titulo} className="flex items-start gap-2 text-sm">
                <span className="text-accent mt-0.5 shrink-0">→</span>
                <span>
                  <strong className="text-fg">{e.titulo}:</strong>{' '}
                  <span className="text-muted">{e.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
