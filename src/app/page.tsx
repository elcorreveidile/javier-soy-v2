import Link from 'next/link';
import { adminDb } from '@/lib/firebase-admin';
import ContactSection from '@/components/ContactSection';

const TAG_ICON: Record<string, string> = {
  'Ética': '⚖️', 'Cultura': '🎭', 'Pensamiento crítico': '🧠',
  'Agentes IA': '🤖', 'Prompts': '✍️', 'Creatividad': '🎨',
  'Escritura': '📖', 'Poesía': '🌿', 'ELE': '🇪🇸',
  'ChatGPT': '💬', 'Claude': '🔮', 'Educación': '🎓',
  'IA': '⚡', 'z.ai': '🔬',
};

function getIcon(tags: string[]) {
  for (const tag of tags) if (TAG_ICON[tag]) return TAG_ICON[tag];
  return '📝';
}

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let snap;
  try {
    snap = await adminDb.collection('articles').orderBy('publishedAt', 'desc').limit(4).get();
  } catch {
    snap = { docs: [] };
  }

  const articles = snap.docs.map(doc => doc.data()).filter(a => a.published);

  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Hero */}
        <div className="mb-14">
          <p className="text-accent text-sm font-medium mb-4 uppercase tracking-wider">Lengua · Poesía · Docencia · IA · Cultura crítica</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Javier<span className="text-accent">.soy</span>
          </h1>
          <div className="max-w-2xl space-y-3 text-muted text-lg">
            <p>
              Escribo desde el lenguaje y contra sus inercias. Enseño español, escribo poesía, edito cultura y trabajo con inteligencia artificial no como promesa tecnológica, sino como herramienta crítica.
            </p>
            <p>
              Me interesa lo que el lenguaje hace cuando se cruza con la enseñanza, la creación y la vida cotidiana.
            </p>
          </div>
          <p className="mt-5 text-sm text-muted/70 italic">
            Este espacio no es un escaparate, es un repositorio vivo.
          </p>
        </div>

        {/* Secciones principales */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { href: '/ia',       icon: '⚡', label: 'IA',        desc: 'Formación, asesoría y blog' },
            { href: '/docencia', icon: '🎓', label: 'Docencia',  desc: 'ELE, cursos y materiales' },
            { href: '/creacion', icon: '🌿', label: 'Creación',  desc: 'Poesía y proyectos' },
            { href: '/blog',     icon: '📝', label: 'Blog',      desc: 'Artículos y reflexiones' },
          ].map(s => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-panel border border-border rounded-2xl p-5 hover:border-accent transition-colors group"
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <h3 className="font-semibold mb-1 group-hover:text-accent">{s.label}</h3>
              <p className="text-muted text-xs">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="bg-panel border border-border rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">Últimos artículos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map(article => {
              const date = new Date(article.publishedAt).toLocaleDateString('es-ES', {
                day: 'numeric', month: 'short', year: 'numeric',
              });
              return (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group">
                  <div className="bg-bg border border-border rounded-xl p-5 hover:border-accent transition-colors h-full">
                    <div className="flex gap-2 mb-3 flex-wrap">
                      {(article.tags || []).slice(0, 2).map((tag: string) => (
                        <span key={tag} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-accent line-clamp-2">
                      <span className="mr-2">{getIcon(article.tags || [])}</span>{article.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-2 mb-3">{article.excerpt}</p>
                    <p className="text-xs text-muted">{date} · {article.readingTime} min</p>
                  </div>
                </Link>
              );
            })}
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

        {/* Proyectos externos */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-5">Proyectos</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { href: 'https://jblainez.es', label: 'jblainez.es', desc: 'Web personal', icon: '🌐' },
              { href: 'https://jblainez.wordpress.com', label: 'Blog', desc: 'jblainez.wordpress.com', icon: '✍️' },
              { href: 'https://poedronomo.com', label: 'Poedrónomo', desc: 'Videopoemas, cancionemas y PoemIA', icon: '📹' },
              { href: 'https://versovivo.ai', label: 'VersoVivo', desc: 'Comunidad literaria inmersiva con IA', icon: '📱' },
              { href: 'https://diariodeuninstante.com', label: 'Diario de un Instante', desc: 'Planificación consciente cotidiana', icon: '🌱' },
              { href: 'https://olvidosdegranada.es', label: 'Olvidos de Granada', desc: 'Revista de cultura y pensamiento crítico', icon: '📰' },
              { href: 'https://instagram.com/jabelainez', label: '@jabelainez', desc: 'Instagram', icon: '📷' },
            ].map(p => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-panel border border-border rounded-xl px-4 py-3 hover:border-accent transition-colors group"
              >
                <span className="text-xl shrink-0">{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-fg group-hover:text-accent text-sm">{p.label}</p>
                  <p className="text-xs text-muted truncate">{p.desc}</p>
                </div>
                <span className="text-muted group-hover:text-accent text-sm shrink-0">→</span>
              </a>
            ))}
          </div>
        </div>

        <ContactSection />
      </div>
    </div>
  );
}
