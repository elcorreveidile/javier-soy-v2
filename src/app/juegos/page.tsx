import Link from 'next/link';

const juegos = [
  {
    slug: 'tetris',
    nombre: 'Tetris',
    desc: 'El clásico de bloques. Encaja las piezas antes de que lleguen arriba.',
    icon: '🟦',
    controles: '← → bajar · ↑ rotar · Espacio caída rápida',
    año: '1984',
  },
  {
    slug: 'marcianitos',
    nombre: 'Marcianitos',
    desc: 'Space Invaders de toda la vida. Defiende la Tierra de los alienígenas.',
    icon: '👾',
    controles: '← → mover · Espacio disparar · P pausa · R reiniciar',
    año: '1978',
  },
];

export default function JuegosPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Archivo · Nostalgia</p>
          <h1 className="text-4xl font-bold mb-3">Juegos vintage</h1>
          <p className="text-muted text-lg">
            Los que jugaba de niño. Siguen siendo los mejores.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {juegos.map(j => (
            <Link
              key={j.slug}
              href={`/juegos/${j.slug}`}
              className="block bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group"
            >
              <div className="text-4xl mb-4">{j.icon}</div>
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-bold group-hover:text-accent">{j.nombre}</h2>
                <span className="text-xs text-muted border border-border rounded-full px-2 py-0.5">{j.año}</span>
              </div>
              <p className="text-muted text-sm mb-4">{j.desc}</p>
              <p className="text-xs text-muted/70 font-mono">{j.controles}</p>
              <div className="mt-4 text-accent text-sm group-hover:underline">Jugar →</div>
            </Link>
          ))}
        </div>

        <p className="mt-12 text-xs text-muted text-center">
          Juegos programados en JavaScript con Canvas. Sin cookies, sin tracking, sin microtransacciones.
        </p>

      </div>
    </div>
  );
}
