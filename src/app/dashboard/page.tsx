import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    redirect('/login');
  }

  // Read profileComplete directly from Firestore — bypasses JWT cache
  const doc = await adminDb.collection('users').doc(session.user.email).get();
  const userData = doc.data();

  if (!userData?.profileComplete) {
    redirect('/perfil');
  }

  const role = userData?.role || 'client';
  const status = userData?.status || 'pending';

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-panel border border-border rounded-2xl p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Área de Cliente
            </h1>
            <p className="text-muted">
              Bienvenido a tu área personal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg border border-border rounded-xl p-6">
              <h3 className="font-semibold text-fg mb-4">Información de Usuario</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Nombre:</span>
                  <span className="text-fg font-medium">
                    {userData?.nombre || session.user?.name || 'N/A'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Email:</span>
                  <span className="text-fg font-medium">
                    {session.user?.email}
                  </span>
                </div>
                {userData?.profesion && (
                  <div className="flex justify-between">
                    <span className="text-muted">Profesión:</span>
                    <span className="text-fg font-medium">{userData.profesion}</span>
                  </div>
                )}
                {userData?.institucion && (
                  <div className="flex justify-between">
                    <span className="text-muted">Centro:</span>
                    <span className="text-fg font-medium">{userData.institucion}</span>
                  </div>
                )}
                {userData?.interes && (
                  <div className="flex justify-between">
                    <span className="text-muted">Interés:</span>
                    <span className="text-fg font-medium">{userData.interes.replace(/_/g, ' ')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted">Rol:</span>
                  <span className="text-accent font-medium uppercase">
                    {role}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-bg border border-border rounded-xl p-6">
              <h3 className="font-semibold text-fg mb-4">Estado de Cuenta</h3>
              <div className="space-y-2 text-sm text-muted">
                <p>✅ Autenticado con Google</p>
                <p>📧 Email verificado</p>
                <p>{role === 'admin' ? '🔑' : '🎓'} Rol: {role === 'admin' ? 'Administrador' : 'Cliente'}</p>
                <p>{status === 'active' ? '🟢 Cuenta activa' : '🟡 Cuenta pendiente'}</p>
              </div>
            </div>
          </div>

          <div className="bg-bg border border-border rounded-xl p-6">
            <h3 className="font-semibold text-fg mb-4">Materiales y Recursos</h3>
            <p className="text-muted text-sm mb-4">
              Próximamente encontrarás aquí tus materiales didácticos, cursos y descargas.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4 opacity-50">
                <h4 className="font-medium text-fg mb-1">📘 Cursos</h4>
                <p className="text-xs text-muted">Próximamente</p>
              </div>
              <div className="border border-border rounded-lg p-4 opacity-50">
                <h4 className="font-medium text-fg mb-1">📄 Materiales PDF</h4>
                <p className="text-xs text-muted">Próximamente</p>
              </div>
              <div className="border border-border rounded-lg p-4 opacity-50">
                <h4 className="font-medium text-fg mb-1">📝 Prompts</h4>
                <p className="text-xs text-muted">Próximamente</p>
              </div>
              <div className="border border-border rounded-lg p-4 opacity-50">
                <h4 className="font-medium text-fg mb-1">📊 Progreso</h4>
                <p className="text-xs text-muted">Próximamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
