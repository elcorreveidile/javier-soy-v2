import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-muted text-xl">
            Artículos sobre Inteligencia Artificial, Educación y Prompts
          </p>
        </div>

        <div className="mb-8">
          <div className="max-w-2xl mx-auto">
            <input
              type="search"
              placeholder="Buscar artículos..."
              className="w-full px-6 py-4 bg-panel border border-border rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button className="px-4 py-2 bg-accent text-bg rounded-full text-sm font-medium">
            Todos
          </button>
          <button className="px-4 py-2 bg-panel border border-border rounded-full text-sm font-medium hover:border-accent transition-colors">
            Educación
          </button>
          <button className="px-4 py-2 bg-panel border border-border rounded-full text-sm font-medium hover:border-accent transition-colors">
            Inteligencia Artificial
          </button>
          <button className="px-4 py-2 bg-panel border border-border rounded-full text-sm font-medium hover:border-accent transition-colors">
            Prompts
          </button>
          <button className="px-4 py-2 bg-panel border border-border rounded-full text-sm font-medium hover:border-accent transition-colors">
            Ética
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <article key={i} className="bg-panel border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors">
              <div className="aspect-video bg-bg/50 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                    IA
                  </span>
                  <span className="px-2 py-1 bg-bg text-muted text-xs rounded-full">
                    {i * 5} min lectura
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  Artículo de ejemplo {i}
                </h3>
                <p className="text-muted text-sm mb-4 line-clamp-3">
                  Este es un extracto del artículo que describe brevemente el contenido del mismo...
                </p>
                <Link
                  href={`/blog/articulo-${i}`}
                  className="text-accent hover:underline text-sm font-medium"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-panel border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold mb-2">
            📬 Newsletter
          </h3>
          <p className="text-muted mb-6">
            Recibe los últimos artículos sobre IA y Educación en tu email
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
  );
}
