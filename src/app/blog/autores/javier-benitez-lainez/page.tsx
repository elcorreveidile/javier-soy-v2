import Link from 'next/link';
import { adminDb } from '@/lib/firebase-admin';

async function getArticulos() {
  try {
    const snap = await adminDb.collection('articles').orderBy('publishedAt', 'desc').get();
    return snap.docs
      .map(d => ({ slug: d.id, ...d.data() } as {
        slug: string; title: string; excerpt: string;
        publishedAt: string; readingTime?: number; published: boolean;
      }))
      .filter(a => a.published);
  } catch {
    return [];
  }
}

export default async function AutorPage() {
  const articulos = await getArticulos();

  const credenciales = [
    { icon: '🎓', titulo: 'Licenciado en Filología Hispánica', org: 'Universidad de Granada', nota: 'Nivel 7 EQF · Nivel 3 MECES' },
    { icon: '👨‍🏫', titulo: 'Formador de Formadores', org: 'Instituto Cervantes', nota: 'Alcalá de Henares, 2018' },
    { icon: '🍎', titulo: 'Apple Teacher', org: 'Apple Inc.', nota: 'CLM Granada, 2019' },
    { icon: '📱', titulo: 'Mobile Learning', org: 'Universidad de Granada', nota: 'MOOC · 3 ECTS · 2022' },
    { icon: '🤝', titulo: 'Digitalización Aplicada B2 (Digcomp)', org: 'Min. Educación · UGT', nota: '2022' },
    { icon: '🎤', titulo: 'Ponente CIICEL 2025', org: 'Universidad de Granada', nota: '"La miniserie web como experiencia de inmersión creativa" · Sept. 2025' },
    { icon: '📚', titulo: 'IX CILE — Congreso Internacional de la Lengua Española', org: 'RAE · Instituto Cervantes', nota: 'Cádiz, 2023 · 33 h' },
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-2">
          <Link href="/blog" className="text-sm text-muted hover:text-accent transition-colors">← Volver al blog</Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl shrink-0">
              JB
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-1">Javier Benítez Láinez</h1>
              <p className="text-accent text-sm">Profesor ELE · Consultor IA · Poeta</p>
              <p className="text-muted text-sm mt-0.5">Centro de Lenguas Modernas, Universidad de Granada</p>
            </div>
          </div>

          <div className="space-y-3 text-muted text-sm leading-relaxed">
            <p>
              Profesor de Español como Lengua Extranjera (ELE) en el Centro de Lenguas Modernas de la Universidad de Granada desde 2003. Combina la docencia con la consultoría en inteligencia artificial y la escritura creativa.
            </p>
            <p>
              Su práctica docente se caracteriza por integrar la tecnología educativa de forma crítica y reflexiva, siempre con un enfoque comunicativo y centrado en el estudiante. Como consultor de IA, ayuda a centros educativos y academias a integrar herramientas como ChatGPT y Claude en sus prácticas docentes.
            </p>
            <p>
              Como poeta y editor, explora las intersecciones entre lenguaje, tecnología y cultura crítica. Ha publicado seis libros de poesía y coordina proyectos de poesía expandida que integran creación digital y palabra.
            </p>
          </div>
        </div>

        {/* Credenciales */}
        <div className="bg-panel border border-border rounded-2xl p-6 mb-8">
          <h2 className="text-sm font-medium text-muted uppercase tracking-wider mb-4">Formación y credenciales</h2>
          <div className="space-y-3">
            {credenciales.map(c => (
              <div key={c.titulo} className="flex gap-3">
                <span className="text-lg shrink-0">{c.icon}</span>
                <div>
                  <p className="text-sm font-medium text-fg">{c.titulo}</p>
                  <p className="text-xs text-accent">{c.org}</p>
                  <p className="text-xs text-muted">{c.nota}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border flex gap-3 flex-wrap">
            <Link href="/ia/asesoria/brochure" className="text-xs text-accent hover:underline">Ver brochure completo →</Link>
            <Link href="/ia/asesoria" className="text-xs text-muted hover:text-accent">Contratar asesoría</Link>
          </div>
        </div>

        {/* Artículos */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-5">Artículos ({articulos.length})</h2>
          {articulos.length === 0 ? (
            <p className="text-muted text-sm">No hay artículos disponibles.</p>
          ) : (
            <div className="space-y-4">
              {articulos.map(a => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="block bg-panel border border-border rounded-xl p-5 hover:border-accent transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-medium text-fg group-hover:text-accent">{a.title}</h3>
                    {a.readingTime && (
                      <span className="text-xs text-muted shrink-0">{a.readingTime} min</span>
                    )}
                  </div>
                  {a.excerpt && <p className="text-sm text-muted mt-1">{a.excerpt}</p>}
                  <p className="text-xs text-muted mt-2">
                    {new Date(a.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4 flex-wrap text-sm">
          <Link href="/ia/asesoria" className="text-accent hover:underline">Asesoría IA →</Link>
          <Link href="/ia/talleres" className="text-accent hover:underline">Talleres →</Link>
          <Link href="/creacion" className="text-accent hover:underline">Creación literaria →</Link>
          <Link href="/blog" className="text-muted hover:text-accent">← Todos los artículos</Link>
        </div>

      </div>
    </div>
  );
}
