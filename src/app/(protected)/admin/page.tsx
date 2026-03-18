import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';
import UsersTable from '@/components/admin/UsersTable';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login');

  const currentUser = await adminDb.collection('users').doc(session.user.email).get();
  if (currentUser.data()?.role !== 'admin') redirect('/dashboard');

  const snap = await adminDb.collection('users').orderBy('createdAt', 'desc').get();
  const users = snap.docs.map(doc => doc.data());

  const total = users.length;
  const active = users.filter(u => u.status === 'active').length;
  const pending = users.filter(u => u.status === 'pending').length;
  const admins = users.filter(u => u.role === 'admin').length;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Panel de administración</h1>
          <p className="text-muted">Gestión de usuarios de javier.soy</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-panel border border-border rounded-xl p-5">
            <div className="text-2xl font-bold text-fg">{total}</div>
            <div className="text-sm text-muted mt-1">Usuarios totales</div>
          </div>
          <div className="bg-panel border border-border rounded-xl p-5">
            <div className="text-2xl font-bold text-green-400">{active}</div>
            <div className="text-sm text-muted mt-1">Activos</div>
          </div>
          <div className="bg-panel border border-border rounded-xl p-5">
            <div className="text-2xl font-bold text-yellow-400">{pending}</div>
            <div className="text-sm text-muted mt-1">Pendientes</div>
          </div>
          <div className="bg-panel border border-border rounded-xl p-5">
            <div className="text-2xl font-bold text-accent">{admins}</div>
            <div className="text-sm text-muted mt-1">Administradores</div>
          </div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link
            href="/admin/articulos"
            className="bg-panel border border-border rounded-xl p-5 hover:border-accent transition-colors group"
          >
            <div className="text-2xl font-bold text-fg group-hover:text-accent">Artículos</div>
            <div className="text-sm text-muted mt-1">Crear, editar y publicar posts del blog</div>
          </Link>
          <div className="bg-panel border border-border rounded-xl p-5 opacity-40 cursor-not-allowed">
            <div className="text-2xl font-bold text-fg">Materiales</div>
            <div className="text-sm text-muted mt-1">Próximamente</div>
          </div>
        </div>

        {/* Users table */}
        <div className="bg-panel border border-border rounded-2xl p-6">
          <h2 className="text-lg font-semibold text-fg mb-6">Usuarios registrados</h2>
          <UsersTable initialUsers={users as any} />
        </div>

      </div>
    </div>
  );
}
