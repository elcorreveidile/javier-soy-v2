import Link from 'next/link';
import { adminDb } from '@/lib/firebase-admin';
import BlogList from '@/components/blog/BlogList';

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  let snap;
  try {
    snap = await adminDb.collection('articles').orderBy('publishedAt', 'desc').get();
  } catch {
    snap = { docs: [] };
  }

  const articles = snap.docs.map(doc => doc.data()).filter(a => a.published) as any[];
  const allTags = Array.from(new Set(articles.flatMap(a => a.tags || []))) as string[];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-muted text-xl">
            Artículos sobre Inteligencia Artificial, Educación y Prompts
          </p>
        </div>

        {/* Categorías */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs text-muted uppercase tracking-wider mr-1">Categorías:</span>
          {[
            { slug: 'educacion', label: 'Educación' },
            { slug: 'etica', label: 'Ética' },
            { slug: 'inteligencia-artificial', label: 'Inteligencia Artificial' },
            { slug: 'prompts', label: 'Prompts' },
          ].map(c => (
            <Link
              key={c.slug}
              href={`/blog/categorias/${c.slug}`}
              className="px-3 py-1.5 bg-panel border border-border rounded-full text-sm text-muted hover:border-accent hover:text-fg transition-colors"
            >
              {c.label}
            </Link>
          ))}
          <span className="text-border mx-1">·</span>
          <Link href="/blog/autores/javier-benitez-lainez" className="text-sm text-muted hover:text-accent transition-colors">
            Autor →
          </Link>
        </div>

        <BlogList articles={articles} allTags={allTags} />

        <div className="mt-16 bg-panel border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">Newsletter</h3>
          <p className="text-muted mb-6">
            Recibe los últimos artículos sobre IA y Educación en tu email
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 bg-bg border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-bg font-semibold rounded-lg hover:bg-fg transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
