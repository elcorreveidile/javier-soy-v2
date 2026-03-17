import Link from 'next/link';

export default function TalleresPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-2">
          <Link href="/ia" className="text-sm text-muted hover:text-accent transition-colors">← Volver a IA</Link>
        </div>

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">IA · Talleres</p>
          <h1 className="text-5xl font-bold mb-4">Talleres de Inteligencia Artificial</h1>
          <p className="text-xl text-muted max-w-2xl">
            Formación práctica sobre ChatGPT, Claude y agentes de IA aplicados a la enseñanza de español ELE. Aprende prompting y técnicas efectivas para tu aula.
          </p>
        </div>

        {/* CLM Taller */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-6 hover:border-accent/50 transition-colors">
          <div className="flex items-start gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-accent uppercase tracking-wider mb-1">CLM · Universidad de Granada</p>
              <h2 className="text-2xl font-bold mb-2">IA de la A a la Z</h2>
              <p className="text-muted mb-4">
                Taller interactivo sobre conceptos clave de IA para docentes de ELE. Un recorrido de la A a la Z por lo que cualquier profesor debería saber sobre inteligencia artificial: herramientas, prompts, ética y aplicaciones reales en el aula.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['Presencial · CLM Granada', 'Docentes ELE', 'Interactivo', 'Certificado'].map(t => (
                  <span key={t} className="px-2 py-1 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                ))}
              </div>
              <Link
                href="/ia/talleres/clm"
                className="inline-block px-5 py-2 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
              >
                Ver taller y materiales →
              </Link>
            </div>
          </div>
        </div>

        {/* Online */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-6">
          <p className="text-xs text-muted uppercase tracking-wider mb-1">Online</p>
          <h2 className="text-2xl font-bold mb-2">Talleres online para docentes</h2>
          <p className="text-muted mb-4">
            Sesiones en directo o grabadas para centros educativos, academias y equipos docentes. Formatos adaptables según el nivel de partida del grupo.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {[
              { titulo: 'Introducción a la IA para ELE', desc: '3 horas · Nivel básico. Para docentes sin experiencia previa con IA.' },
              { titulo: 'Prompt engineering avanzado', desc: '4 horas · Para docentes que ya usan ChatGPT o Claude y quieren ir más lejos.' },
              { titulo: 'Agentes de IA en el aula', desc: '3 horas · Diseño y uso de agentes para corrección, feedback y personalización.' },
              { titulo: 'IA y ética docente', desc: '2 horas · Marco crítico para el uso responsable de IA con estudiantes.' },
            ].map(t => (
              <div key={t.titulo} className="bg-bg border border-border rounded-xl p-4">
                <h4 className="font-medium text-fg mb-1">{t.titulo}</h4>
                <p className="text-xs text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* A medida */}
        <div className="bg-bg border border-accent/30 rounded-2xl p-7 text-center">
          <h3 className="text-xl font-semibold mb-2">¿Necesitas formación a medida para tu centro?</h3>
          <p className="text-muted text-sm mb-5 max-w-lg mx-auto">
            Diseño talleres específicos según el nivel, contexto y objetivos de tu equipo. Presencial en Granada o en remoto.
          </p>
          <a
            href="https://javier.soy#contacto"
            className="inline-block px-6 py-2.5 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
          >
            Escribir para consultar →
          </a>
        </div>

      </div>
    </div>
  );
}
