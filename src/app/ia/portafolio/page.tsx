'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function PortafolioPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-2">
          <Link href="/ia" className="text-sm text-muted hover:text-accent transition-colors">← Volver a IA</Link>
        </div>

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">IA · Portafolio</p>
          <h1 className="text-5xl font-bold mb-4">Creación con IA</h1>
          <p className="text-xl text-muted max-w-2xl">
            Trabajos reales realizados con herramientas de Inteligencia Artificial: diseño de identidad visual, creación de agentes y producción de contenido. La IA como instrumento, el criterio como diferencia.
          </p>
        </div>

        {/* Proyecto 01: Hudle logo */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-muted font-mono uppercase tracking-widest">Proyecto 01</span>
            <div className="flex gap-2">
              {['Diseño vectorial', 'SVG generado con IA', 'Identidad visual', '2026'].map(t => (
                <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-1">Logotipo para Hudle</h2>
          <p className="text-muted text-sm mb-5">Plataforma de economía de agentes IA</p>

          {/* Logo display */}
          <div className="bg-[#0a1020] border border-[#1a2a40] rounded-xl p-8 mb-5 flex items-center justify-center min-h-48">
            <img
              src="https://raw.githubusercontent.com/elcorreveidile/IAZ/main/hudle_logo.svg"
              alt="Logotipo Hudle"
              className="max-h-40 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <noscript>
              <a
                href="https://github.com/elcorreveidile/IAZ/blob/main/hudle_logo.svg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline text-sm"
              >
                Ver SVG en GitHub →
              </a>
            </noscript>
          </div>

          <p className="text-muted text-sm mb-5">
            Hudle es una plataforma de economía de agentes IA donde agentes autónomos ofrecen y contratan servicios entre sí y con humanos. El encargo: crear un logotipo que capturara la identidad de la plataforma — colmena, inteligencia colectiva, tecnología.
          </p>
          <p className="text-muted text-sm mb-6">
            El resultado: una abeja con ojos de circuito (azul eléctrico) y bandas doradas, inscrita en un hexágono con borde áureo. Al fondo, una red de nodos conectados que evoca la arquitectura de agentes distribuidos. Wordmark "Hudle" en blanco con acento dorado y tagline <em>AI AGENTS · COLLECTIVE INTELLIGENCE</em>.
          </p>

          {/* Proceso */}
          <div>
            <h3 className="text-xs text-muted uppercase tracking-wider mb-3">Proceso de trabajo</h3>
            <div className="space-y-3">
              {[
                { n: 1, text: 'Brief conceptual: análisis de la identidad de Hudle — colmena, agentes, economía distribuida, tech.' },
                { n: 2, text: 'Prompt de diseño: instrucciones detalladas a Claude para generar SVG desde cero: estructura hexagonal, abeja estilizada, paleta oscura con dorado.' },
                { n: 3, text: 'Iteración y refinado: ajuste progresivo de proporciones, colores, red de nodos y tipografía hasta el resultado final.' },
                { n: 4, text: 'Entrega: SVG escalable, listo para web, impresión y cualquier formato digital.' },
              ].map(step => (
                <div key={step.n} className="flex gap-3 text-sm text-muted">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-bold">
                    {step.n}
                  </span>
                  <span>{step.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 flex gap-3 flex-wrap">
            <a
              href="https://github.com/elcorreveidile/IAZ/blob/main/hudle_logo.svg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted border border-border rounded-full px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
            >
              Ver SVG en GitHub →
            </a>
            <a
              href="https://hudle.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted border border-border rounded-full px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
            >
              Ver Hudle →
            </a>
          </div>
        </div>

        {/* Próximos proyectos */}
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { titulo: 'Agentes de IA para ELE', desc: 'Sistema de agentes autónomos para corrección oral, feedback y gestión de materiales didácticos.', tags: ['Claude', 'Python', 'Next.js'] },
            { titulo: 'Contenido didáctico generativo', desc: 'Secuencias y actividades generadas con IA y refinadas para uso real en el aula de español.', tags: ['Prompts', 'ELE', 'Metodología'] },
          ].map(p => (
            <div key={p.titulo} className="bg-panel border border-border rounded-xl p-5 opacity-70">
              <p className="text-xs text-muted uppercase tracking-wider mb-2">En proceso</p>
              <h3 className="font-semibold text-fg mb-2">{p.titulo}</h3>
              <p className="text-sm text-muted mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
