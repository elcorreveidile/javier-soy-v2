import Link from 'next/link';

const agentes = [
  {
    num: '01',
    titulo: 'Corrector oral de español',
    nicho: 'Academias · Profesores ELE',
    desc: 'Recibe audios de estudiantes, los transcribe, analiza errores y genera un informe PDF con feedback formativo. Llega al alumno en menos de 10 minutos.',
    input: ['Audio del alumno (.m4a, .mp3, .wav)', 'Email con el archivo adjunto'],
    output: ['Transcripción original', 'Texto corregido sugerido', 'Análisis de errores (gramática, léxico, conectores)', 'Valoración y nivel estimado (PDF)'],
    tech: ['Whisper', 'Claude', 'PDF', 'SMTP'],
    probado: 'CLM · Universidad de Granada · C1/C2',
    checkpoint: 'El profesor revisa el informe antes de enviarlo al alumno.',
    color: 'text-blue-400',
    icon: '🎤',
  },
  {
    num: '02',
    titulo: 'Agente de contenido',
    nicho: 'Autónomos · Creadores · Docentes',
    demo: '/ia/agentes/demo',
    desc: 'Transforma ideas, notas de voz o borradores en contenido publicable adaptado a tu voz y al canal: LinkedIn, Instagram, newsletter, blog.',
    input: ['Idea en texto o nota de voz', 'Borrador sin pulir', 'Canal destino'],
    output: ['Texto listo para publicar', 'Versión corta y larga', 'Hashtags o asunto incluidos'],
    tech: ['Claude', 'Whisper', 'Briefing de voz'],
    probado: 'Creadores en LinkedIn, Instagram y newsletters (educación y cultura)',
    checkpoint: 'El texto siempre pasa por ti antes de publicar. El agente propone, tú decides.',
    color: 'text-green-400',
    icon: '✍️',
  },
  {
    num: '03',
    titulo: 'Gestión de email',
    nicho: 'Cualquier profesional',
    desc: 'Revisa tu bandeja, clasifica por urgencia, redacta respuestas en tu tono e identifica seguimientos pendientes. Ningún email se envía sin tu aprobación.',
    input: ['Acceso IMAP a tu email', 'Tus criterios de prioridad', 'Ejemplos de emails que escribes'],
    output: ['Bandeja clasificada: urgente / responder / archivar / ignorar', 'Borradores de respuesta listos para revisar', 'Lista de seguimientos con fecha límite sugerida', 'Resumen diario opcional'],
    tech: ['IMAP', 'Claude', 'SMTP'],
    probado: 'Gestión de email académico · Universidad de Granada',
    checkpoint: 'Ningún email se envía sin tu aprobación explícita.',
    color: 'text-purple-400',
    icon: '📧',
  },
];

export default function AgentesPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-2">
          <Link href="/ia" className="text-sm text-muted hover:text-accent transition-colors">← Volver a IA</Link>
        </div>

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">IA · Agentes</p>
          <h1 className="text-5xl font-bold mb-4">Agentes de IA</h1>
          <p className="text-xl text-muted max-w-2xl mb-4">
            No chatbots genéricos. Herramientas específicas para tareas reales, probadas en uso propio.
          </p>
          <p className="text-sm text-muted max-w-2xl">
            Cada agente incluye un <strong className="text-fg">checkpoint humano</strong>: el agente propone, tú decides. Nada ocurre de forma automática sin tu revisión.
          </p>
        </div>

        {/* Agentes */}
        <div className="space-y-6 mb-12">
          {agentes.map(a => (
            <div key={a.num} className="bg-panel border border-border rounded-2xl p-7">
              <div className="flex items-start gap-4 mb-5">
                <span className="text-3xl shrink-0">{a.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`font-mono text-xs font-bold ${a.color}`}>{a.num}</span>
                    <h2 className="text-xl font-bold">{a.titulo}</h2>
                  </div>
                  <p className="text-xs text-muted uppercase tracking-wider">{a.nicho}</p>
                </div>
              </div>

              <p className="text-muted text-sm mb-5 leading-relaxed">{a.desc}</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <h3 className="text-xs font-medium text-muted uppercase tracking-wider mb-2">Input</h3>
                  <ul className="space-y-1">
                    {a.input.map(i => (
                      <li key={i} className="text-sm text-muted flex gap-2">
                        <span className="text-accent shrink-0">→</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-medium text-muted uppercase tracking-wider mb-2">Output</h3>
                  <ul className="space-y-1">
                    {a.output.map(o => (
                      <li key={o} className="text-sm text-muted flex gap-2">
                        <span className="text-accent shrink-0">✓</span> {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {a.tech.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                ))}
              </div>

              <div className="flex items-start gap-2 bg-bg border border-border rounded-xl p-3 mb-3">
                <span className="text-accent text-xs shrink-0 mt-0.5">🔒</span>
                <p className="text-xs text-muted"><strong className="text-fg">Checkpoint humano:</strong> {a.checkpoint}</p>
              </div>

              <p className="text-xs text-muted mb-4">
                <span className="text-accent">✓ Probado en:</span> {a.probado}
              </p>

              {'demo' in a && a.demo && (
                <Link
                  href={a.demo as string}
                  className="inline-block px-4 py-2 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
                >
                  Probar demo gratuita →
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Modelo de negocio */}
        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-lg font-semibold mb-4">Cómo funciona</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { n: '1', titulo: 'Diagnóstico', desc: 'Analizamos tu caso concreto: volumen, flujo de trabajo, herramientas actuales.' },
              { n: '2', titulo: 'Configuración', desc: 'Configuramos el agente con tus datos, tono y criterios. Sin código de tu parte.' },
              { n: '3', titulo: 'Uso y revisión', desc: 'El agente trabaja, tú revisas y apruebas. Ajustamos según la experiencia real.' },
            ].map(paso => (
              <div key={paso.n} className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {paso.n}
                </span>
                <div>
                  <p className="font-medium text-fg text-sm">{paso.titulo}</p>
                  <p className="text-muted text-xs mt-0.5">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 flex items-start gap-5 mb-8">
          <span className="text-3xl shrink-0">🤖</span>
          <div className="flex-1">
            <h3 className="font-semibold text-fg mb-1">Precios por consulta</h3>
            <p className="text-sm text-muted mb-4">
              No hay tarifa fija. El precio depende del volumen, la frecuencia y el nivel de configuración. Cuéntame tu caso y te propongo algo concreto.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://wa.me/34690026370?text=Hola%2C%20me%20interesan%20los%20agentes%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
              >
                Consultar por WhatsApp →
              </a>
              <a
                href="https://github.com/elcorreveidile/agentes-ia"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-border text-muted rounded-full text-sm hover:border-accent hover:text-fg transition"
              >
                Ver repositorio GitHub →
              </a>
            </div>
          </div>
        </div>

        <Link href="/ia" className="text-sm text-muted hover:text-accent transition-colors">
          ← Volver a IA
        </Link>

      </div>
    </div>
  );
}
