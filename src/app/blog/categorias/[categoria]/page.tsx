import Link from 'next/link';
import { notFound } from 'next/navigation';
import { adminDb } from '@/lib/firebase-admin';

export const revalidate = 60;

const CATEGORIAS: Record<string, { label: string; tags: string[] }> = {
  'educacion':              { label: 'Educación',             tags: ['ELE', 'Educación', 'Prompts'] },
  'etica':                  { label: 'Ética',                 tags: ['Ética'] },
  'inteligencia-artificial':{ label: 'Inteligencia Artificial',tags: ['IA', 'ChatGPT', 'Claude', 'Agentes IA', 'z.ai'] },
  'prompts':                { label: 'Prompts',               tags: ['Prompts'] },
};

export async function generateStaticParams() {
  return Object.keys(CATEGORIAS).map(categoria => ({ categoria }));
}

export default async function CategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  const { categoria } = await params;
  const cat = CATEGORIAS[categoria];
  if (!cat) notFound();

  const snap = await adminDb.collection('articles').orderBy('publishedAt', 'desc').get();
  const articles = snap.docs
    .map(d => ({ slug: d.id, ...d.data() } as {
      slug: string; title: string; excerpt: string;
      publishedAt: string; readingTime?: number; tags: string[]; published: boolean;
    }))
    .filter(a => a.published && a.tags?.some(t => cat.tags.includes(t)));

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2 flex items-center gap-2 text-sm text-muted">
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <span>/</span>
          <span>Categorías</span>
          <span>/</span>
          <span>{cat.label}</span>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Categoría</p>
          <h1 className="text-4xl font-bold mb-3">{cat.label}</h1>
          <p className="text-muted">{articles.length} {articles.length === 1 ? 'artículo' : 'artículos'}</p>
        </div>

        {articles.length === 0 ? (
          <p className="text-muted">No hay artículos publicados en esta categoría todavía.</p>
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
                      <span key={t} className="px-2 py-0.5 bg-bg border border-border rounded-full text-xs text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Otras categorías */}
        <div className="mt-10 pt-8 border-t border-border">
          <p className="text-xs text-muted uppercase tracking-wider mb-3">Otras categorías</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORIAS)
              .filter(([slug]) => slug !== categoria)
              .map(([slug, c]) => (
                <Link
                  key={slug}
                  href={`/blog/categorias/${slug}`}
                  className="px-3 py-1.5 bg-panel border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition-colors"
                >
                  {c.label}
                </Link>
              ))}
          </div>
        </div>

      </div>
    </div>
  );
}
