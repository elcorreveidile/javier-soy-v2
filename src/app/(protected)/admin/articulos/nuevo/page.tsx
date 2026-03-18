import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';
import ArticleEditor from '@/components/admin/ArticleEditor';

export const dynamic = 'force-dynamic';

export default async function NuevoArticuloPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login');
  const me = await adminDb.collection('users').doc(session.user.email).get();
  if (me.data()?.role !== 'admin') redirect('/dashboard');

  return (
    <div className="min-h-screen py-12 px-4">
      <ArticleEditor />
    </div>
  );
}
