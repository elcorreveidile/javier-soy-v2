'use client';

import { useState } from 'react';
import Link from 'next/link';

type Article = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
};

const TAG_STYLE: Record<string, { icon: string; bg: string }> = {
  'Ética':               { icon: '⚖️',  bg: 'from-violet-900/60 to-violet-800/30' },
  'Cultura':             { icon: '🎭',  bg: 'from-rose-900/60 to-rose-800/30' },
  'Pensamiento crítico': { icon: '🧠',  bg: 'from-amber-900/60 to-amber-800/30' },
  'Agentes IA':          { icon: '🤖',  bg: 'from-cyan-900/60 to-cyan-800/30' },
  'Prompts':             { icon: '✍️',  bg: 'from-indigo-900/60 to-indigo-800/30' },
  'Creatividad':         { icon: '🎨',  bg: 'from-pink-900/60 to-pink-800/30' },
  'Escritura':           { icon: '📖',  bg: 'from-emerald-900/60 to-emerald-800/30' },
  'Poesía':              { icon: '🌿',  bg: 'from-green-900/60 to-green-800/30' },
  'ELE':                 { icon: '🇪🇸',  bg: 'from-red-900/60 to-red-800/30' },
  'ChatGPT':             { icon: '💬',  bg: 'from-teal-900/60 to-teal-800/30' },
  'Claude':              { icon: '🔮',  bg: 'from-purple-900/60 to-purple-800/30' },
  'Educación':           { icon: '🎓',  bg: 'from-blue-900/60 to-blue-800/30' },
  'IA':                  { icon: '⚡',  bg: 'from-sky-900/60 to-sky-800/30' },
  'z.ai':                { icon: '🔬',  bg: 'from-orange-900/60 to-orange-800/30' },
};

function getCardStyle(tags: string[]) {
  for (const tag of tags) {
    if (TAG_STYLE[tag]) return TAG_STYLE[tag];
  }
  return { icon: '📝', bg: 'from-slate-900/60 to-slate-800/30' };
}

const PAGE_SIZE = 12;

export default function BlogList({ articles, allTags }: { articles: Article[]; allTags: string[] }) {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('Todos');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = articles.filter(a => {
    const matchesTag = activeTag === 'Todos' || a.tags.includes(activeTag);
    const matchesSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  function selectTag(tag: string) {
    setActiveTag(tag);
    setVisible(PAGE_SIZE);
  }

  return (
    <>
      {/* Search */}
      <div className="mb-6 max-w-lg mx-auto">
        <input
          type="search"
          placeholder="Buscar artículos..."
          value={search}
          onChange={e => { setSearch(e.target.value); setVisible(PAGE_SIZE); }}
          className="w-full px-5 py-3 bg-panel border border-border rounded-full text-fg focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Tag filters */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {['Todos', ...allTags].map(tag => (
          <button
            key={tag}
            onClick={() => selectTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTag === tag
                ? 'bg-accent text-bg'
                : 'bg-panel border border-border text-muted hover:border-accent'
            }`}
          >
            {TAG_STYLE[tag]?.icon && <span className="mr-1">{TAG_STYLE[tag].icon}</span>}
            {tag}
          </button>
        ))}
      </div>

      {/* Results count */}
      {(search || activeTag !== 'Todos') && (
        <p className="text-center text-muted text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? 'artículo' : 'artículos'}
          {activeTag !== 'Todos' && <> en <span className="text-fg">{activeTag}</span></>}
          {search && <> con "<span className="text-fg">{search}</span>"</>}
        </p>
      )}

      {/* Grid */}
      {shown.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map(article => {
            const { icon, bg } = getCardStyle(article.tags);
            const date = new Date(article.publishedAt).toLocaleDateString('es-ES', {
              day: 'numeric', month: 'long', year: 'numeric',
            });
            return (
              <article
                key={article.slug}
                className="bg-panel border border-border rounded-2xl overflow-hidden hover:border-accent/50 transition-colors"
              >
                <div className={`aspect-video bg-gradient-to-br ${bg} flex items-center justify-center`}>
                  <span className="text-7xl">{icon}</span>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {article.tags.slice(0, 2).map(tag => (
                      <button
                        key={tag}
                        onClick={() => selectTag(tag)}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full hover:bg-accent/20 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                    <span className="px-2 py-1 bg-bg text-muted text-xs rounded-full">
                      {article.readingTime} min
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-muted text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                  <p className="text-xs text-muted mb-4">{date}</p>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="text-accent hover:underline text-sm font-medium"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted text-lg mb-2">No hay artículos que coincidan.</p>
          <button onClick={() => { setSearch(''); setActiveTag('Todos'); }} className="text-accent hover:underline text-sm">
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Load more */}
      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible(v => v + PAGE_SIZE)}
            className="px-8 py-3 bg-panel border border-border rounded-full text-fg hover:border-accent transition-colors"
          >
            Ver más artículos ({filtered.length - visible} restantes)
          </button>
        </div>
      )}
    </>
  );
}
