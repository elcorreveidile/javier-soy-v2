'use client';

import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PerfilPage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    nombre: '',
    profesion: '',
    institucion: '',
    interes: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login');
    if (session?.user?.name) setForm(f => ({ ...f, nombre: session.user!.name || '' }));
  }, [status, session, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/perfil', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Error al guardar');
      await update(); // refresca el JWT con los datos nuevos de Firestore
      router.push('/dashboard');
    } catch (e) {
      setError('No se pudo guardar. Inténtalo de nuevo.');
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading') return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-muted">Cargando...</div>
    </div>
  );

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-panel border border-border rounded-2xl p-8">
          <h1 className="text-2xl font-bold mb-2">Completa tu perfil</h1>
          <p className="text-muted text-sm mb-8">
            Solo necesitamos unos datos para personalizar tu experiencia.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-fg mb-1">Nombre completo</label>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))}
                className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-fg text-sm focus:outline-none focus:border-accent"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-fg mb-1">Profesión</label>
              <input
                type="text"
                required
                value={form.profesion}
                onChange={e => setForm(f => ({ ...f, profesion: e.target.value }))}
                className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-fg text-sm focus:outline-none focus:border-accent"
                placeholder="Ej: Profesora de español, Diseñador..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-fg mb-1">Centro o empresa <span className="text-muted">(opcional)</span></label>
              <input
                type="text"
                value={form.institucion}
                onChange={e => setForm(f => ({ ...f, institucion: e.target.value }))}
                className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-fg text-sm focus:outline-none focus:border-accent"
                placeholder="Ej: CLM-UGR, Freelance..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-fg mb-1">¿Qué te interesa más?</label>
              <select
                required
                value={form.interes}
                onChange={e => setForm(f => ({ ...f, interes: e.target.value }))}
                className="w-full bg-bg border border-border rounded-lg px-4 py-2.5 text-fg text-sm focus:outline-none focus:border-accent"
              >
                <option value="">Selecciona una opción</option>
                <option value="agentes_ia">Agentes IA para mi trabajo</option>
                <option value="ensenanza_ele">Enseñanza de español (ELE)</option>
                <option value="contenido">Creación de contenido</option>
                <option value="gestion">Gestión y productividad</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            {error && <p className="text-red-400 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-accent text-bg font-semibold py-2.5 rounded-lg hover:opacity-90 transition disabled:opacity-50"
            >
              {saving ? 'Guardando...' : 'Guardar y continuar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
