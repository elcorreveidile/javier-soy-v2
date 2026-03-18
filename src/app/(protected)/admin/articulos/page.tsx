import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';

export const dynamic = 'force-dynamic';

export default async function AdminArticulosPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login');
  const me = await adminDb.collection('users').doc(session.user.email).get();
  if (me.data()?.role !== 'admin') redirect('/dashboard');

  const snap = await adminDb.collection('articles').orderBy('publishedAt', 'desc').get();
  const articles = snap.docs.map(doc => doc.data());

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Artículos</h1>
            <p className="text-muted mt-1">{articles.length} artículos en total</p>
          </div>
          <Link
            href="/admin/articulos/nuevo"
            className="px-5 py-2.5 bg-accent text-bg font-semibold rounded-lg hover:opacity-90 transition text-sm"
          >
            + Nuevo artículo
          </Link>
        </div>

        <div className="bg-panel border border-border rounded-2xl overflow-hidden">
          {articles.map((article, i) => {
            const date = new Date(article.publishedAt).toLocaleDateString('es-ES', {
              day: 'numeric', month: 'short', year: 'numeric',
            });
            return (
              <div
                key={article.slug}
                className={`flex items-center justify-between px-6 py-4 hover:bg-bg/50 transition-colors ${
                  i < articles.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <div className="flex-1 min-w-0 mr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium text-fg truncate">{article.title}</h3>
                    {!article.published && (
                      <span className="shrink-0 px-2 py-0.5 bg-yellow-900/30 text-yellow-400 text-xs rounded-full">
                        borrador
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span>{date}</span>
                    <span>·</span>
                    <span>{article.readingTime} min</span>
                    {article.tags?.length > 0 && (
                      <>
                        <span>·</span>
                        <span>{article.tags.slice(0, 3).join(', ')}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`/blog/${article.slug}`}
                    target="_blank"
                    className="px-3 py-1.5 text-xs text-muted hover:text-accent transition-colors"
                  >
                    Ver →
                  </Link>
                  <Link
                    href={`/admin/articulos/${article.slug}`}
                    className="px-3 py-1.5 bg-bg border border-border rounded-lg text-xs hover:border-accent transition-colors"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            );
          })}
          {articles.length === 0 && (
            <div className="text-center py-16 text-muted">No hay artículos aún.</div>
          )}
        </div>

        <div className="mt-6">
          <Link href="/admin" className="text-sm text-muted hover:text-accent transition-colors">
            ← Volver al panel
          </Link>
        </div>
      </div>
    </div>
  );
}
