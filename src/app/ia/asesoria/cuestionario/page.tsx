'use client';

export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { useState } from 'react';

const preguntas = [
  {
    seccion: '1️⃣ Tu perfil',
    desc: 'Ayúdame a entender tu contexto para darte recomendaciones personalizadas.',
    campos: [
      {
        id: 'sector',
        label: 'Sector profesional',
        tipo: 'radio',
        opciones: [
          { valor: 'docencia', label: '📚 Docencia / Educación', puntos: 3 },
          { valor: 'cultura', label: '🎭 Cultura (música, video, poesía, narrativa)', puntos: 2 },
          { valor: 'empresa', label: '🏢 Pequeña o mediana empresa', puntos: 2 },
          { valor: 'autonomo', label: '💼 Autónomo / Profesional independiente', puntos: 2 },
          { valor: 'otro', label: '🔧 Otro sector', puntos: 1 },
        ],
      },
      {
        id: 'experiencia',
        label: 'Experiencia con Inteligencia Artificial',
        tipo: 'radio',
        opciones: [
          { valor: 'ninguna', label: 'Nunca he usado', puntos: 0 },
          { valor: 'intermedio', label: 'Nivel intermedio', puntos: 2 },
          { valor: 'experto', label: 'Experto', puntos: 4 },
        ],
      },
    ],
  },
  {
    seccion: '2️⃣ Conocimientos técnicos de IA',
    desc: 'Evalúa tu nivel actual de conocimientos sobre herramientas y conceptos de IA.',
    campos: [
      {
        id: 'herramientas',
        label: '¿Qué herramientas de IA utilizas habitualmente?',
        tipo: 'radio',
        opciones: [
          { valor: 'ninguna', label: 'Ninguna / No estoy seguro', puntos: 0 },
          { valor: 'basicas', label: 'Herramientas básicas (ChatGPT, similares)', puntos: 1 },
          { valor: 'varias', label: 'Varias herramientas (texto, imagen, audio)', puntos: 2 },
          { valor: 'avanzadas', label: 'Herramientas avanzadas, APIs y automatizaciones', puntos: 4 },
        ],
      },
      {
        id: 'prompts',
        label: '¿Cómo evalúas tus conocimientos sobre prompts?',
        tipo: 'radio',
        opciones: [
          { valor: 'desconoce', label: 'No sé qué es un prompt', puntos: 0 },
          { valor: 'basico', label: 'Nivel básico — uso frases sencillas', puntos: 1 },
          { valor: 'intermedio', label: 'Nivel intermedio — estructuro instrucciones', puntos: 2 },
          { valor: 'experto', label: 'Experto en prompting', puntos: 4 },
        ],
      },
      {
        id: 'riesgos',
        label: '¿Conoces los riesgos y limitaciones de la IA?',
        tipo: 'radio',
        opciones: [
          { valor: 'no', label: 'No / No lo había considerado', puntos: 0 },
          { valor: 'algo', label: 'Tengo cierta conciencia (alucinaciones, sesgos)', puntos: 1 },
          { valor: 'bastante', label: 'Conozco los riesgos principales', puntos: 2 },
          { valor: 'mucho', label: 'Tengo formación en IA ética', puntos: 4 },
        ],
      },
    ],
  },
  {
    seccion: '3️⃣ Integración en tu práctica',
    desc: '¿Cómo utilizas o te gustaría utilizar la IA en tu actividad profesional?',
    campos: [
      {
        id: 'integracion',
        label: '¿Qué nivel de integración tienes actualmente?',
        tipo: 'radio',
        opciones: [
          { valor: 'ninguna', label: 'Sin integración — no utilizo IA en mi trabajo', puntos: 0 },
          { valor: 'inicial', label: 'Exploración inicial — he probado algo', puntos: 1 },
          { valor: 'ocasional', label: 'Uso ocasional para tareas específicas', puntos: 2 },
          { valor: 'sistematica', label: 'Integración sistemática — parte de mi flujo habitual', puntos: 4 },
        ],
      },
      {
        id: 'reto',
        label: '¿Cuál es tu principal reto con la IA?',
        tipo: 'textarea',
      },
    ],
  },
  {
    seccion: '4️⃣ Tus objetivos',
    desc: '¿Qué esperas lograr con la integración de IA en tu práctica?',
    campos: [
      {
        id: 'objetivo',
        label: '¿Qué te gustaría lograr en los próximos 3 meses?',
        tipo: 'radio',
        opciones: [
          { valor: 'formacion', label: '📚 Formación básica — aprender a usar herramientas de IA', puntos: 0 },
          { valor: 'integracion', label: '🔧 Integración práctica — implementar IA en mi trabajo diario', puntos: 2 },
          { valor: 'optimizacion', label: '⚡ Optimización — mejorar el uso que ya hago de la IA', puntos: 3 },
          { valor: 'proyecto', label: '🎯 Proyecto específico — desarrollar una implementación concreta', puntos: 4 },
        ],
      },
      {
        id: 'proyecto_desc',
        label: '¿Tienes algún proyecto o iniciativa específica en mente? (opcional)',
        tipo: 'textarea',
      },
    ],
  },
];

type Perfil = {
  nombre: string;
  desc: string;
  servicio: string;
  precio: string;
  pasos: string;
};

function calcularPerfil(respuestas: Record<string, string>): Perfil {
  const puntosMap: Record<string, number> = {};
  for (const seccion of preguntas) {
    for (const campo of seccion.campos) {
      if (campo.tipo === 'radio' && campo.opciones) {
        const val = respuestas[campo.id];
        const opcion = campo.opciones.find(o => o.valor === val);
        if (opcion) puntosMap[campo.id] = opcion.puntos;
      }
    }
  }
  const total = Object.values(puntosMap).reduce((a, b) => a + b, 0);

  if (total <= 4) {
    return {
      nombre: 'Iniciado',
      desc: 'Estás empezando tu camino en la IA. Tienes un gran potencial por delante.',
      servicio: 'Sesión individual (70€)',
      precio: '70€',
      pasos: 'Te recomiendo empezar con una sesión de diagnóstico donde evaluaremos tus necesidades específicas y te daré las primeras herramientas concretas para tu contexto.',
    };
  } else if (total <= 10) {
    return {
      nombre: 'En Desarrollo',
      desc: 'Tienes bases sólidas. Es el momento de estructurar y sistematizar tu uso de la IA.',
      servicio: 'Pack 4 sesiones (250€)',
      precio: '250€',
      pasos: 'El pack de 4 sesiones es ideal para ti: en 4 semanas pasarás de un uso ocasional a una integración sistemática con criterios claros.',
    };
  } else {
    return {
      nombre: 'Avanzado',
      desc: 'Tienes un nivel alto. El siguiente paso es optimizar, especializar o escalar.',
      servicio: 'Diseño de material / Cirugía de prompts (50–120€)',
      precio: '50–120€',
      pasos: 'Con tu nivel, lo más valioso es trabajar en servicios específicos: cirugía de prompts para afinar tus herramientas existentes o diseño de material avanzado.',
    };
  }
}

export default function CuestionarioPage() {
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [enviado, setEnviado] = useState(false);

  const totalCampos = preguntas.flatMap(s => s.campos).filter(c => c.tipo === 'radio').length;
  const respondidos = Object.keys(respuestas).filter(k => {
    const campo = preguntas.flatMap(s => s.campos).find(c => c.id === k);
    return campo?.tipo === 'radio';
  }).length;

  const perfil = enviado ? calcularPerfil(respuestas) : null;

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-2">
          <Link href="/ia/asesoria" className="text-sm text-muted hover:text-accent transition-colors">← Volver a Asesoría</Link>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">IA · Asesoría</p>
          <h1 className="text-4xl font-bold mb-3">📊 Cuestionario de autoevaluación IA</h1>
          <p className="text-lg text-muted">
            Descubre tu nivel de IA y cómo puede transformar tu práctica profesional. El cuestionario tarda unos 3–5 minutos.
          </p>
        </div>

        {!enviado ? (
          <>
            {/* Progreso */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted">{respondidos} de {totalCampos} preguntas respondidas</span>
                <span className="text-xs text-accent">{Math.round((respondidos / totalCampos) * 100)}%</span>
              </div>
              <div className="h-1.5 bg-border rounded-full">
                <div
                  className="h-1.5 bg-accent rounded-full transition-all"
                  style={{ width: `${(respondidos / totalCampos) * 100}%` }}
                />
              </div>
            </div>

            <div className="space-y-8">
              {preguntas.map(seccion => (
                <div key={seccion.seccion} className="bg-panel border border-border rounded-2xl p-6">
                  <h2 className="text-lg font-semibold mb-1">{seccion.seccion}</h2>
                  <p className="text-sm text-muted mb-6">{seccion.desc}</p>

                  <div className="space-y-6">
                    {seccion.campos.map(campo => (
                      <div key={campo.id}>
                        <label className="block text-sm font-medium text-fg mb-3">{campo.label}</label>

                        {campo.tipo === 'radio' && campo.opciones && (
                          <div className="space-y-2">
                            {campo.opciones.map(opcion => (
                              <label
                                key={opcion.valor}
                                className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${
                                  respuestas[campo.id] === opcion.valor
                                    ? 'border-accent bg-accent/10'
                                    : 'border-border hover:border-accent/50'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={campo.id}
                                  value={opcion.valor}
                                  checked={respuestas[campo.id] === opcion.valor}
                                  onChange={() => setRespuestas(r => ({ ...r, [campo.id]: opcion.valor }))}
                                  className="accent-accent"
                                />
                                <span className="text-sm text-fg">{opcion.label}</span>
                              </label>
                            ))}
                          </div>
                        )}

                        {campo.tipo === 'textarea' && (
                          <textarea
                            rows={3}
                            placeholder="Escribe aquí tu respuesta..."
                            value={respuestas[campo.id] || ''}
                            onChange={e => setRespuestas(r => ({ ...r, [campo.id]: e.target.value }))}
                            className="w-full bg-bg border border-border rounded-xl p-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent resize-none"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <button
                onClick={() => setEnviado(true)}
                disabled={respondidos < totalCampos}
                className="px-6 py-3 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                📊 Ver mis resultados
              </button>
              <Link
                href="/ia/asesoria"
                className="px-6 py-3 border border-border text-muted rounded-full text-sm hover:border-accent hover:text-fg transition"
              >
                Prefiero contacto directo
              </Link>
            </div>
            {respondidos < totalCampos && (
              <p className="text-xs text-muted mt-3">Responde todas las preguntas de opción múltiple para ver tus resultados.</p>
            )}
          </>
        ) : (
          <div className="space-y-6">
            <div className="bg-accent/10 border border-accent rounded-2xl p-8 text-center">
              <p className="text-sm text-accent font-medium uppercase tracking-wider mb-2">✨ Tu perfil IA</p>
              <h2 className="text-3xl font-bold mb-2">Perfil: {perfil!.nombre}</h2>
              <p className="text-muted">{perfil!.desc}</p>
            </div>

            <div className="bg-panel border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-fg mb-3">🎯 Servicio recomendado</h3>
              <p className="text-accent font-bold text-xl mb-1">{perfil!.servicio}</p>
              <p className="text-sm text-muted">{perfil!.pasos}</p>
            </div>

            <div className="bg-panel border border-border rounded-2xl p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-fg mb-1">¿Quieres empezar?</h3>
                <p className="text-sm text-muted">
                  Cuéntame tu caso — te respondo en menos de 24h con una propuesta concreta para tu perfil <strong className="text-fg">{perfil!.nombre}</strong>.
                </p>
              </div>

              <a
                href={`https://wa.me/34690026370?text=Hola%2C%20he%20hecho%20el%20cuestionario%20y%20mi%20perfil%20es%20${encodeURIComponent(perfil!.nombre)}%20%E2%80%94%20me%20interesa%20${encodeURIComponent(perfil!.servicio)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
              >
                Reservar por WhatsApp →
              </a>

              <div className="border-t border-border pt-4">
                <p className="text-xs text-muted mb-3">O déjame un mensaje y te contacto yo:</p>
                <form
                  action="https://formsubmit.co/informa@blablaele.com"
                  method="POST"
                  className="space-y-3"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value={`Consulta asesoría — Perfil ${perfil!.nombre}`} />
                  <input type="hidden" name="_next" value="https://www.javier.soy/ia/asesoria?enviado=1" />
                  <input type="hidden" name="perfil" value={perfil!.nombre} />
                  <input type="hidden" name="servicio_recomendado" value={perfil!.servicio} />
                  <input type="text" name="_honey" className="hidden" />

                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Tu email (solo para que pueda responderte)"
                    className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                  />
                  <textarea
                    name="mensaje"
                    rows={3}
                    placeholder="¿Qué quieres conseguir con la IA? Cuéntame brevemente tu situación."
                    className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 border border-accent text-accent font-semibold rounded-full text-sm hover:bg-accent hover:text-bg transition"
                  >
                    Enviar mensaje →
                  </button>
                </form>
              </div>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Link
                href="/ia/asesoria"
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                ← Ver todos los servicios
              </Link>
              <button
                onClick={() => { setEnviado(false); setRespuestas({}); }}
                className="text-sm text-muted hover:text-accent transition-colors"
              >
                Repetir cuestionario
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
