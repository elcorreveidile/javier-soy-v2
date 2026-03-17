import Link from 'next/link';

export default function PromptsTallerPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2 flex items-center gap-2 text-sm text-muted flex-wrap">
          <Link href="/ia/talleres/clm/materiales" className="hover:text-accent">← Materiales</Link>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Micro-práctica 01</p>
          <h1 className="text-4xl font-bold mb-3">Diapositivas con intención</h1>
          <p className="text-lg text-muted">
            Prompt para generar presentaciones ELE con objetivo comunicativo real. Ideal para Z.ai.
          </p>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Prompt</h2>
          <pre className="bg-bg border border-border rounded-xl p-5 text-sm text-fg font-mono whitespace-pre-wrap leading-relaxed">{`Quiero que actúes como DISEÑADOR DE DIAPOSITIVAS para un taller de ELE.

Tema: "La ciudad como aula: Granada en B1".
Objetivo: crear 8 diapositivas (título + bullets) para una clase de 60 minutos.

Condiciones:
- Una idea por diapositiva.
- Cada slide incluye: (a) objetivo comunicativo, (b) 2-3 frases modelo, (c) una micro-tarea oral.
- Evita actividades "de libro". Todo debe sonar a calle, a vida real.
- Registro: español peninsular, con guiños a Granada sin folclorismo.

Salida:
1) Índice de las 8 diapositivas.
2) Contenido de cada diapositiva.
3) Al final, una diapositiva de evaluación (rúbrica simple: fluidez, adecuación, interacción).`}</pre>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-7 mb-6">
          <h2 className="text-lg font-semibold mb-3">Resultado</h2>
          <p className="text-muted text-sm mb-3">
            Presentación interactiva con 8 diapositivas: <strong className="text-fg">La ciudad como aula · Granada en B1</strong>
          </p>
          <a
            href="https://www.javier.soy/ia/talleres/clm/materiales/prompts-taller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
          >
            Ver presentación interactiva →
          </a>
        </div>

        <div className="flex items-center justify-between">
          <Link href="/ia/talleres/clm/materiales" className="text-sm text-muted hover:text-accent transition-colors">
            ← Volver a Materiales
          </Link>
          <Link href="/ia/talleres/clm/materiales/personalizar-curso" className="text-sm text-accent hover:underline">
            Siguiente: Personalizar un mini-curso →
          </Link>
        </div>

      </div>
    </div>
  );
}
