import Link from 'next/link';

const serviciosPersonales = [
  {
    icon: '💬',
    titulo: 'Sesión individual',
    precio: '70€',
    detalle: '/ 60 min',
    desc: 'Resolvemos dudas específicas, revisamos materiales y trabajamos prompts concretos para tu práctica docente.',
    tags: ['Online', 'Flexible'],
    badge: 'Popular',
  },
  {
    icon: '📦',
    titulo: 'Pack 4 sesiones',
    precio: '250€',
    detalle: '/ 4 semanas',
    desc: 'Acompañamiento continuo para implementar IA en tu enseñanza. Incluye seguimiento por email entre sesiones.',
    tags: ['Online', 'Soporte email'],
    badge: '15% dto',
  },
  {
    icon: '📝',
    titulo: 'Diseño de material',
    precio: '120€',
    detalle: '/ unidad',
    desc: 'Creación de prompts personalizados y secuencias didácticas completas adaptadas a tus estudiantes.',
    tags: ['Entrega digital', 'Específico ELE'],
    badge: null,
  },
  {
    icon: '🔍',
    titulo: 'Cirugía de prompts',
    precio: '50€',
    detalle: '/ sesión',
    desc: 'Revisión y optimización de tus prompts existentes. Transformamos prompts genéricos en excelentes con criterios de calidad incluidos.',
    tags: ['3–5 prompts', 'Reescritura'],
    badge: null,
  },
];

const serviciosCentros = [
  {
    icon: '🔍',
    titulo: 'Diagnóstico inicial',
    precio: '400€',
    detalle: '',
    desc: 'Análisis de necesidades, nivel de partida y recomendaciones específicas para tu centro.',
    tags: ['Online/presencial', '+ Informe'],
  },
  {
    icon: '📋',
    titulo: 'Plan de implementación',
    precio: '900€–1.500€',
    detalle: '',
    desc: 'Estrategia completa, formación del profesorado y seguimiento de la integración de IA.',
    tags: ['A medida', '+ Formación'],
  },
  {
    icon: '👥',
    titulo: 'Formación a medida',
    precio: '350€',
    detalle: '/ hora',
    desc: 'Talleres personalizados para tu equipo según necesidades específicas y contexto.',
    tags: ['Online/presencial', 'Grupos'],
  },
  {
    icon: '📅',
    titulo: 'Acompañamiento trimestral',
    precio: '800€',
    detalle: '/ mes',
    desc: 'Seguimiento continuo con reuniones mensuales, soporte por email y evaluación de resultados.',
    tags: ['Online', 'Soporte continuo'],
  },
];

export default function AsesoriaPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-2">
          <Link href="/ia" className="text-sm text-muted hover:text-accent transition-colors">← Volver a IA</Link>
        </div>

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">IA · Asesoría</p>
          <h1 className="text-5xl font-bold mb-4">Asesoría de IA para educación</h1>
          <p className="text-xl text-muted max-w-2xl">
            Consultoría personalizada para integrar ChatGPT, Claude y agentes de IA en tu práctica docente o centro educativo. Acompañamiento crítico y ético.
          </p>
        </div>

        {/* Por qué trabajar conmigo */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-5">Por qué trabajar conmigo</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🎓', titulo: 'Docente experimentado ELE', desc: 'Años de experiencia en el aula con estudiantes de todas las nacionalidades y niveles. La IA al servicio del aprendizaje real.' },
              { icon: '🔬', titulo: 'Enfoque crítico y ético', desc: 'No uso la IA por usar. Analizo los sesgos, limitaciones y riesgos de cada herramienta antes de recomendarla.' },
              { icon: '🛠️', titulo: 'Práctico, no teórico', desc: 'Prompts listos para usar, actividades testeadas, soluciones que funcionan de verdad en el aula.' },
              { icon: '🌍', titulo: 'Contexto real', desc: 'Granada, España. Materiales localizados, culturas conectadas, experiencias auténticas en el aula.' },
            ].map(item => (
              <div key={item.titulo} className="bg-panel border border-border rounded-xl p-5">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold text-fg mb-1">{item.titulo}</h3>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Credenciales */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-1">Formación y credenciales</h2>
          <p className="text-muted text-sm mb-5">Formación académica, certificaciones docentes y participación en congresos.</p>
          <div className="space-y-3">
            {[
              { icon: '📜', titulo: 'Licenciado en Filología Hispánica', org: 'Universidad de Granada', nota: 'Nivel 3 (Máster) MECES · Nivel 7 EQF' },
              { icon: '👨‍🏫', titulo: 'Formador de Formadores', org: 'Instituto Cervantes', nota: 'Diseñar e impartir un taller de formación · Alcalá de Henares, 2018 · 30 h' },
              { icon: '🍎', titulo: 'Apple Teacher', org: 'Apple Inc.', nota: 'Certificado de reconocimiento · CLM Granada, 2019' },
              { icon: '📱', titulo: 'Mobile Learning en el aula', org: 'Universidad de Granada', nota: 'MOOC · APTO · 3 ECTS · 75 h · 2022' },
              { icon: '💻', titulo: 'Digitalización B2 (Digcomp)', org: 'Min. Educación · UGT', nota: '30 h · Marco Europeo Competencias Digitales · 2022' },
              { icon: '🎤', titulo: 'Ponente I Congreso Internacional CIICEL 2025', org: 'Universidad de Granada', nota: '"La miniserie web como experiencia de inmersión creativa y aprendizaje transformador" · Sept. 2025' },
              { icon: '🎤', titulo: 'IX CILE — Congreso Internacional de la Lengua Española', org: 'RAE · Instituto Cervantes', nota: 'Participación · Cádiz, 27–30 marzo 2023 · 33 h' },
            ].map(c => (
              <div key={c.titulo} className="flex gap-4 bg-panel border border-border rounded-xl p-4">
                <span className="text-xl shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <p className="font-medium text-fg text-sm">{c.titulo}</p>
                  <p className="text-accent text-xs">{c.org}</p>
                  <p className="text-muted text-xs mt-0.5">{c.nota}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/ia/asesoria/brochure" className="text-sm text-accent hover:underline">
              Ver brochure completo con credenciales →
            </Link>
          </div>
        </div>

        {/* CTA Cuestionario */}
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-10 flex items-start gap-4">
          <span className="text-3xl shrink-0">📊</span>
          <div className="flex-1">
            <h3 className="font-semibold text-fg mb-1">¿No sabes qué servicio necesitas?</h3>
            <p className="text-sm text-muted mb-3">Haz el cuestionario de autoevaluación (3–5 min) y te recomiendo el servicio que mejor se adapta a tu perfil.</p>
            <Link href="/ia/asesoria/cuestionario" className="inline-block px-4 py-2 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition">
              Hacer el cuestionario →
            </Link>
          </div>
        </div>

        {/* Para docentes */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Para docentes y profesionales autónomos</h2>
          <p className="text-muted text-sm mb-5">Sesiones personalizadas para resolver dudas concretas, diseñar materiales y mejorar tu práctica con IA.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {serviciosPersonales.map(s => (
              <div key={s.titulo} className="bg-panel border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors relative">
                {s.badge && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full font-medium">
                    {s.badge}
                  </span>
                )}
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-fg mb-1">{s.titulo}</h3>
                <p className="text-2xl font-bold text-accent mb-0.5">{s.precio}</p>
                {s.detalle && <p className="text-xs text-muted mb-3">{s.detalle}</p>}
                <p className="text-sm text-muted mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Para centros */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-1">Para centros, academias y empresas</h2>
          <p className="text-muted text-sm mb-5">Consultoría estratégica y formación para integrar IA de forma efectiva y ética en tu organización.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {serviciosCentros.map(s => (
              <div key={s.titulo} className="bg-panel border border-border rounded-xl p-6 hover:border-accent/50 transition-colors">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{s.icon}</span>
                    <h3 className="font-semibold text-fg">{s.titulo}</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-accent font-bold">{s.precio}</span>
                    {s.detalle && <span className="text-xs text-muted block">{s.detalle}</span>}
                  </div>
                </div>
                <p className="text-sm text-muted mb-3">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Política */}
        <div className="bg-bg border border-border rounded-xl p-5 mb-8 text-sm text-muted">
          <strong className="text-fg">Política de precios:</strong> Todos los precios incluyen IVA. El pago se realiza por transferencia o Bizum antes de la primera sesión. Las sesiones no utilizadas del pack tienen validez de 3 meses. Para proyectos institucionales se emite factura.
        </div>

        {/* CTA */}
        <div className="bg-panel border border-accent/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">¿Hablamos?</h3>
          <p className="text-muted text-sm mb-6 max-w-md mx-auto">
            Cuéntame qué necesitas y te propongo la opción que mejor se adapta a tu situación.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://javier.soy#contacto"
              className="px-6 py-2.5 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
            >
              Escribir por email →
            </a>
            <a
              href="https://wa.me/34690026370?text=Hola%2C%20me%20interesa%20la%20asesor%C3%ADa%20de%20IA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-full text-sm hover:opacity-90 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
