export default function ActivismoPage() {
  return (
    <div className="min-h-screen py-16 px-4 relative">
      {/* Imagen de fondo con opacidad baja, igual que en javier.soy */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          backgroundImage: "url('/img/activismo.JPEG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Activismo y contexto</p>
          <h1 className="text-5xl font-bold mb-4">Trabajo, derechos y cultura</h1>
          <p className="text-xl text-muted max-w-2xl">
            Acción sindical, universidad y mundo laboral, cultura pública y políticas culturales.
          </p>
        </div>

        {/* UGT */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-4 flex-wrap mb-5">
            <div>
              <p className="text-xs text-accent uppercase tracking-wider mb-1">Sección Sindical · CLM · UGR Granada</p>
              <h2 className="text-2xl font-bold mb-2">UGT-CLM-UGR</h2>
              <p className="text-muted text-sm max-w-lg">
                Un colectivo de trabajadoras y trabajadores del Centro de Lenguas Modernas de la Universidad de Granada que defiende derechos laborales y mejora el entorno de trabajo desde el diálogo y la solidaridad.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 mb-5">
            {[
              { titulo: 'Defensa de derechos laborales', desc: 'Representación y negociación colectiva' },
              { titulo: 'Asesoramiento jurídico gratuito', desc: 'Orientación legal para afiliados' },
              { titulo: 'Formación continua', desc: 'Cursos con descuentos de hasta el 90%' },
              { titulo: 'Seguro de accidentes', desc: 'Protección incluida en la afiliación' },
              { titulo: 'Participación democrática', desc: 'Voz en las decisiones sindicales' },
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
          <a
            href="https://ugtclmgranada.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition-colors"
          >
            Web UGT-CLM Granada →
          </a>
        </div>

        {/* Jornadas IA */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-6">
          <p className="text-xs text-accent uppercase tracking-wider mb-1">CLM · Formación interna</p>
          <h2 className="text-2xl font-bold mb-2">Jornadas de Introducción a la IA</h2>
          <p className="text-muted text-sm mb-5">
            Formación práctica en IA para personal del CLM. Un programa diseñado para que docentes y personal administrativo integren herramientas de inteligencia artificial en su trabajo cotidiano.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-5">
            {[
              { valor: '20 h', desc: 'Duración total' },
              { valor: '30 sesiones', desc: 'Contenido práctico' },
              { valor: 'Certificado oficial', desc: 'Con acreditación UGR' },
            ].map(item => (
              <div key={item.desc} className="bg-bg border border-border rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-accent mb-1">{item.valor}</div>
                <div className="text-xs text-muted">{item.desc}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {['5 viernes (mañana y tarde)', '60% práctica con casos reales CLM', 'Grupos reducidos (máx. 15 personas)'].map(t => (
              <span key={t} className="px-2 py-1 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
            ))}
          </div>
          <a
            href="https://ugtclmgranada.org/pages/curso-ia.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
          >
            Ver información del curso →
          </a>
        </div>

        {/* Cultura pública */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Cultura pública y políticas culturales</h2>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-fg mb-1">Olvidos de Granada</h3>
              <p className="text-muted text-sm mb-3">
                Edición cultural independiente desde el compromiso con la memoria, el pensamiento crítico y la cultura contemporánea.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Revista de cultura y pensamiento', 'Ensayo y crítica cultural', 'Proyectos de memoria histórica'].map(t => (
                  <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                ))}
              </div>
              <a
                href="https://olvidosdegranada.es"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition-colors"
              >
                olvidosdegranada.es →
              </a>
            </div>
          </div>
        </div>

        {/* Principios */}
        <div className="bg-bg border border-border rounded-2xl p-7">
          <h2 className="text-xl font-semibold mb-4">Tres convicciones</h2>
          <div className="space-y-3">
            {[
              { titulo: 'Derechos laborales dignos', desc: 'La defensa de las condiciones de trabajo es parte inseparable de la dignidad profesional.' },
              { titulo: 'Cultura como derecho', desc: 'El acceso a la cultura y la participación en la vida cultural son derechos fundamentales.' },
              { titulo: 'Compromiso con el territorio', desc: 'La acción cultural y sindical tiene sentido cuando se arraiga en el contexto local.' },
            ].map(p => (
              <div key={p.titulo} className="flex items-start gap-2 text-sm">
                <span className="text-accent mt-0.5 shrink-0">→</span>
                <span>
                  <strong className="text-fg">{p.titulo}:</strong>{' '}
                  <span className="text-muted">{p.desc}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
