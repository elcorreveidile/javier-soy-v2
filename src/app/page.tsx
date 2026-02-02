import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            Javier<span className="text-accent">.soy</span>
          </h1>
          <p className="text-2xl text-muted mb-4">
            Inteligencia Artificial y Educación ELE
          </p>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Blog sobre prompts, ChatGPT, Claude y cómo la IA está transformando la enseñanza del español
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/blog"
            className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group"
          >
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">Blog</h3>
            <p className="text-muted text-sm">
              Artículos sobre IA, prompts y educación
            </p>
          </Link>

          <Link
            href="/blog"
            className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">Recursos</h3>
            <p className="text-muted text-sm">
              Materiales didácticos y prompts útiles
            </p>
          </Link>

          <a
            href="https://javier.soy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group"
          >
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">Sobre mí</h3>
            <p className="text-muted text-sm">
              Profesor de ELE y entusiasta de la IA
            </p>
          </a>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            📰 Últimos Artículos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Link key={i} href={`/blog/articulo-${i}`} className="group">
                <div className="bg-bg border border-border rounded-xl p-5 hover:border-accent transition-colors">
                  <div className="flex gap-2 mb-3">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      IA
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-accent">
                    Artículo de ejemplo {i}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2">
                    Extracto del artículo que describe brevemente el contenido...
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/blog"
              className="inline-block px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-fg transition-colors"
            >
              Ver todos los artículos →
            </Link>
          </div>
        </div>

        <div className="bg-panel border border-accent/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            📬 Newsletter
          </h3>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            Recibe artículos sobre IA y Educación ELE directamente en tu email
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
  )
}
