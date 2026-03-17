import Link from 'next/link';

const checklist = [
  { n: 1, pregunta: '¿La IA soluciona un problema pedagógico real o solo la uso por novedad?', nota: 'Evalúa si la tecnología responde a una necesidad didáctica concreta o si es una implementación superficial.' },
  { n: 2, pregunta: '¿Es el registro lingüístico y la dificultad realmente adecuados al nivel de mis alumnos?', nota: 'Verifica que el contenido producido sea accesible y desafiante sin ser frustrante.' },
  { n: 3, pregunta: '¿El contenido perpetúa estereotipos culturales o sesgos de género y clase?', nota: 'Revisa representaciones de personajes, roles y situaciones para detectar prejuicios involuntarios.' },
  { n: 4, pregunta: '¿He introducido datos personales de mis alumnos o de la institución en el chat?', nota: 'Nunca compartas información sensible que pueda identificar a individuos sin consentimiento explícito.' },
  { n: 5, pregunta: '¿He verificado la veracidad de los datos y hechos que la IA ha generado?', nota: 'Las IA pueden "alucinar". Siempre comprueba cifras, fechas, nombres y hechos verificables.' },
  { n: 6, pregunta: '¿Puede el estudiante resolver la tarea simplemente copiando la respuesta de la IA?', nota: 'Si la respuesta directa es suficiente, la tarea no está bien diseñada. Añade matices, contexto y producción.' },
  { n: 7, pregunta: '¿Aporto yo un valor añadido (selección, contexto, creatividad) o es texto "crudo"?', nota: 'Tu criterio es clave: filtra, adapta y mejora el resultado. No se entregue sin revisión crítica.' },
  { n: 8, pregunta: '¿El formato y la estructura del material son accesibles para todos los estudiantes?', nota: 'Cuidado con textos excesivamente largos o falta de apoyos visuales para estudiantes con necesidades específicas.' },
  { n: 9, pregunta: '¿Evito hacer pasar el contenido generado por IA como creación 100% propia sin matices?', nota: 'La transparencia sobre el uso de IA es ética y pedagógica.' },
  { n: 10, pregunta: '¿He dedicado tiempo suficiente a la revisión humana final para corregir "alucinaciones"?', nota: 'La revisión no es opcional: errores factuales, tono inadecuado o inconsistencias deben corregirse.' },
];

export default function ChecklistEticaPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2">
          <Link href="/ia/talleres/clm/materiales" className="text-sm text-muted hover:text-accent transition-colors">← Materiales</Link>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Micro-práctica 04</p>
          <h1 className="text-4xl font-bold mb-3">Checklist rápido</h1>
          <p className="text-lg text-muted">Ética y sentido. 10 preguntas para no usar IA como atajo ciego.</p>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Prompt usado</h2>
          <pre className="bg-bg border border-border rounded-xl p-5 text-sm text-fg font-mono whitespace-pre-wrap leading-relaxed">{`Checklist de uso responsable (docentes ELE).

Dame 10 preguntas cortas que debería hacerme antes de usar IA en un material o en una tarea.

Condiciones:
- Deben tocar: sesgo, privacidad, plagio, nivel, finalidad, evaluación, accesibilidad.
- Tono: directo, sin moralina.

Formato: lista numerada.`}</pre>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-lg font-semibold mb-5">Resultado</h2>
          <div className="space-y-4">
            {checklist.map(item => (
              <div key={item.n} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-bold">
                  {item.n}
                </span>
                <div>
                  <p className="text-fg font-medium text-sm">{item.pregunta}</p>
                  <p className="text-muted text-xs mt-1">{item.nota}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-bg border border-border rounded-xl p-5 mb-8 text-sm text-muted">
          <strong className="text-fg">Nota:</strong> Este checklist no es un censorio, sino una guía para un uso consciente de la IA. La tecnología puede potenciar tu práctica docente si se integra con criterio, contexto y supervisión humana.
        </div>

        <Link href="/ia/talleres/clm/materiales" className="text-sm text-muted hover:text-accent transition-colors">
          ← Volver a Materiales
        </Link>

      </div>
    </div>
  );
}
