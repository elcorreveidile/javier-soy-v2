import Link from 'next/link';

export default function IAPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Inteligencia Artificial</p>
          <h1 className="text-5xl font-bold mb-4">IA aplicada a la educación</h1>
          <p className="text-xl text-muted max-w-2xl">
            Formación, asesoría y recursos para integrar la inteligencia artificial en la enseñanza del español y la creación de contenido educativo.
          </p>
        </div>

        {/* Blog */}
        <div className="bg-panel border border-border rounded-2xl p-7 mb-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-muted uppercase tracking-wider mb-1">Blog de IA y Educación ELE</p>
              <h2 className="text-xl font-semibold mb-2">Artículos sobre ChatGPT, Claude, prompts y cultura crítica</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {['ChatGPT y Claude para profesores', 'Prompt engineering', 'Ética digital'].map(t => (
                  <span key={t} className="px-2 py-1 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <Link href="/blog" className="inline-block px-5 py-2 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition">
            Leer artículos →
          </Link>
        </div>

        {/* Servicios */}
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          <Link href="/ia/talleres" className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group block">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent">Talleres y cursos</h3>
            <p className="text-muted text-sm mb-3">
              Formación práctica sobre ChatGPT, Claude y agentes de IA aplicados a la enseñanza ELE.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Presencial', 'Online', 'CLM', 'Granada'].map(t => (
                <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
              ))}
            </div>
          </Link>

          <Link href="/ia/asesoria" className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group block">
            <div className="text-3xl mb-3">💡</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent">Asesoría</h3>
            <p className="text-muted text-sm mb-3">
              Consultoría personalizada para integrar IA en tu práctica docente o centro educativo. Desde 70€/sesión.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Online', 'Presencial', 'Centros', 'Autónomos'].map(t => (
                <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
              ))}
            </div>
          </Link>

          <Link href="/ia/portafolio" className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group block">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent">Portafolio</h3>
            <p className="text-muted text-sm mb-3">
              Trabajos reales con IA: logotipos, agentes y contenido. La IA como instrumento, el criterio como diferencia.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Diseño', 'Agentes', 'Contenido'].map(t => (
                <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
              ))}
            </div>
          </Link>
        </div>

        {/* Agentes */}
        <Link href="/ia/agentes" className="bg-bg border border-accent/30 rounded-2xl p-7 hover:border-accent transition-colors group block">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <p className="text-xs text-accent uppercase tracking-wider mb-1">3 agentes disponibles</p>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">Agentes de IA</h3>
              <p className="text-muted text-sm max-w-lg">
                Corrector oral de español, agente de contenido y gestión de email. Herramientas específicas probadas en uso propio. Siempre con checkpoint humano.
              </p>
            </div>
            <span className="shrink-0 text-accent text-sm">Ver agentes →</span>
          </div>
        </Link>

      </div>
    </div>
  );
}
