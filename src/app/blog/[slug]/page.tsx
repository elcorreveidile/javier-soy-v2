import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <div className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-muted">
            <li><Link href="/" className="hover:text-accent">Inicio</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-accent">Blog</Link></li>
            <li>/</li>
            <li className="text-fg">Artículo</li>
          </ol>
        </nav>

        <header className="mb-12">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">
              Inteligencia Artificial
            </span>
          </div>

          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Título del Artículo de Ejemplo
          </h1>

          <p className="text-xl text-muted mb-6">
            Este es un extracto o descripción breve del artículo que describe el contenido principal del mismo...
          </p>

          <div className="flex items-center gap-6 text-sm text-muted">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-bg font-bold">
                JB
              </div>
              <div>
                <p className="text-fg font-medium">Javier Benítez Láinez</p>
                <p className="text-xs">Autor</p>
              </div>
            </div>
            <span>•</span>
            <span>{new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
            <span>•</span>
            <span>10 min lectura</span>
          </div>
        </header>

        <div className="mb-12 aspect-video bg-panel border border-border rounded-2xl flex items-center justify-center">
          <span className="text-8xl">🖼️</span>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-8 mb-8">
          <div className="prose prose-invert max-w-none">
            <h2>Introducción</h2>
            <p>
              Este es el contenido del artículo. Aquí iría el texto completo del artículo con
              toda la información relevante sobre el tema.
            </p>

            <h3>Subsección de ejemplo</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <blockquote>
              "Una cita destacada del artículo que resalte un punto importante."
            </blockquote>

            <h2>Otra sección principal</h2>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>

            <h3>Puntos clave</h3>
            <ul>
              <li>Punto importante número uno</li>
              <li>Punto importante número dos</li>
              <li>Punto importante número tres</li>
            </ul>

            <h2>Conclusión</h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Etiquetas</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-bg border border-border rounded-full text-sm hover:border-accent cursor-pointer transition-colors">
              #IA
            </span>
            <span className="px-3 py-1 bg-bg border border-border rounded-full text-sm hover:border-accent cursor-pointer transition-colors">
              #Educación
            </span>
            <span className="px-3 py-1 bg-bg border border-border rounded-full text-sm hover:border-accent cursor-pointer transition-colors">
              #Prompts
            </span>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-bg text-xl font-bold shrink-0">
              JB
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Javier Benítez Láinez
              </h3>
              <p className="text-muted mb-4">
                Profesor de ELE y entusiasta de la Inteligencia Artificial. Escribo sobre
                tecnología educativa, prompts y el futuro de la enseñanza.
              </p>
              <Link
                href="/"
                className="text-accent hover:underline text-sm"
              >
                Ver todos los artículos →
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-panel border border-border rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-4">Artículos relacionados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <Link key={i} href="#" className="block group">
                <div className="bg-bg border border-border rounded-xl p-4 hover:border-accent transition-colors">
                  <h4 className="font-semibold mb-2 group-hover:text-accent">
                    Artículo relacionado {i}
                  </h4>
                  <p className="text-sm text-muted line-clamp-2">
                    Breve descripción del artículo relacionado con este contenido...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
