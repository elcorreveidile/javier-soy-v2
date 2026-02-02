import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="https://javier.soy"
          className="text-muted hover:text-accent text-sm"
        >
          ← Volver a javier.soy
        </Link>

        <div className="mt-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Javier.soy <span className="text-accent">v2</span>
          </h1>

          <p className="text-muted text-lg mb-8">
            Sitio dinámico con Next.js + Firebase + NextAuth
          </p>

          <div className="bg-panel border border-border rounded-2xl p-8 text-left">
            <h2 className="text-2xl font-semibold mb-4">
              🚀 Nueva Versión en Desarrollo
            </h2>

            <div className="space-y-4 text-muted">
              <p>
                Esta es la nueva versión dinámica del sitio, construida con:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-fg">Next.js 15</strong> - Framework React con App Router</li>
                <li><strong className="text-fg">Firebase Firestore</strong> - Base de datos NoSQL</li>
                <li><strong className="text-fg">NextAuth.js</strong> - Autenticación profesional</li>
                <li><strong className="text-fg">Stripe</strong> - Pagos y suscripciones</li>
                <li><strong className="text-fg">Vercel Pro</strong> - Hosting y deploy</li>
              </ul>

              <div className="mt-8 p-4 bg-bg border border-border rounded-xl">
                <h3 className="font-semibold text-fg mb-2">
                  📝 Próximos pasos:
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>✓ Configuración base completada</li>
                  <li>✓ Firebase + NextAuth configurados</li>
                  <li>→ Migrar artículos del blog</li>
                  <li>→ Crear áreas de clientes y admin</li>
                  <li>→ Implementar pagos con Stripe</li>
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="https://javier.soy/blog"
                  className="inline-block px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-fg transition-colors"
                >
                  Ver Blog Actual
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-muted">
            <p>
              Status: <span className="text-green-400">● Activo</span> ·
              Environment: <span className="text-accent">Development</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
