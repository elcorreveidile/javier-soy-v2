'use client';

import { useState } from 'react';

const SHARE_URL = 'https://www.javier.soy';

const sociales = [
  {
    label: 'Instagram',
    icon: '📷',
    href: 'https://instagram.com/jabelainez',
    external: true,
  },
  {
    label: 'WhatsApp',
    icon: '💬',
    href: `https://wa.me/?text=${encodeURIComponent(SHARE_URL)}`,
    external: true,
  },
  {
    label: 'X',
    icon: '✕',
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(SHARE_URL)}`,
    external: true,
  },
  {
    label: 'LinkedIn',
    icon: 'in',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
    external: true,
  },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [enviado, setEnviado] = useState(false);

  function copiarEnlace() {
    navigator.clipboard.writeText(SHARE_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div id="contacto" className="bg-panel border border-border rounded-2xl p-8">
      <h2 className="text-2xl font-semibold mb-1">Contacto</h2>
      <p className="text-muted text-sm mb-6">
        Invitaciones a talleres, charlas, clases o colaboración profesional.
      </p>

      {/* Redes sociales */}
      <div className="flex flex-wrap gap-2 mb-8">
        {sociales.map(s => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-bg border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition-colors"
          >
            <span className="text-xs font-bold">{s.icon}</span>
            {s.label}
          </a>
        ))}
        <button
          onClick={copiarEnlace}
          className="inline-flex items-center gap-2 px-4 py-2 bg-bg border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition-colors"
        >
          <span className="text-xs">🔗</span>
          {copied ? '¡Copiado!' : 'Copiar enlace'}
        </button>
      </div>

      {/* Formulario */}
      {enviado ? (
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 text-center">
          <p className="text-accent font-semibold mb-1">✓ Mensaje enviado</p>
          <p className="text-muted text-sm">Gracias. Te responderé lo antes posible.</p>
        </div>
      ) : (
        <form
          action="https://formsubmit.co/informa@blablaele.com"
          method="POST"
          onSubmit={() => setEnviado(true)}
          className="space-y-4"
        >
          {/* Honeypot anti-spam */}
          <input type="text" name="_honey" className="hidden" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={SHARE_URL} />

          <div>
            <label className="block text-sm font-medium text-muted mb-1" htmlFor="nombre">
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre"
              className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="tu@email.com"
              className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted mb-1" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              placeholder="¿En qué puedo ayudarte?"
              className="w-full bg-bg border border-border rounded-xl px-4 py-2.5 text-sm text-fg placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2.5 bg-accent text-bg font-semibold rounded-full text-sm hover:opacity-90 transition"
          >
            Enviar mensaje →
          </button>
        </form>
      )}
    </div>
  );
}
