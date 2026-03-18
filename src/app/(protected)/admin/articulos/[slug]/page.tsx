import { getServerSession } from 'next-auth';
import { redirect, notFound } from 'next/navigation';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';
import ArticleEditor from '@/components/admin/ArticleEditor';

export const dynamic = 'force-dynamic';

export default async function EditarArticuloPage({ params }: { params: Promise<{ slug: string }> }) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login');
  const me = await adminDb.collection('users').doc(session.user.email).get();
  if (me.data()?.role !== 'admin') redirect('/dashboard');

  const { slug } = await params;
  const doc = await adminDb.collection('articles').doc(slug).get();
  if (!doc.exists) notFound();

  const article = doc.data()!;

  return (
    <div className="min-h-screen py-12 px-4">
      <ArticleEditor
        slug={slug}
        initial={{
          title: article.title,
          excerpt: article.excerpt,
          content: article.content,
          tags: (article.tags || []).join(', '),
          publishedAt: article.publishedAt,
          readingTime: article.readingTime,
          published: article.published,
        }}
      />
    </div>
  );
}
