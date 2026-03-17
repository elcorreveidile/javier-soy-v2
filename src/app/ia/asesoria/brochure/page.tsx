'use client';

import Link from 'next/link';

const credenciales = [
  {
    categoria: 'Formación académica',
    items: [
      {
        icon: '📜',
        titulo: 'Licenciado en Filología Hispánica',
        org: 'Universidad de Granada',
        nota: 'Nivel 3 (Máster) MECES · Nivel 7 Marco Europeo de Cualificaciones (EQF)',
      },
    ],
  },
  {
    categoria: 'Certificaciones docentes',
    items: [
      {
        icon: '👨‍🏫',
        titulo: 'Formador de Formadores',
        org: 'Instituto Cervantes',
        nota: 'Curso presencial: Diseñar e impartir un taller de formación · Alcalá de Henares, 2018 · 30 horas · Reg. oficial: 288090112221543152235',
      },
      {
        icon: '🍎',
        titulo: 'Apple Teacher',
        org: 'Apple Inc.',
        nota: 'Certificado de reconocimiento · Centro Lenguas Modernas, Granada · 2019',
      },
    ],
  },
  {
    categoria: 'Tecnología educativa y digitalización',
    items: [
      {
        icon: '📱',
        titulo: 'Mobile Learning: Claves para la aplicación de dispositivos móviles en el aula',
        org: 'Universidad de Granada',
        nota: 'MOOC (1ª Edición) · APTO · 3 créditos ECTS · 75 horas · 6 módulos · 2022',
      },
      {
        icon: '💻',
        titulo: 'Digitalización Aplicada al Sector Productivo',
        org: 'Ministerio de Educación y Formación Profesional · UGT',
        nota: '30 horas · Nivel B2 Digcomp (Marco Europeo de Competencias Digitales) · UC2490_2 y UC2491_2 · 2022',
      },
    ],
  },
  {
    categoria: 'Participación en congresos',
    items: [
      {
        icon: '🎤',
        titulo: 'Ponente: I Congreso Internacional CIICEL 2025',
        org: 'Universidad de Granada',
        nota: '"Clínica Cultural y Lingüística de español: la miniserie web como experiencia de inmersión creativa y aprendizaje transformador" · Granada, 10 septiembre 2025 · Centro de Lenguas Modernas',
      },
      {
        icon: '🎤',
        titulo: 'IX Congreso Internacional de la Lengua Española (CILE)',
        org: 'Real Academia Española · Instituto Cervantes',
        nota: 'Participación · Cádiz, 27–30 marzo 2023 · 33 horas · Firmado por Santiago Muñoz Machado (Dir. RAE) y Carmen Pastor Villalba (Dir. académica Instituto Cervantes)',
      },
    ],
  },
];

const servicios = [
  { icon: '💬', titulo: 'Sesión individual', precio: '70€', detalle: '/ 60 min', badge: 'Popular' },
  { icon: '📦', titulo: 'Pack 4 sesiones', precio: '250€', detalle: '/ 4 semanas', badge: '15% dto' },
  { icon: '📝', titulo: 'Diseño de material', precio: '120€', detalle: '/ unidad', badge: null },
  { icon: '🔍', titulo: 'Cirugía de prompts', precio: '50€', detalle: '/ sesión', badge: null },
  { icon: '🏢', titulo: 'Diagnóstico institucional', precio: '400€', detalle: '', badge: null },
  { icon: '📋', titulo: 'Plan de implementación', precio: '900–1.500€', detalle: '', badge: 'Completo' },
  { icon: '👥', titulo: 'Formación a medida', precio: '350€', detalle: '/ hora', badge: null },
  { icon: '📅', titulo: 'Acompañamiento trimestral', precio: '800€', detalle: '/ mes', badge: null },
];

export default function BrochurePage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2 flex items-center justify-between">
          <Link href="/ia/asesoria" className="text-sm text-muted hover:text-accent transition-colors">← Volver a Asesoría</Link>
          <button
            onClick={() => typeof window !== 'undefined' && window.print()}
            className="text-sm text-accent hover:underline no-print"
          >
            📄 Guardar como PDF
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-12 pb-8 border-b border-border">
          <p className="text-accent font-bold text-lg mb-1">javier.soy</p>
          <p className="text-muted text-sm mb-6">IA · Docencia · Cultura Crítica</p>
          <h1 className="text-4xl font-bold mb-3">Servicios de Asesoría en IA</h1>
          <p className="text-muted max-w-xl mx-auto">
            Consultoría personalizada para integrar Inteligencia Artificial en tu práctica docente o centro educativo.
            Un acompañamiento crítico y ético desde la experiencia real en el aula.
          </p>
        </div>

        {/* Por qué trabajar conmigo */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-accent border-l-4 border-accent pl-4 mb-6">Por qué trabajar conmigo</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: '🎓', titulo: 'Docente experimentado ELE', desc: 'Años de experiencia en el aula con estudiantes de todas las nacionalidades y niveles.' },
              { icon: '🔬', titulo: 'Enfoque crítico y ético', desc: 'Analizo los sesgos, limitaciones y riesgos de cada herramienta. No uso la IA por usar.' },
              { icon: '🛠️', titulo: 'Práctico, no teórico', desc: 'Prompts listos para usar, actividades testeadas, soluciones que funcionan de verdad.' },
              { icon: '🌍', titulo: 'Contexto real', desc: 'Granada, España. Materiales localizados, culturas conectadas, experiencias auténticas.' },
            ].map(item => (
              <div key={item.titulo} className="bg-panel border border-border rounded-xl p-4 flex gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-medium text-fg text-sm">{item.titulo}</p>
                  <p className="text-muted text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credenciales */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-accent border-l-4 border-accent pl-4 mb-6">Formación y credenciales</h2>
          <div className="space-y-8">
            {credenciales.map(cat => (
              <div key={cat.categoria}>
                <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-3">{cat.categoria}</h3>
                <div className="space-y-3">
                  {cat.items.map(item => (
                    <div key={item.titulo} className="flex gap-4 bg-panel border border-border rounded-xl p-4">
                      <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                      <div>
                        <p className="font-medium text-fg text-sm">{item.titulo}</p>
                        <p className="text-accent text-xs">{item.org}</p>
                        <p className="text-muted text-xs mt-0.5">{item.nota}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Servicios resumen */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-accent border-l-4 border-accent pl-4 mb-6">Servicios y tarifas</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {servicios.map(s => (
              <div key={s.titulo} className="bg-panel border border-border rounded-xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{s.icon}</span>
                  <div>
                    <p className="font-medium text-fg text-sm">{s.titulo}</p>
                    {s.badge && <span className="text-xs text-accent">{s.badge}</span>}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-bold text-accent">{s.precio}</p>
                  {s.detalle && <p className="text-xs text-muted">{s.detalle}</p>}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted mt-3">Todos los precios incluyen IVA. Pago por transferencia o Bizum. Para proyectos institucionales se emite factura.</p>
        </div>

        {/* Comparativa */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-accent border-l-4 border-accent pl-4 mb-6">Elige tu nivel de acompañamiento</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                nombre: 'Puntual', precio: '70€', desc: 'Para dudas específicas',
                items: ['1 sesión individual', '60 minutos', 'Problema concreto', 'Seguimiento email'],
                destacado: false,
              },
              {
                nombre: 'Recomendado', precio: '250€', desc: 'Pack 4 sesiones',
                items: ['4 sesiones semanales', 'Acompañamiento profundo', 'Soporte email ilimitado', '15% descuento'],
                destacado: true,
              },
              {
                nombre: 'Institucional', precio: 'A medida', desc: 'Para centros y empresas',
                items: ['Diagnóstico + estrategia', 'Formación del equipo', 'Seguimiento continuo', 'Informe de resultados'],
                destacado: false,
              },
            ].map(tier => (
              <div key={tier.nombre} className={`rounded-2xl p-6 border ${tier.destacado ? 'bg-accent/10 border-accent' : 'bg-panel border-border'}`}>
                <p className="text-sm font-medium text-muted mb-1">{tier.nombre}</p>
                <p className="text-3xl font-bold text-accent mb-0.5">{tier.precio}</p>
                <p className="text-xs text-muted mb-4">{tier.desc}</p>
                <ul className="space-y-2">
                  {tier.items.map(item => (
                    <li key={item} className="text-sm text-muted flex gap-2">
                      <span className="text-accent">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-panel border border-accent/30 rounded-2xl p-8 text-center mb-8">
          <h3 className="text-xl font-semibold mb-2">¿Hablamos?</h3>
          <p className="text-muted text-sm mb-6">Cuéntame qué necesitas y te propongo la opción que mejor se adapta.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/ia/asesoria/cuestionario" className="px-6 py-2.5 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition">
              Hacer el cuestionario →
            </Link>
            <Link href="/ia/asesoria" className="px-6 py-2.5 border border-border text-fg rounded-full text-sm hover:border-accent transition">
              Ver todos los servicios
            </Link>
          </div>
        </div>

        <p className="text-xs text-muted text-center">v0.6.0 · 2026 · javier.soy</p>

      </div>
    </div>
  );
}
