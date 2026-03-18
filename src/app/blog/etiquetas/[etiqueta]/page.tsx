import Link from 'next/link';
import { notFound } from 'next/navigation';
import { adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

const ETIQUETAS: Record<string, string> = {
  'agentes-ia':  'Agentes IA',
  'chatgpt':     'ChatGPT',
  'claude':      'Claude',
  'creatividad': 'Creatividad',
  'cultura':     'Cultura',
  'educacion':   'Educación',
  'ele':         'ELE',
  'escritura':   'Escritura',
  'etica':       'Ética',
  'ia':          'IA',
  'poesia':      'Poesía',
  'prompts':     'Prompts',
  'zai':         'z.ai',
};

export default async function EtiquetaPage({ params }: { params: Promise<{ etiqueta: string }> }) {
  const { etiqueta } = await params;
  const label = ETIQUETAS[etiqueta];
  if (!label) notFound();

  let snap;
  try {
    snap = await adminDb.collection('articles').orderBy('publishedAt', 'desc').get();
  } catch {
    snap = { docs: [] };
  }
  const articles = snap.docs
    .map(d => ({ slug: d.id, ...d.data() } as {
      slug: string; title: string; excerpt: string;
      publishedAt: string; readingTime?: number; tags: string[]; published: boolean;
    }))
    .filter(a => a.published && a.tags?.some(t =>
      t.toLowerCase() === label.toLowerCase() || t.toLowerCase() === etiqueta.toLowerCase()
    ));

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2 flex items-center gap-2 text-sm text-muted">
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <span>/</span>
          <span>Etiquetas</span>
          <span>/</span>
          <span>{label}</span>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Etiqueta</p>
          <h1 className="text-4xl font-bold mb-3">#{label}</h1>
          <p className="text-muted">{articles.length} {articles.length === 1 ? 'artículo' : 'artículos'}</p>
        </div>

        {articles.length === 0 ? (
          <p className="text-muted">No hay artículos publicados con esta etiqueta todavía.</p>
        ) : (
          <div className="space-y-4">
            {articles.map(a => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="block bg-panel border border-border rounded-xl p-5 hover:border-accent transition-colors group"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="font-semibold text-fg group-hover:text-accent">{a.title}</h2>
                  {a.readingTime && <span className="text-xs text-muted shrink-0">{a.readingTime} min</span>}
                </div>
                {a.excerpt && <p className="text-sm text-muted mb-3 line-clamp-2">{a.excerpt}</p>}
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted">
                    {new Date(a.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <div className="flex gap-1.5 flex-wrap">
                    {a.tags?.slice(0, 3).map(t => (
                      <Link
                        key={t}
                        href={`/blog/etiquetas/${Object.entries(ETIQUETAS).find(([, v]) => v === t)?.[0] ?? t.toLowerCase()}`}
                        className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted hover:border-accent hover:text-fg transition-colors"
                      >
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Todas las etiquetas */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted uppercase tracking-wider mb-3">Todas las etiquetas</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(ETIQUETAS).map(([slug, name]) => (
              <Link
                key={slug}
                href={`/blog/etiquetas/${slug}`}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors border ${
                  slug === etiqueta
                    ? 'bg-accent/15 border-accent text-accent'
                    : 'bg-panel border-border text-muted hover:border-accent hover:text-fg'
                }`}
              >
                #{name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
