export default function AdminPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            ⚙️ Panel de Administración
          </h1>
          <p className="text-muted text-lg">
            Gestiona contenidos y usuarios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="text-accent text-3xl mb-2">📝</div>
            <h3 className="text-xl font-semibold mb-1">Artículos</h3>
            <p className="text-muted text-sm mb-4">Blog posts</p>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted">artículos publicados</p>
          </div>

          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="text-accent text-3xl mb-2">👥</div>
            <h3 className="text-xl font-semibold mb-1">Usuarios</h3>
            <p className="text-muted text-sm mb-4">Registrados</p>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted">usuarios totales</p>
          </div>

          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="text-accent text-3xl mb-2">💎</div>
            <h3 className="text-xl font-semibold mb-1">Clientes</h3>
            <p className="text-muted text-sm mb-4">Activos</p>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted">con suscripción</p>
          </div>

          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="text-accent text-3xl mb-2">📦</div>
            <h3 className="text-xl font-semibold mb-1">Materiales</h3>
            <p className="text-muted text-sm mb-4">Recursos</p>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted">materiales subidos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-panel border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              📝 Artículos Recientes
            </h2>
            <div className="text-center py-8">
              <p className="text-muted">No hay artículos aún</p>
            </div>
          </div>

          <div className="bg-panel border border-border rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4">
              👥 Usuarios Recientes
            </h2>
            <div className="text-center py-8">
              <p className="text-muted">No hay usuarios registrados aún</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-bg border border-accent/30 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 text-accent">
            🚀 Acciones Rápidas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="px-4 py-3 bg-panel border border-border rounded-lg hover:border-accent transition-colors text-left">
              ➕ Crear nuevo artículo
            </button>
            <button className="px-4 py-3 bg-panel border border-border rounded-lg hover:border-accent transition-colors text-left">
              📤 Subir material
            </button>
            <button className="px-4 py-3 bg-panel border border-border rounded-lg hover:border-accent transition-colors text-left">
              👤 Gestionar usuarios
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="px-4 py-2 text-sm text-muted hover:text-accent transition-colors"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
