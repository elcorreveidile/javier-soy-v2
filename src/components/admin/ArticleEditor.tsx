'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type ArticleForm = {
  title: string;
  excerpt: string;
  content: string;
  tags: string;
  publishedAt: string;
  readingTime: number;
  published: boolean;
};

type Props = {
  slug?: string;
  initial?: Partial<ArticleForm>;
};

export default function ArticleEditor({ slug, initial }: Props) {
  const router = useRouter();
  const isEdit = !!slug;

  const [form, setForm] = useState<ArticleForm>({
    title: initial?.title || '',
    excerpt: initial?.excerpt || '',
    content: initial?.content || '',
    tags: initial?.tags || '',
    publishedAt: initial?.publishedAt
      ? new Date(initial.publishedAt).toISOString().slice(0, 10)
      : new Date().toISOString().slice(0, 10),
    readingTime: initial?.readingTime || 5,
    published: initial?.published ?? true,
  });

  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);

  function set(field: keyof ArticleForm, value: any) {
    setForm(f => ({ ...f, [field]: value }));
  }

  async function handleSave() {
    if (!form.title || !form.content) { setError('Título y contenido son obligatorios'); return; }
    setSaving(true); setError('');
    try {
      const payload = {
        ...form,
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        publishedAt: new Date(form.publishedAt).toISOString(),
        readingTime: Number(form.readingTime),
      };

      const res = await fetch(
        isEdit ? `/api/admin/articulos/${slug}` : '/api/admin/articulos',
        {
          method: isEdit ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error();
      const data = await res.json();
      router.push('/admin/articulos');
      router.refresh();
    } catch {
      setError('Error al guardar. Inténtalo de nuevo.');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`¿Eliminar "${form.title}"? Esta acción no se puede deshacer.`)) return;
    setDeleting(true);
    try {
      await fetch(`/api/admin/articulos/${slug}`, { method: 'DELETE' });
      router.push('/admin/articulos');
      router.refresh();
    } catch {
      setError('Error al eliminar.');
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">{isEdit ? 'Editar artículo' : 'Nuevo artículo'}</h1>
          {isEdit && <p className="text-muted text-sm mt-1">slug: {slug}</p>}
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setPreview(p => !p)}
            className="px-4 py-2 bg-panel border border-border rounded-lg text-sm hover:border-accent transition-colors"
          >
            {preview ? 'Editar' : 'Vista previa'}
          </button>
          {isEdit && (
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="px-4 py-2 bg-red-900/30 border border-red-800 rounded-lg text-red-400 text-sm hover:bg-red-900/50 transition-colors disabled:opacity-50"
            >
              {deleting ? 'Eliminando...' : 'Eliminar'}
            </button>
          )}
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 bg-accent text-bg font-semibold rounded-lg text-sm hover:opacity-90 transition disabled:opacity-50"
          >
            {saving ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Publicar'}
          </button>
        </div>
      </div>

      {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

      {preview ? (
        <div className="bg-panel border border-border rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-2">{form.title || 'Sin título'}</h1>
          <p className="text-muted mb-6">{form.excerpt}</p>
          <div className="prose-custom whitespace-pre-wrap text-muted">{form.content}</div>
        </div>
      ) : (
        <div className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-muted mb-1">Título *</label>
            <input
              type="text"
              value={form.title}
              onChange={e => set('title', e.target.value)}
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-fg text-lg focus:outline-none focus:border-accent"
              placeholder="Título del artículo"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-muted mb-1">Extracto</label>
            <textarea
              value={form.excerpt}
              onChange={e => set('excerpt', e.target.value)}
              rows={2}
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-fg text-sm focus:outline-none focus:border-accent resize-none"
              placeholder="Breve descripción que aparece en las tarjetas del blog"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-muted mb-1">Contenido * <span className="text-xs text-muted">(Markdown)</span></label>
            <textarea
              value={form.content}
              onChange={e => set('content', e.target.value)}
              rows={20}
              className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-fg text-sm font-mono focus:outline-none focus:border-accent resize-y"
              placeholder="## Introducción&#10;&#10;Escribe el contenido en Markdown..."
            />
          </div>

          {/* Meta row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-muted mb-1">Etiquetas</label>
              <input
                type="text"
                value={form.tags}
                onChange={e => set('tags', e.target.value)}
                className="w-full bg-bg border border-border rounded-lg px-3 py-2 text-fg text-sm focus:outline-none focus:border-accent"
                placeholder="IA, ELE, Prompts"
              />
              <p className="text-xs text-muted mt-1">Separadas por comas</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-1">Fecha</label>
              <input
                type="date"
                value={form.publishedAt}
                onChange={e => set('publishedAt', e.target.value)}
                className="w-full bg-bg border border-border rounded-lg px-3 py-2 text-fg text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted mb-1">Lectura (min)</label>
              <input
                type="number"
                min={1}
                max={60}
                value={form.readingTime}
                onChange={e => set('readingTime', e.target.value)}
                className="w-full bg-bg border border-border rounded-lg px-3 py-2 text-fg text-sm focus:outline-none focus:border-accent"
              />
            </div>
            <div className="flex flex-col justify-end">
              <label className="flex items-center gap-2 cursor-pointer py-2">
                <input
                  type="checkbox"
                  checked={form.published}
                  onChange={e => set('published', e.target.checked)}
                  className="w-4 h-4 accent-accent"
                />
                <span className="text-sm text-fg">Publicado</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
