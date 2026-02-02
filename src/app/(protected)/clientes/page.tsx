export default function ClientesPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            👋 Hola, Cliente
          </h1>
          <p className="text-muted text-lg">
            Bienvenido a tu área de clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="text-accent text-3xl mb-2">📚</div>
            <h3 className="text-xl font-semibold mb-1">Materiales</h3>
            <p className="text-muted text-sm mb-4">Accede a recursos didácticos</p>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted">materiales disponibles</p>
          </div>

          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="text-accent text-3xl mb-2">📥</div>
            <h3 className="text-xl font-semibold mb-1">Descargas</h3>
            <p className="text-muted text-sm mb-4">Materiales descargados</p>
            <div className="text-3xl font-bold">0</div>
            <p className="text-sm text-muted">descargas totales</p>
          </div>

          <div className="bg-panel border border-border rounded-2xl p-6">
            <div className="text-accent text-3xl mb-2">⭐</div>
            <h3 className="text-xl font-semibold mb-1">Suscripción</h3>
            <p className="text-muted text-sm mb-4">Plan actual</p>
            <div className="text-3xl font-bold text-accent">Free</div>
            <p className="text-sm text-muted">mejora tu plan</p>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            🎓 Materiales Disponibles
          </h2>

          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold mb-2">
              En construcción
            </h3>
            <p className="text-muted mb-6">
              Próximamente tendrás acceso a materiales exclusivos
            </p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-fg transition-colors"
            >
              Volver al inicio
            </a>
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
