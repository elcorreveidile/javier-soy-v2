import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let doc;
  try {
    doc = await adminDb.collection('articles').doc(slug).get();
  } catch {
    notFound();
  }
  if (!doc!.exists || !doc!.data()?.published) notFound();

  const article = doc!.data()!;

  let relatedSnap;
  try {
    relatedSnap = await adminDb.collection('articles').orderBy('publishedAt', 'desc').limit(10).get();
  } catch {
    relatedSnap = { docs: [] };
  }

  const related = relatedSnap.docs
    .map(d => d.data())
    .filter(a => a.slug !== slug && a.tags?.some((t: string) => article.tags?.includes(t)))
    .slice(0, 2);

  const date = new Date(article.publishedAt).toLocaleDateString('es-ES', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-muted">
            <li><Link href="/" className="hover:text-accent">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li>/</li>
            <li className="text-fg truncate max-w-48">{article.title}</li>
          </ol>
        </nav>

        <header className="mb-12">
          <div className="flex gap-2 mb-4 flex-wrap">
            {(article.tags || []).map((tag: string) => (
              <Link
                key={tag}
                href={`/blog/etiquetas/${tag.toLowerCase().replace(/ /g, '-').replace(/\./g, '')}`}
                className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full hover:bg-accent/20 transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-muted mb-6">{article.excerpt}</p>

          <div className="flex items-center gap-4 text-sm text-muted flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-bg font-bold shrink-0">
                JB
              </div>
              <div>
                <p className="text-fg font-medium">{article.author}</p>
                <p className="text-xs">Autor</p>
              </div>
            </div>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{article.readingTime} min lectura</span>
          </div>
        </header>

        <div className="bg-panel border border-border rounded-2xl p-8 mb-8 prose-custom">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {article.content}
          </ReactMarkdown>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Etiquetas</h3>
          <div className="flex gap-2 flex-wrap">
            {(article.tags || []).map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-bg border border-border rounded-full text-sm text-muted"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-bg text-xl font-bold shrink-0">
              JB
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Javier Benítez Láinez</h3>
              <p className="text-muted mb-4">
                Profesor de ELE y entusiasta de la Inteligencia Artificial. Escribo sobre
                tecnología educativa, prompts y el futuro de la enseñanza.
              </p>
              <Link href="/blog" className="text-accent hover:underline text-sm">
                Ver todos los artículos →
              </Link>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="bg-panel border border-border rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {related.map(rel => (
                <Link key={rel.slug} href={`/blog/${rel.slug}`} className="block group">
                  <div className="bg-bg border border-border rounded-xl p-4 hover:border-accent transition-colors">
                    <h4 className="font-semibold mb-2 group-hover:text-accent line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-sm text-muted line-clamp-2">{rel.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
