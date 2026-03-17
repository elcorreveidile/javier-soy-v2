import Link from 'next/link';

const libros = [
  { titulo: 'Un guiño, un cómplice, un deseo', año: '1991', nota: 'Premio Cuadernos del Laurel' },
  { titulo: 'Patio de butacas', año: '1994', nota: 'Cuadernos del Tamarit' },
  { titulo: 'Día del espectador', año: '1998', nota: 'Premio Barcarola' },
  { titulo: 'Poemas del guiño', año: '2004', nota: '' },
  { titulo: 'Todas las mentiras', año: '2006', nota: '' },
  { titulo: 'Baile de disfraces', año: '2023', nota: 'Esdrújula Ediciones' },
  { titulo: 'Versos sencillos para despistar a la poesía', año: '2025', nota: '' },
];

export default function CreacionPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Creación</p>
          <h1 className="text-5xl font-bold mb-4">Poesía y palabra en acción</h1>
          <p className="text-xl text-muted max-w-2xl">
            Escribo desde el lenguaje y contra sus inercias. Aquí conviven la poesía, la palabra en acción y los proyectos de poesía expandida.
          </p>
        </div>

        {/* Libros */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Libros publicados</h2>
          <div className="grid gap-3">
            {libros.map(libro => (
              <div
                key={libro.titulo}
                className="flex items-center justify-between bg-panel border border-border rounded-xl px-6 py-4 hover:border-accent/50 transition-colors"
              >
                <div>
                  <span className="font-medium text-fg">{libro.titulo}</span>
                  {libro.nota && (
                    <span className="ml-3 text-xs text-muted">— {libro.nota}</span>
                  )}
                </div>
                <span className="text-accent font-mono text-sm shrink-0 ml-4">{libro.año}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Proyectos de poesía expandida */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Poesía expandida</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-panel border border-border rounded-2xl p-6">
              <div className="text-3xl mb-3">📹</div>
              <h3 className="text-xl font-semibold mb-2">Poedrónomo</h3>
              <p className="text-muted text-sm mb-4">
                Videopoemas, cancionemas y PoemIA generada con IA que integra versos, imágenes, sonidos y tecnología. Más de 600 seguidores.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Videopoemas', 'IA generativa', 'Instagram', 'YouTube'].map(t => (
                  <span key={t} className="px-2 py-1 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                ))}
              </div>
              <a
                href="https://poedronomo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                poedronomo.com →
              </a>
            </div>

            <div className="bg-panel border border-border rounded-2xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-xl font-semibold mb-2">VersoVivo</h3>
              <p className="text-muted text-sm mb-4">
                Comunidad literaria con lectura inmersiva, recitación en video y versiones musicadas con IA. Niveles de membresía.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {['Comunidad', 'Membresía', 'Poesía', 'IA'].map(t => (
                  <span key={t} className="px-2 py-1 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                ))}
              </div>
              <a
                href="https://versovivo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline"
              >
                versovivo.ai →
              </a>
            </div>
          </div>
        </div>

        {/* Actividad */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: '🎤', titulo: 'Recitales y lecturas', desc: 'Actividad poética en espacios culturales de Granada y otros.' },
            { icon: '🎬', titulo: 'Videopoemas y performances', desc: 'Piezas audiovisuales que combinan palabra, imagen y música.' },
            { icon: '🌱', titulo: 'Textos en proceso', desc: 'Repositorio vivo de obras en desarrollo. Este espacio no es un escaparate.' },
          ].map(item => (
            <div key={item.titulo} className="bg-panel border border-border rounded-xl p-5">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-semibold mb-1">{item.titulo}</h4>
              <p className="text-muted text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Diario de un Instante */}
        <div className="bg-panel border border-border rounded-2xl p-6 mb-6">
          <div className="text-3xl mb-3">🌱</div>
          <h3 className="text-xl font-semibold mb-2">Diario de un Instante</h3>
          <p className="text-muted text-sm mb-4">
            Un jardín digital para cultivar un año más consciente y con propósito. Planificación que transforma la abstracción en experiencia vivida mediante la observación de pequeños instantes cotidianos.
          </p>
          <a
            href="https://diariodeuninstante.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:underline"
          >
            diariodeuninstante.com →
          </a>
        </div>

        {/* Ulises en Tierra */}
        <div className="bg-bg border border-accent/30 rounded-2xl p-8">
          <p className="text-accent text-xs font-medium uppercase tracking-wider mb-2">En proceso</p>
          <h3 className="text-xl font-semibold mb-2">Ulises en Tierra</h3>
          <p className="text-muted text-sm">
            Libro de poesía en construcción. Doce dioses olímpicos, doce meses, una historia de desamor ambientada en el espacio mítico de Heresia.
          </p>
        </div>

      </div>
    </div>
  );
}
