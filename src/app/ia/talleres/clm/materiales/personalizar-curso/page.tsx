import Link from 'next/link';

const sesiones = [
  { n: 'S1', tema: '¡Llegué a Granada!', objetivo: 'Desplazarse y pedir información básica', producto: 'Ruta oral personalizada (mapa)', tarea: 'Audio 1 min: cómo llegar a la facultad' },
  { n: 'S2', tema: 'La supervivencia diaria', objetivo: 'Comprar y gestionar horarios comerciales', producto: 'Lista de compra inteligente (comparativa)', tarea: 'Fotos de 3 productos típicos y sus nombres en andaluz' },
  { n: 'S3', tema: 'Busco piso...', objetivo: 'Describir espacios y negociar condiciones', producto: 'Anuncio de vivienda ideal', tarea: 'Buscar piso real en Idealista y traerlo a clase' },
  { n: 'S4', tema: 'Trámites y papeleo', objetivo: 'Rellenar formularios y entender instrucciones', producto: 'Formulario de quejas al Ayuntamiento', tarea: 'Momento Cultural 1' },
];

export default function PersonalizarCursoPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2">
          <Link href="/ia/talleres/clm/materiales" className="text-sm text-muted hover:text-accent transition-colors">← Materiales</Link>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Micro-práctica 02</p>
          <h1 className="text-4xl font-bold mb-3">Personalizar un mini-curso</h1>
          <p className="text-lg text-muted">De actividades sueltas a un sistema de curso real para un grupo concreto en 10 minutos.</p>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Prompt usado</h2>
          <pre className="bg-bg border border-border rounded-xl p-5 text-sm text-fg font-mono whitespace-pre-wrap leading-relaxed">{`Actúa como CLÍNICA DOCENTE (ELE) y ayúdame a PERSONALIZAR un mini-curso para un grupo real.

Datos del grupo:
- Nivel: B1
- Duración: 4 semanas (8 sesiones)
- Perfil: estudiantes universitarios internacionales, muy heterogéneos
- Necesidad real: moverse por Granada, vivienda, trámites, vida social, universidad

Tarea:
- Diseña una secuencia de 8 sesiones con: tema, objetivo, producto final,
  tareas en clase, tarea fuera.
- Incluye variantes: opción A (grupo más fuerte) / opción B (grupo más débil).
- Incluye 3 "momentos culturales" que generen conversación crítica.
- No generes fichas: genera ESTRUCTURA y decisiones pedagógicas.

Formato: tabla clara.`}</pre>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-lg font-semibold mb-2">Decisiones pedagógicas previas</h2>
          <div className="space-y-2 text-sm text-muted mb-5">
            <p><strong className="text-fg">Enfoque:</strong> Comunicativo y accional. Todo debe desembocar en una acción tangible.</p>
            <p><strong className="text-fg">Opción A (más fuerte):</strong> Mayor precisión léxica, conectores discursivos y espontaneidad. Se retira el andamiaje rápidamente.</p>
            <p><strong className="text-fg">Opción B (más débil):</strong> Marcadores discursivos y frases prefabricadas (chunks). Se fomenta la interacción pero se permite la planificación previa.</p>
          </div>

          <h2 className="text-lg font-semibold mb-3">Secuencia (4 primeras sesiones)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="pb-2 pr-3 text-muted font-medium">Ses.</th>
                  <th className="pb-2 pr-3 text-muted font-medium">Tema</th>
                  <th className="pb-2 pr-3 text-muted font-medium">Objetivo</th>
                  <th className="pb-2 pr-3 text-muted font-medium">Producto</th>
                  <th className="pb-2 text-muted font-medium">Tarea fuera</th>
                </tr>
              </thead>
              <tbody>
                {sesiones.map(s => (
                  <tr key={s.n} className="border-b border-border/50">
                    <td className="py-3 pr-3 font-mono text-accent text-xs">{s.n}</td>
                    <td className="py-3 pr-3 text-fg font-medium">{s.tema}</td>
                    <td className="py-3 pr-3 text-muted">{s.objetivo}</td>
                    <td className="py-3 pr-3 text-muted">{s.producto}</td>
                    <td className="py-3 text-muted text-xs">{s.tarea}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted mt-3">Secuencia completa de 8 sesiones disponible en la versión original del taller.</p>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/ia/talleres/clm/materiales" className="text-sm text-muted hover:text-accent transition-colors">
            ← Volver a Materiales
          </Link>
          <Link href="/ia/talleres/clm/materiales/cirugia-prompt" className="text-sm text-accent hover:underline">
            Siguiente: Cirugía de prompt →
          </Link>
        </div>

      </div>
    </div>
  );
}
