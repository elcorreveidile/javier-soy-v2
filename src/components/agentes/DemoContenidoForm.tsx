'use client';

import { useState } from 'react';
import Link from 'next/link';

const CANALES = [
  { id: 'linkedin',   label: 'LinkedIn',    icon: 'in', desc: 'Post profesional' },
  { id: 'instagram',  label: 'Instagram',   icon: '📷', desc: 'Caption + hashtags' },
  { id: 'newsletter', label: 'Newsletter',  icon: '✉️', desc: 'Sección + asunto' },
  { id: 'blog',       label: 'Blog',        icon: '📝', desc: 'Borrador con estructura' },
];

const TONOS = [
  { id: 'cercano',    label: 'Cercano',     desc: 'Directo, como hablando a alguien' },
  { id: 'reflexivo',  label: 'Reflexivo',   desc: 'Con pausa, ideas que invitan a pensar' },
  { id: 'directo',    label: 'Directo',     desc: 'Sin rodeos, conciso' },
  { id: 'tecnico',    label: 'Técnico',     desc: 'Preciso, con terminología específica' },
  { id: 'informal',   label: 'Informal',    desc: 'Desenfadado, con humor natural' },
];

const LIMITE = 3;

type Briefing = {
  audiencia: string;
  tono: string;
  evitar: string;
  textoEjemplo: string;
};

type Props = {
  usoInicial: number;
};

export default function DemoContenidoForm({ usoInicial }: Props) {
  const [paso, setPaso] = useState<1 | 2>(1);
  const [briefing, setBriefing] = useState<Briefing>({
    audiencia: '',
    tono: 'cercano',
    evitar: '',
    textoEjemplo: '',
  });

  const [idea, setIdea] = useState('');
  const [canal, setCanal] = useState('linkedin');
  const [resultado, setResultado] = useState('');
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [uso, setUso] = useState(usoInicial);
  const [copiado, setCopiado] = useState(false);

  const restantes = LIMITE - uso;
  const agotado = restantes <= 0;

  function avanzar() {
    if (!briefing.audiencia.trim() || !briefing.textoEjemplo.trim()) return;
    setPaso(2);
    setResultado('');
  }

  async function enviar() {
    if (!idea.trim() || agotado) return;
    setCargando(true);
    setError('');
    setResultado('');

    try {
      const res = await fetch('/api/agentes/contenido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idea, canal, briefing }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Error al generar el contenido.');
        if (data.limite) setUso(LIMITE);
        return;
      }

      setResultado(data.resultado);
      setUso(data.usoActual);
    } catch {
      setError('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setCargando(false);
    }
  }

  function copiar() {
    navigator.clipboard.writeText(resultado);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  }

  return (
    <div className="space-y-6">

      {/* Contador de usos */}
      <div className={`flex items-center justify-between p-4 rounded-xl border ${
        agotado ? 'bg-red-950/20 border-red-900/50' : restantes === 1 ? 'bg-yellow-950/20 border-yellow-900/50' : 'bg-panel border-border'
      }`}>
        <div>
          <p className={`text-sm font-medium ${agotado ? 'text-red-400' : restantes === 1 ? 'text-yellow-400' : 'text-fg'}`}>
            {agotado ? 'Demo agotada' : `${restantes} ${restantes === 1 ? 'solicitud restante' : 'solicitudes restantes'}`}
          </p>
          <p className="text-xs text-muted mt-0.5">
            {uso} de {LIMITE} usos utilizados
          </p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: LIMITE }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${i < uso ? 'bg-accent' : 'bg-border'}`}
            />
          ))}
        </div>
      </div>

      {agotado ? (
        <div className="bg-panel border border-border rounded-2xl p-8 text-center">
          <p className="text-2xl mb-3">🎯</p>
          <h3 className="font-semibold text-fg mb-2">Has usado las 3 demostraciones</h3>
          <p className="text-muted text-sm mb-6 max-w-sm mx-auto">
            Si quieres integrar el agente de contenido en tu flujo de trabajo habitual, cuéntame tu caso.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://wa.me/34690026370?text=Hola%2C%20he%20probado%20el%20agente%20de%20contenido%20y%20me%20interesa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
            >
              Consultar por WhatsApp →
            </a>
            <Link
              href="/ia/agentes"
              className="px-5 py-2.5 border border-border text-muted rounded-full text-sm hover:border-accent hover:text-fg transition"
            >
              Ver todos los agentes
            </Link>
          </div>
        </div>
      ) : (
        <>
          {/* Indicador de pasos */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setPaso(1); setResultado(''); }}
              className={`flex items-center gap-2 text-sm transition-colors ${paso === 1 ? 'text-accent font-medium' : 'text-muted hover:text-fg'}`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${paso === 1 ? 'bg-accent text-bg' : paso === 2 ? 'bg-accent/20 text-accent' : 'bg-border text-muted'}`}>
                {paso === 2 ? '✓' : '1'}
              </span>
              Tu voz
            </button>
            <div className="flex-1 h-px bg-border" />
            <span className={`flex items-center gap-2 text-sm ${paso === 2 ? 'text-accent font-medium' : 'text-muted'}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${paso === 2 ? 'bg-accent text-bg' : 'bg-border text-muted'}`}>
                2
              </span>
              Tu contenido
            </span>
          </div>

          {paso === 1 && (
            <div className="space-y-5">
              <div>
                <p className="text-sm text-muted mb-5">
                  Antes de generar nada, el agente necesita conocer tu voz. Esto es lo que hace que el resultado se parezca a ti y no a cualquiera.
                </p>
              </div>

              {/* Audiencia */}
              <div>
                <label className="block text-sm font-medium text-fg mb-1" htmlFor="audiencia">
                  ¿A quién te diriges habitualmente? <span className="text-accent">*</span>
                </label>
                <p className="text-xs text-muted mb-2">Tu audiencia principal: quiénes son, qué les preocupa.</p>
                <input
                  id="audiencia"
                  type="text"
                  value={briefing.audiencia}
                  onChange={e => setBriefing(b => ({ ...b, audiencia: e.target.value }))}
                  placeholder="Ej: profesores de idiomas, emprendedores en educación, curiosos de la IA..."
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Tono */}
              <div>
                <label className="block text-sm font-medium text-fg mb-3">
                  ¿Cómo defines tu tono?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TONOS.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setBriefing(b => ({ ...b, tono: t.id }))}
                      className={`text-left p-3 rounded-xl border text-sm transition-colors ${
                        briefing.tono === t.id
                          ? 'border-accent bg-accent/10'
                          : 'border-border bg-panel hover:border-accent/50'
                      }`}
                    >
                      <span className={`font-medium block ${briefing.tono === t.id ? 'text-accent' : 'text-fg'}`}>{t.label}</span>
                      <span className="text-xs text-muted mt-0.5 block">{t.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Qué evitas */}
              <div>
                <label className="block text-sm font-medium text-fg mb-1" htmlFor="evitar">
                  ¿Qué evitas en tu contenido?
                </label>
                <p className="text-xs text-muted mb-2">Clichés, estructuras que no te gustan, palabras que no usas...</p>
                <input
                  id="evitar"
                  type="text"
                  value={briefing.evitar}
                  onChange={e => setBriefing(b => ({ ...b, evitar: e.target.value }))}
                  placeholder="Ej: frases motivacionales vacías, exceso de hashtags, palabras como 'transformar' o 'empoderar'..."
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Texto de ejemplo */}
              <div>
                <label className="block text-sm font-medium text-fg mb-1" htmlFor="textoEjemplo">
                  Escribe un texto tuyo de ejemplo <span className="text-accent">*</span>
                </label>
                <p className="text-xs text-muted mb-2">
                  Un post, un párrafo de tu newsletter, un email... Algo que ya hayas escrito y que te represente. El agente lo analiza para capturar tu voz real.
                </p>
                <textarea
                  id="textoEjemplo"
                  rows={6}
                  value={briefing.textoEjemplo}
                  onChange={e => setBriefing(b => ({ ...b, textoEjemplo: e.target.value }))}
                  placeholder="Pega aquí un texto tuyo: un post de LinkedIn, un fragmento de newsletter, un email que escribiste... Cuanto más representativo, mejor."
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
                <p className="text-xs text-muted mt-1">{briefing.textoEjemplo.length} caracteres</p>
              </div>

              <button
                onClick={avanzar}
                disabled={!briefing.audiencia.trim() || !briefing.textoEjemplo.trim()}
                className="w-full py-3 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar — definir el contenido →
              </button>
            </div>
          )}

          {paso === 2 && (
            <div className="space-y-5">

              {/* Resumen del briefing */}
              <div className="bg-bg border border-border rounded-xl p-4 flex items-start gap-3">
                <span className="text-accent text-sm shrink-0 mt-0.5">✓</span>
                <div className="text-xs text-muted space-y-0.5">
                  <p><strong className="text-fg">Audiencia:</strong> {briefing.audiencia}</p>
                  <p><strong className="text-fg">Tono:</strong> {TONOS.find(t => t.id === briefing.tono)?.label}</p>
                  {briefing.evitar && <p><strong className="text-fg">Evitar:</strong> {briefing.evitar}</p>}
                </div>
                <button
                  onClick={() => { setPaso(1); setResultado(''); }}
                  className="ml-auto text-xs text-muted hover:text-accent transition-colors shrink-0"
                >
                  Editar
                </button>
              </div>

              {/* Selector de canal */}
              <div>
                <label className="block text-sm font-medium text-muted mb-3">Canal de destino</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {CANALES.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setCanal(c.id)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl border text-sm transition-colors ${
                        canal === c.id
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border bg-panel text-muted hover:border-accent/50 hover:text-fg'
                      }`}
                    >
                      <span className="text-lg">{c.icon}</span>
                      <span className="font-medium">{c.label}</span>
                      <span className="text-xs opacity-70">{c.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Idea / borrador */}
              <div>
                <label className="block text-sm font-medium text-muted mb-2" htmlFor="idea">
                  Tu idea, nota o borrador
                </label>
                <textarea
                  id="idea"
                  rows={5}
                  value={idea}
                  onChange={e => setIdea(e.target.value)}
                  placeholder="Escribe aquí tu idea, un borrador sin pulir, una nota de voz transcrita... Cuanto más contexto mejor."
                  className="w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                />
                <p className="text-xs text-muted mt-1">{idea.length} caracteres</p>
              </div>

              {error && (
                <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-3 text-sm text-red-300">
                  {error}
                </div>
              )}

              <button
                onClick={enviar}
                disabled={cargando || !idea.trim()}
                className="w-full py-3 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {cargando ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                    Generando...
                  </span>
                ) : (
                  `Generar para ${CANALES.find(c => c.id === canal)?.label} →`
                )}
              </button>
            </div>
          )}
        </>
      )}

      {/* Resultado */}
      {resultado && (
        <div className="bg-panel border border-accent/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-fg">Resultado generado</h3>
            <button
              onClick={copiar}
              className="text-xs text-accent border border-accent/30 rounded-full px-3 py-1.5 hover:bg-accent/10 transition"
            >
              {copiado ? '¡Copiado!' : 'Copiar'}
            </button>
          </div>
          <pre className="text-sm text-muted whitespace-pre-wrap leading-relaxed font-sans">
            {resultado}
          </pre>
          <p className="text-xs text-muted mt-4 pt-4 border-t border-border">
            Recuerda revisar y ajustar el texto antes de publicar — el agente propone, tú decides.
          </p>
          {uso < LIMITE && (
            <button
              onClick={() => { setResultado(''); setIdea(''); setError(''); }}
              className="mt-3 text-xs text-accent hover:underline"
            >
              Generar otro →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
