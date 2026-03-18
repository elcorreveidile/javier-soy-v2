'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { useState } from 'react';

type Letra = {
  l: string;
  t: string;
  q: string;
  btn1Label?: string;
  btn1Title?: string;
  btn1?: string;
  btn2Label?: string;
  btn2Title?: string;
  btn2?: string;
  bad?: string;
  badTitle?: string;
  good?: string;
  goodTitle?: string;
};

const data: Letra[] = [
  {l:'A', t:'Algoritmo · Anthropic', q:'La IA no piensa: ejecuta algoritmos con apariencia de pensamiento.',
    btn1Label:'Agotamiento', btn1Title:'A · Agotamiento algorítmico', btn1:`Cuando un modelo "optimiza" demasiado lo probable, tiende a:\n- repetir fórmulas\n- aplanar estilo\n- volverse predecible\n\nEn aula: si lo dejas "solo", te llena de plantillas.\nTu filtro: contexto real + objetivo comunicativo + producto final.`,
    btn2Label:'Competencia', btn2Title:'A · Anthropic frente a GPT', btn2:`Idea clave:\n- Competencia no es "quién escribe más bonito".\n- Es: control, seguridad, consistencia, herramientas y coste.\n\nEn docencia: si una IA te da salidas más consistentes con tus reglas (nivel, registro, restricciones), te ahorra revisión.\n(Comparar siempre con una tarea idéntica y tu rúbrica.)`},

  {l:'B', t:'Bias (sesgo)', q:'La IA no es neutral: reproduce los prejuicios de los textos que ha leído.',
    btn1Label:'Trampa', btn1Title:'B · Sesgo (donde te la juega)', btn1:`El sesgo aparece sobre todo en:\n- personajes (género, clase, origen)\n- "situaciones típicas" (clichés culturales)\n- roles profesionales\n\nEn ELE: el material puede reforzar estereotipos sin que te enteres.\nSolución: pedir 3 perspectivas + revisar representación.`,
    btn2Label:'Uso crítico', btn2Title:'B · Convertir sesgo en tarea', btn2:`Actividad relámpago (C1):\n1) Pide 3 descripciones de la misma persona desde puntos de vista distintos.\n2) Subraya estereotipos y "marcadores" (léxico, adjetivos, presuposiciones).\n3) Reescritura + debate: "¿qué cambia si cambio el narrador?"`},

  {l:'C', t:'Corpus', q:'La IA escribe bien porque ha leído mucho, no porque entienda.',
    btn1Label:'Cliché', btn1Title:'C · Corpus sin vida', btn1:`Si pides "un texto sobre X", el corpus tira de:\n- turismo\n- tópicos\n- frases prefabricadas\n\nResultado: texto intercambiable.\nEn clase: mata el interés y la conversación.`,
    btn2Label:'Lengua viva', btn2Title:'C · Corpus como mina', btn2:`B1/B2:\nPrompt: "Dame 8 microtextos tipo WhatsApp sobre problemas reales de piso en Granada (fianza, humedad, ruido). Incluye intención (queja/pedir ayuda/negociar) y registro."\n\nLuego: ordenar por cortesía + role-play.`},

  {l:'D', t:'Datos', q:'Lo que no está en los datos, para la IA no existe.',
    btn1Label:'Alucinación', btn1Title:'D · El peligro del dato inventado', btn1:`En trámites locales, horarios, teléfonos, precios, "lo de hoy"…\nla IA puede inventar con tranquilidad.\n\nRegla: si es verificable, se verifica. Si no, se formula como hipótesis.`,
    btn2Label:'Verificación', btn2Title:'D · IA como guía para comprobar', btn2:`Prompt útil:\n"Si no estás segura, dilo. Dime cómo verificarlo: qué web, qué palabras clave, qué oficina. Luego crea 5 frases para llamar y confirmar."\n\nEsto sí enseña competencia real.`},

  {l:'E', t:'Evaluación', q:'La IA puede corregir, pero no puede juzgar.',
    btn1Label:'Límite', btn1Title:'E · Lo que NO delego', btn1:`No delegues:\n- la nota\n- la intención comunicativa\n- la adecuación al grupo real\n\nPorque eso depende de contexto, objetivos y relación con el alumno.`,
    btn2Label:'Atajo bueno', btn2Title:'E · Feedback formativo rápido', btn2:`Prompt:\n"Da feedback formativo (no nota) sobre cohesión, adecuación de registro y errores recurrentes. Termina con 3 objetivos de mejora y una mini-tarea para la próxima versión."\n\nIA = sugerencias. Profesor = decisión.`},

  {l:'F', t:'Fine-tuning', q:'Personalizar la IA es enseñarle tu manera de enseñar.',
    btn1Label:'Falso tuning', btn1Title:'F · Personalizar sin tocar el modelo', btn1:`No hace falta "entrenar" de verdad.\nBasta con:\n- 2 tareas modelo tuyas\n- tu rúbrica\n- tus restricciones\n\nEso fuerza consistencia metodológica.`,
    btn2Label:'Plantilla', btn2Title:'F · Prompt de consistencia CLM', btn2:`"Aquí tienes 2 tareas modelo + mi rúbrica. Crea una tercera tarea NUEVA que respete exactamente: contexto real, producto final, interacción y criterios evaluables. No generes fichas: estructura y decisiones."`},

  {l:'G', t:'Gemini · GitHub', q:'La IA se integra en los sistemas; GitHub nos recuerda que enseñar también es construir y compartir conocimiento.',
    btn1Label:'Sistema', btn1Title:'G · IA integrada (lo invisible)', btn1:`La IA se está metiendo en:\n- correo, docs, búsqueda\n- plataformas educativas\n- herramientas de presentación\n\nRiesgo: usarla sin criterio porque "ya viene".`,
    btn2Label:'Control', btn2Title:'G · GitHub como memoria docente', btn2:`Idea:\n- Guardar "plantilla de sesión" + rúbricas + prompts como repo.\n- Versionar por grupos/años.\n\nResultado: reproducibilidad, coherencia y mejora continua (como equipo).`},

  {l:'H', t:'Hallucinations', q:'La IA se equivoca con seguridad absoluta.',
    btn1Label:'Síntoma', btn1Title:'H · Señales de alucinación', btn1:`Ojo cuando:\n- cita datos exactos sin fuente\n- suena demasiado redondo\n- "rellena" huecos sin admitir duda\n\nEn clase: enseña a detectar seguridad falsa.`,
    btn2Label:'Antídoto', btn2Title:'H · Prompt antialucinación', btn2:`"Responde en 2 capas: (1) alta confianza, (2) dudoso. Si es dudoso, di cómo verificarlo. No inventes."`},

  {l:'I', t:'Inteligencia', q:'La llamada "inteligencia artificial" es estadística muy sofisticada.',
    btn1Label:'Mito', btn1Title:'I · Lo que la IA no hace', btn1:`No "entiende", no "quiere", no "interpreta intenciones".\nPredice texto probable.\n\nSi le pides psicología del alumno, te inventa una película.`,
    btn2Label:'Uso real', btn2Title:'I · Lo que sí hace bien', btn2:`Describir opciones lingüísticas:\n- alternativas de conectores\n- matices pragmáticos\n- reformulaciones por registro\n\nSiempre con ejemplos y contexto.`},

  {l:'J', t:'Juicio', q:'El juicio crítico sigue siendo exclusivamente humano.',
    btn1Label:'No delegar', btn1Title:'J · La decisión es tuya', btn1:`La IA puede proponer.\nTú decides por:\n- energía del grupo\n- objetivos del curso\n- momento de la secuencia\n- historia del aula\n\nEso no está en el prompt.`,
    btn2Label:'Criterios', btn2Title:'J · Pedir criterios, no veredictos', btn2:`Prompt:\n"Propón 3 secuencias y explica pros/contras para: grupo cansado, activo y tímido. No elijas: dame criterios para elegir yo."`},

  {l:'K', t:'Know-how', q:'Saber usar IA no es saber enseñar con IA.',
    btn1Label:'Señal', btn1Title:'K · Señal de "promptismo"', btn1:`Si la actividad no responde:\n- qué objetivo comunicativo\n- qué producto final\n- cómo evalúo\n\n… entonces es decoración, no enseñanza.`,
    btn2Label:'Conversión', btn2Title:'K · Convertir "divertido" en aprendizaje', btn2:`Prompt:\n"Diseña una actividad breve 'divertida', pero con objetivo comunicativo claro, producto final y criterio observable de éxito."`},

  {l:'L', t:'Lengua viva', q:'La IA domina el uso, pero no la intención.',
    btn1Label:'Lista muerta', btn1Title:'L · Frases sin situación', btn1:`Listas de frases = lengua sin vida.\nNo hay intención, fricción, relación.\n\nEn ELE, eso no se transfiere al uso real.`,
    btn2Label:'Role-play', btn2Title:'L · Registro + situación', btn2:`Prompt:\n"Dame 6 formas de pedir en un bar ordenadas por cortesía + una situación para cada una (prisa, confianza, queja, malentendido)."`},

  {l:'M', t:'Modelo', q:'Los modelos cambian; el criterio docente no.',
    btn1Label:'Volatilidad', btn1Title:'M · Hoy sirve, mañana cambia', btn1:`Lo que hoy "funciona" puede cambiar por:\n- versión del modelo\n- parámetros\n- políticas\n\nPor eso tu método no puede depender de una herramienta.`,
    btn2Label:'Comparar', btn2Title:'M · Test A/B rápido', btn2:`Ejercicio:\n- Misma consigna en 2 IAs.\n- Comparar: nivel, clichés, errores, tono.\n- Elegir por coherencia con tu rúbrica.`},

  {l:'N', t:'Nivel', q:'La IA no entiende el MCER: lo imita.',
    btn1Label:'Genérico', btn1Title:'N · "B1" sin alumnos', btn1:`Sin muestras reales del grupo, la IA produce un B1 estándar.\nPuede ser:\n- demasiado fácil\n- o demasiado "académico".`,
    btn2Label:'Ajuste fino', btn2Title:'N · B1 real con evidencias', btn2:`Prompt:\n"Aquí tienes 2 textos reales de mi grupo. Adapta la tarea al nivel de ESTE grupo: vocabulario, longitud, apoyos, ritmo."`},

  {l:'O', t:'OpenAI', q:'Cuando todos pueden generar contenido, el valor está en saber elegir.',
    btn1Label:'Inflación', btn1Title:'O · Mucho no es mejor', btn1:`La IA te puede dar 50 variantes.\nEso no es productividad: es ruido.\n\nEl valor está en seleccionar y ajustar con criterio.`,
    btn2Label:'Editor', btn2Title:'O · Profesor como curador', btn2:`Prompt:\n"Genera 10 opciones y selecciona 3 justificando por qué sirven para este grupo y este objetivo. Señala riesgos de cliché."`},

  {l:'P', t:'Prompt', q:'Un buen prompt no sustituye a un buen método.',
    btn1Label:'Error típico', btn1Title:'P · El prompt como varita mágica', btn1:`Si el método no existe, el prompt solo acelera el caos.\nEl prompt no crea objetivos: los traduce.`,
    btn2Label:'Plantilla', btn2Title:'P · Prompt con método', btn2:`Contexto + objetivo + producto + restricciones + evaluación.\nPide estructura y decisiones, no "fichas".`},

  {l:'Q', t:'Quality control', q:'La IA produce mucho; el profesor decide qué vale.',
    btn1Label:'Riesgo', btn1Title:'Q · Señales de relleno', btn1:`Relleno cuando:\n- repite fórmulas\n- propone "debate" sin preguntas\n- pone ejercicios sin producto\n\nRegla: si no se evalúa, sobra.`,
    btn2Label:'Filtro', btn2Title:'Q · Prompt de control de calidad', btn2:`"Propón 6 actividades y marca con ⚠️ las que sean cliché/relleno. Explica cómo convertir una mala en buena."`},

  {l:'R', t:'Rol docente', q:'El profesor ya no es transmisor: es diseñador de experiencias.',
    btn1Label:'Antes', btn1Title:'R · Aula manual', btn1:`Explicar reglas no crea uso.\nSin escena, sin necesidad comunicativa, la gramática no se activa.`,
    btn2Label:'Ahora', btn2Title:'R · Diseñar escena', btn2:`Prompt:\n"Diseña una situación real en Granada donde NECESITEN el indefinido. Incluye: objetivo, roles, fricción, producto final y evaluación."`},

  {l:'S', t:'Sistema · Slop', q:'El slop es contaminación: contenido basura generado en masa. No seas quien lo produce; sé quien genera valor humano.',
    badTitle:'S · Slop', bad:`Ejemplo de SLOP (baja calidad):\n\n"Crea 10 actividades divertidas para practicar el pasado en nivel B1."\n\nProblemas:\n- No hay contexto real.\n- No hay objetivo comunicativo.\n- No hay producto final.\n- Genera ejercicios intercambiables y olvidables.`,
    goodTitle:'S · Valor', good:`Ejemplo con VALOR HUMANO:\n\n"Diseña una secuencia de 2 actividades para un grupo B1 en Granada que acaba de llegar a la ciudad.\nObjetivo: contar experiencias recientes para integrarse socialmente.\nCondiciones:\n- Situación real (primeros días en la ciudad).\n- Producto final: breve relato oral compartido en grupo.\n- Incluye criterios claros de evaluación (fluidez, adecuación, interacción)."`},

  {l:'T', t:'Token', q:'La IA no ve palabras: ve fragmentos.',
    btn1Label:'Por qué falla', btn1Title:'T · Token ≠ palabra', btn1:`Por eso:\n- se pasa del límite\n- cambia el recuento\n- "no clava" números\n\nNo es mala fe: es la unidad de cálculo.`,
    btn2Label:'Solución', btn2Title:'T · Control práctico', btn2:`Prompt:\n"Escribe máx. 110 palabras. Luego añade un recuento aproximado y sugiere qué recortar si me paso."`},

  {l:'U', t:'Uso responsable', q:'Prohibir la IA es renunciar a educar en su uso.',
    btn1Label:'Peligro', btn1Title:'U · Suplantación', btn1:`Si el alumno entrega "tal cual", no aprende.\nY tú pierdes evaluación real.\n\nLa norma de aula debe ser explícita.`,
    btn2Label:'Acuerdo', btn2Title:'U · Reglas claras', btn2:`Prompt:\n"Genera 10 reglas (permitido/prohibido) y 3 ejemplos de uso correcto vs incorrecto, con consecuencias pedagógicas."`},

  {l:'V', t:'Velocidad', q:'La IA ahorra tiempo solo si sabes para qué usarlo.',
    btn1Label:'Trampa', btn1Title:'V · Producir por producir', btn1:`La velocidad puede usarse para:\n- más PDFs\n- más ejercicios\n- más ruido\n\nEso no mejora el aula.`,
    btn2Label:'Palanca', btn2Title:'V · Ganar tiempo humano', btn2:`Usa la IA para generar variantes.\nUsa tu tiempo en:\n- feedback individual\n- conversación real\n- seguimiento\n\nLa velocidad debe humanizar.`},

  {l:'W', t:'Web', q:'Un curso vivo no cabe en un PDF.',
    btn1Label:'Documento muerto', btn1Title:'W · El PDF no respira', btn1:`El PDF fija el curso.\nPero el grupo cambia cada semana.\n\nLa web permite iterar y personalizar.`,
    btn2Label:'Entorno', btn2Title:'W · Página del grupo', btn2:`Estructura:\n- objetivos\n- calendario\n- tareas\n- rúbricas\n- recursos\n- "lo de hoy"\n\nEditable por sesión: curso vivo.`},

  {l:'X', t:'Xenial / Extraño', q:'La creatividad de la IA empieza donde el profesor se atreve a experimentar.',
    btn1Label:'Genérico', btn1Title:'X · "Creativo" sin foco', btn1:`Si pides "ideas creativas", salen listas blandas.\nLa creatividad útil necesita fricción y objetivo.`,
    btn2Label:'Provocar', btn2Title:'X · Ideas raras pero viables', btn2:`Prompt:\n"Dame 5 ideas raras pero viables para provocar interacción oral en B2 sobre vivienda y convivencia. Cada idea con objetivo y producto final."`},

  {l:'Y', t:'You (el profesor)', q:'Sin profesor, la IA no enseña nada.',
    btn1Label:'Lo que falta', btn1Title:'Y · La IA no gestiona el aula', btn1:`No hace:\n- mirada\n- ritmo\n- escucha\n- humor\n- contención\n\nEl aula es relación.`,
    btn2Label:'Intervenciones', btn2Title:'Y · Frases del profesor', btn2:`Prompt:\n"Dame 6 intervenciones del profesor para sostener interacción (reformular, ampliar, devolver pregunta, ritmo) con frases modelo."`},

  {l:'Z', t:'Z.ai', q:'Las herramientas se multiplican; el pensamiento pedagógico no se delega.',
    btn1Label:'Tentación', btn1Title:'Z · Diapositivas bonitas', btn1:`Si la herramienta manda, la clase se vuelve diseño.\nBonito ≠ útil.\n\nPrimero método, luego slides.`,
    btn2Label:'Taller', btn2Title:'Z · Slides con intención', btn2:`Prompt:\n"Convierte esta secuencia en 8 diapositivas. Cada una: objetivo comunicativo, 2 frases modelo, micro-tarea oral y criterio de éxito."`},
];

type ModalState = { title: string; body: string } | null;

export default function AZPage() {
  const [started, setStarted] = useState(false);
  const [mode, setMode] = useState<'deck' | 'workshop'>('deck');
  const [selected, setSelected] = useState(0);
  const [modal, setModal] = useState<ModalState>(null);
  const [copied, setCopied] = useState<number | null>(null);

  const item = data[selected];
  const isSlop = item.l === 'S';

  function openModal(title: string, body: string) {
    setModal({ title, body });
  }

  function copyText(text: string, idx: number) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(idx);
      setTimeout(() => setCopied(null), 1500);
    });
  }

  const prompts = [
    `Quiero que actúes como DISEÑADOR DE DIAPOSITIVAS para un taller de ELE.\nTema: "La ciudad como aula: Granada en B1".\nObjetivo: crear 8 diapositivas (título + bullets) para una clase de 60 minutos.\nCondiciones:\n- Una idea por diapositiva.\n- Cada slide incluye: (a) objetivo comunicativo, (b) 2-3 frases modelo, (c) una micro-tarea oral.\n- Evita actividades "de libro". Todo debe sonar a calle, a vida real.\n- Registro: español peninsular, con guiños a Granada sin folclorismo.\nSalida:\n1) Índice de las 8 diapositivas.\n2) Contenido de cada diapositiva.\n3) Al final, una diapositiva de evaluación (rúbrica simple: fluidez, adecuación, interacción).`,
    `Actúa como CLÍNICA DOCENTE (ELE) y ayúdame a PERSONALIZAR un mini-curso para un grupo real.\nDatos del grupo:\n- Nivel: B1\n- Duración: 4 semanas (8 sesiones)\n- Perfil: estudiantes universitarios internacionales, muy heterogéneos\n- Necesidad real: moverse por Granada, vivienda, trámites, vida social, universidad\nTarea:\n- Diseña una secuencia de 8 sesiones con: tema, objetivo, producto final, tareas en clase, tarea fuera.\n- Incluye variantes: opción A (grupo más fuerte) / opción B (grupo más débil).\n- Incluye 3 "momentos culturales" que generen conversación crítica.\n- No generes fichas: genera ESTRUCTURA y decisiones pedagógicas.\nFormato: tabla clara.`,
    `Vamos a hacer "cirugía de prompt".\nPrompt malo (genérico):\n"Créame actividades para practicar el pretérito perfecto en nivel B1".\n\nTu tarea:\n1) Explica por qué es malo en 4 líneas.\n2) Reescríbelo en una versión EXCELENTE, con: contexto (Granada), objetivo comunicativo, restricciones (tiempo, nº de actividades), producto final.\n3) Propón 2 criterios para evaluar si lo que salga es bueno o es "relleno".`,
    `Checklist de uso responsable (docentes ELE).\nDame 10 preguntas cortas que debería hacerme antes de usar IA en un material o en una tarea.\nCondiciones:\n- Deben tocar: sesgo, privacidad, plagio, nivel, finalidad, evaluación, accesibilidad.\n- Tono: directo, sin moralina.\nFormato: lista numerada.`,
  ];

  if (!started) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">CLM · Granada</p>
        <h1 className="text-5xl font-bold mb-4">La IA de la A a la Z</h1>
        <p className="text-muted mb-2">Javier Benítez Láinez</p>
        <p className="text-muted text-sm mb-10">26 conceptos clave para docentes ELE</p>
        <button
          onClick={() => setStarted(true)}
          className="px-8 py-3 bg-accent text-bg font-bold rounded-full text-lg hover:opacity-90 transition"
        >
          Entrar →
        </button>
        <Link href="/ia/talleres/clm" className="mt-6 text-sm text-muted hover:text-accent transition-colors">
          ← Volver al taller CLM
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <Link href="/ia/talleres/clm" className="text-sm text-muted hover:text-accent transition-colors">← Taller CLM</Link>
          <div className="flex gap-2">
            <button
              onClick={() => setMode('deck')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${mode === 'deck' ? 'bg-accent text-bg' : 'border border-border text-muted hover:border-accent'}`}
            >
              Presentación
            </button>
            <button
              onClick={() => setMode('workshop')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${mode === 'workshop' ? 'bg-accent text-bg' : 'border border-border text-muted hover:border-accent'}`}
            >
              Taller
            </button>
          </div>
        </div>

        {/* Letter nav */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {data.map((d, i) => (
            <button
              key={d.l}
              onClick={() => setSelected(i)}
              className={`w-9 h-9 rounded-lg text-sm font-bold transition ${
                selected === i
                  ? 'bg-accent text-bg'
                  : 'bg-panel border border-border text-muted hover:border-accent hover:text-fg'
              }`}
            >
              {d.l}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-6">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-6xl font-black text-accent/20 leading-none block">{item.l}</span>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted font-mono">{selected + 1} / {data.length}</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-3">{item.t}</h2>
          <blockquote className="text-lg text-muted italic border-l-4 border-accent pl-4 mb-8">
            "{item.q}"
          </blockquote>

          {/* Buttons */}
          {isSlop ? (
            <div className="grid sm:grid-cols-2 gap-3">
              <button
                onClick={() => openModal(item.badTitle!, item.bad!)}
                className="px-4 py-3 bg-red-950/30 border border-red-900/50 rounded-xl text-sm font-medium text-red-300 hover:border-red-700 transition text-left"
              >
                ⚠️ Ejemplo de slop
              </button>
              <button
                onClick={() => openModal(item.goodTitle!, item.good!)}
                className="px-4 py-3 bg-green-950/30 border border-green-900/50 rounded-xl text-sm font-medium text-green-300 hover:border-green-700 transition text-left"
              >
                ✅ Ejemplo con valor
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-3">
              {item.btn1 && (
                <button
                  onClick={() => openModal(item.btn1Title!, item.btn1!)}
                  className="px-4 py-3 bg-bg border border-border rounded-xl text-sm font-medium text-muted hover:border-accent hover:text-fg transition text-left"
                >
                  {item.btn1Label} →
                </button>
              )}
              {item.btn2 && (
                <button
                  onClick={() => openModal(item.btn2Title!, item.btn2!)}
                  className="px-4 py-3 bg-accent/10 border border-accent/30 rounded-xl text-sm font-medium text-accent hover:border-accent transition text-left"
                >
                  {item.btn2Label} →
                </button>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setSelected(s => Math.max(0, s - 1))}
            disabled={selected === 0}
            className="px-5 py-2 border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition disabled:opacity-30"
          >
            ← Anterior
          </button>
          <span className="text-xs text-muted font-mono">{item.l}</span>
          <button
            onClick={() => setSelected(s => Math.min(data.length - 1, s + 1))}
            disabled={selected === data.length - 1}
            className="px-5 py-2 border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition disabled:opacity-30"
          >
            Siguiente →
          </button>
        </div>

        {/* Workshop prompts */}
        {mode === 'workshop' && (
          <div className="bg-panel border border-accent/20 rounded-2xl p-6 mb-8">
            <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-4">Prompts del taller (copia y usa)</h3>
            <div className="space-y-3">
              {[
                { label: 'Micro-práctica 01 — Diapositivas con intención', idx: 0 },
                { label: 'Micro-práctica 02 — Personalizar un mini-curso', idx: 1 },
                { label: 'Micro-práctica 03 — Cirugía de prompt', idx: 2 },
                { label: 'Micro-práctica 04 — Checklist ético', idx: 3 },
              ].map(p => (
                <div key={p.idx} className="flex items-center justify-between gap-3 bg-bg border border-border rounded-xl p-3">
                  <span className="text-sm text-muted">{p.label}</span>
                  <button
                    onClick={() => copyText(prompts[p.idx], p.idx)}
                    className="shrink-0 px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent rounded-full text-xs font-medium hover:bg-accent/20 transition"
                  >
                    {copied === p.idx ? '✓ Copiado' : 'Copiar'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-panel border border-border rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-semibold text-fg">{modal.title}</h3>
              <button onClick={() => setModal(null)} className="text-muted hover:text-fg text-xl leading-none ml-4">×</button>
            </div>
            <pre className="text-sm text-muted whitespace-pre-wrap font-mono leading-relaxed">{modal.body}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
