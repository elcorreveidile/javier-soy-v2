import Link from 'next/link';

const materiales = [
  {
    num: '01',
    titulo: 'Diapositivas con intención',
    slug: 'prompts-taller',
    desc: 'Prompt para generar presentaciones ELE con objetivo comunicativo, frases modelo y micro-tarea oral.',
    tags: ['Z.ai', 'Presentaciones', 'ELE'],
  },
  {
    num: '02',
    titulo: 'Personalizar un mini-curso',
    slug: 'personalizar-curso',
    desc: 'De actividades sueltas a un sistema de curso real para un grupo concreto en 10 minutos.',
    tags: ['Programación', 'B1', 'Granada'],
  },
  {
    num: '03',
    titulo: 'Cirugía de prompt',
    slug: 'cirugia-prompt',
    desc: 'Debugging docente: detectar vaguedad, reescribir prompts deficientes y evaluar calidad.',
    tags: ['Debugging', 'Pretérito perfecto', 'Criterios'],
  },
  {
    num: '04',
    titulo: 'Checklist rápido (ética y sentido)',
    slug: 'checklist-etica',
    desc: '10 preguntas para no usar IA como atajo ciego. Cierre ético del taller.',
    tags: ['Ética', 'Checklist', 'Responsabilidad'],
  },
];

export default function MaterialesCLMPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-2 flex items-center gap-2 text-sm text-muted flex-wrap">
          <Link href="/ia/talleres" className="hover:text-accent transition-colors">Talleres</Link>
          <span>/</span>
          <Link href="/ia/talleres/clm" className="hover:text-accent transition-colors">CLM</Link>
          <span>/</span>
          <span>Materiales</span>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">CLM · IA de la A a la Z</p>
          <h1 className="text-4xl font-bold mb-3">Materiales de trabajo</h1>
          <p className="text-xl text-muted max-w-2xl">
            Recursos del taller para docentes de ELE. Cuatro micro-prácticas con prompts listos para usar, análisis y criterios de evaluación.
          </p>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-muted mb-4">Cuatro micro-prácticas del modo Taller</p>
          <div className="grid gap-4">
            {materiales.map(m => (
              <Link
                key={m.slug}
                href={`/ia/talleres/clm/materiales/${m.slug}`}
                className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-xs font-mono text-muted shrink-0 mt-1">{m.num}</span>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold group-hover:text-accent mb-1">{m.titulo}</h2>
                    <p className="text-muted text-sm mb-3">{m.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {m.tags.map(t => (
                        <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-muted group-hover:text-accent shrink-0">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link href="/ia/talleres/clm" className="text-sm text-muted hover:text-accent transition-colors">
          ← Volver al taller
        </Link>

      </div>
    </div>
  );
}
