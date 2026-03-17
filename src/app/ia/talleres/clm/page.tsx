import Link from 'next/link';

export default function TallerCLMPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-2 flex items-center gap-2 text-sm text-muted">
          <Link href="/ia/talleres" className="hover:text-accent transition-colors">← Talleres</Link>
          <span>·</span>
          <span>IA de la A a la Z · CLM Granada</span>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">CLM · Universidad de Granada</p>
          <h1 className="text-4xl font-bold mb-3">La IA de la A a la Z</h1>
          <p className="text-xl text-muted max-w-2xl mb-2">
            Taller interactivo para docentes del Centro de Lenguas Modernas. Un recorrido por lo que cualquier profesor debería saber sobre inteligencia artificial.
          </p>
          <p className="text-sm text-muted">Javier Benítez Láinez</p>
        </div>

        {/* Herramienta interactiva */}
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-6 flex items-start gap-4">
          <span className="text-3xl shrink-0">🔤</span>
          <div className="flex-1">
            <h2 className="font-semibold text-fg mb-1">Herramienta interactiva: La A–Z completa</h2>
            <p className="text-sm text-muted mb-3">26 conceptos esenciales de IA para docentes. Modo presentación y modo taller con prompts copiables.</p>
            <Link
              href="/ia/talleres/az"
              className="inline-block px-4 py-2 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
            >
              Abrir herramienta A–Z →
            </Link>
          </div>
        </div>

        {/* Materiales */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-6">
          <h2 className="text-xl font-semibold mb-2">Materiales de trabajo</h2>
          <p className="text-muted text-sm mb-6">
            Recursos del taller "IA de la A a la Z": cuatro micro-prácticas con prompts listos para usar, análisis y criterios de evaluación.
          </p>

          <div className="grid gap-3">
            {[
              {
                num: '01',
                titulo: 'Prompts del modo Taller',
                desc: 'Diapositivas con intención, personalización de cursos, cirugía de prompts y checklist ético.',
                href: '/ia/talleres/clm/materiales',
              },
              {
                num: '02',
                titulo: 'Diapositivas con intención',
                desc: 'Prompt para generar presentaciones ELE con objetivos comunicativos reales.',
                href: '/ia/talleres/clm/materiales/prompts-taller',
              },
              {
                num: '03',
                titulo: 'Personalizar un mini-curso',
                desc: 'De actividades sueltas a un sistema de curso real para un grupo concreto.',
                href: '/ia/talleres/clm/materiales/personalizar-curso',
              },
              {
                num: '04',
                titulo: 'Cirugía de prompt',
                desc: 'Debugging docente: detectar vaguedad, objetivos falsos y ejercicios sin vida.',
                href: '/ia/talleres/clm/materiales/cirugia-prompt',
              },
              {
                num: '05',
                titulo: 'Checklist rápido (ética y sentido)',
                desc: '10 preguntas para no usar IA como atajo ciego. Cierre crítico del taller.',
                href: '/ia/talleres/clm/materiales/checklist-etica',
              },
            ].map(m => (
              <Link
                key={m.href}
                href={m.href}
                className="flex items-center gap-4 bg-bg border border-border rounded-xl px-5 py-4 hover:border-accent transition-colors group"
              >
                <span className="text-xs font-mono text-muted shrink-0">{m.num}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-fg group-hover:text-accent">{m.titulo}</h3>
                  <p className="text-xs text-muted mt-0.5">{m.desc}</p>
                </div>
                <span className="text-muted group-hover:text-accent shrink-0">→</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <Link href="/ia/talleres" className="text-sm text-muted hover:text-accent transition-colors">
            ← Volver a Talleres
          </Link>
          <span className="text-muted">·</span>
          <a
            href="https://www.javier.soy/ia/talleres/clm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            Ver versión original →
          </a>
        </div>

      </div>
    </div>
  );
}
