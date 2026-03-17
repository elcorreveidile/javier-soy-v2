import Link from 'next/link';

export default function CirugiaPromptPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2">
          <Link href="/ia/talleres/clm/materiales" className="text-sm text-muted hover:text-accent transition-colors">← Materiales</Link>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Micro-práctica 03</p>
          <h1 className="text-4xl font-bold mb-3">Cirugía de prompt</h1>
          <p className="text-lg text-muted">Debugging docente: detectar vaguedad, objetivos falsos y ejercicios sin vida.</p>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-3">Prompt malo (genérico)</h2>
          <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-4 text-sm text-muted font-mono">
            "Créame actividades para practicar el pretérito perfecto en nivel B1".
          </div>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Prompt de diagnóstico</h2>
          <pre className="bg-bg border border-border rounded-xl p-5 text-sm text-fg font-mono whitespace-pre-wrap leading-relaxed">{`Prompt malo (genérico):
"Créame actividades para practicar el pretérito perfecto en nivel B1".

Tu tarea:
1) Explica por qué es malo en 4 líneas.
2) Reescríbelo en una versión EXCELENTE, con: contexto (Granada), objetivo comunicativo,
   restricciones (tiempo, nº de actividades), producto final.
3) Propón 2 criterios para evaluar si lo que salga es bueno o es "relleno".`}</pre>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-lg font-semibold mb-4">Diagnóstico: ¿Por qué es malo el prompt original?</h2>
          <p className="text-muted text-sm leading-relaxed">
            El prompt es deficiente porque se centra en la forma gramatical ("practicar pretérito perfecto") en lugar de en el uso comunicativo, lo que casi seguro generará ejercicios mecánicos tipo "rellena huecos" carentes de sentido. Al no especificar el contexto ni el perfil del alumno, invita a actividades genéricas que podrían usarse en cualquier ciudad del mundo, desperdiciando el potencial de inmersión en Granada. Carece de un objetivo funcional claro y de un producto final tangible.
          </p>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Prompt excelente (versión reescrita)</h2>
          <pre className="bg-bg border border-border rounded-xl p-5 text-sm text-fg font-mono whitespace-pre-wrap leading-relaxed">{`Actúa como experto en didáctica del ELE y diseño de tareas. Diseña una secuencia de
3 actividades para una clase de 60 minutos dirigida a un grupo B1 de estudiantes
universitarios que llevan 1 semana viviendo en Granada.

Objetivo Comunicativo: Los estudiantes deben utilizar el Pretérito Perfecto para
compartir sus primeras impresiones y experiencias recientes en la ciudad (ocio,
clima, comida, transporte) con el fin de establecer lazos sociales.

Contexto: Los estudiantes están en la cafetería de la facultad y conocen a
estudiantes locales.

Restricciones:
- No incluyas ejercicios de gramática descontextualizada (ni rellenar espacios,
  ni transformar oraciones).
- Las actividades deben ser progresivas (de foco en forma a foco en significado).
- Incluye una fase de atención a la forma (noticing) breve (máx. 10 min).

Producto Final: Los estudiantes deben grabar un audio de WhatsApp (máx. 45 seg)
contándole a un amigo lo que "han hecho esta semana en Granada".`}</pre>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-8">
          <h2 className="text-lg font-semibold mb-4">2 criterios de calidad</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-accent mb-1">Criterio 1: Localización y vitalidad</h3>
              <p className="text-sm text-muted mb-2"><strong className="text-green-400">Es bueno:</strong> Las actividades mencionan lugares reales (el Albaicín, la Plaza Nueva), hacen referencia a experiencias típicas de estudiantes y utilizan léxico local.</p>
              <p className="text-sm text-muted"><strong className="text-red-400">Es relleno:</strong> Usa ejemplos genéricos como "Ana ha comido una manzana", intercambiables por cualquier ciudad del mundo.</p>
            </div>
            <div>
              <h3 className="font-medium text-accent mb-1">Criterio 2: Enfoque accional vs. ejercicio</h3>
              <p className="text-sm text-muted mb-2"><strong className="text-green-400">Es bueno:</strong> Las actividades exigen que el estudiante negocie el significado o resuelva un problema real. El error gramatical es secundario mientras el mensaje se entienda.</p>
              <p className="text-sm text-muted"><strong className="text-red-400">Es relleno:</strong> Las actividades exigen repetición memorística ("Escribe 5 frases con HE HAS HA"). No hay interacción real.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/ia/talleres/clm/materiales" className="text-sm text-muted hover:text-accent transition-colors">
            ← Volver a Materiales
          </Link>
          <Link href="/ia/talleres/clm/materiales/checklist-etica" className="text-sm text-accent hover:underline">
            Siguiente: Checklist ético →
          </Link>
        </div>

      </div>
    </div>
  );
}
