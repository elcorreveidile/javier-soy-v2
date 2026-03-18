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
          <div className="space-y-3 text-muted text-lg max-w-2xl mb-6">
            <p>
              Nací en 1969. Cuando los marcianitos invadieron las máquinas recreativas de los bares de Estepona, yo tenía nueve años y ya me gastaba las monedas en ellos.
            </p>
            <p>
              En aquella época no había consolas en casa, ni ordenadores personales, ni nada que se le pareciera. Los videojuegos vivían en salones oscuros que olían a tabaco y a fritanga. En Estepona había dos: el Cid y los recreativos de la plaza de las Flores. Para jugar hacía falta una moneda de cinco duros y cierta habilidad para escabullirse de los mayores.
            </p>
            <p>
              El Tetris llegó después, en los ochenta, cuando ya era adolescente. También en los salones recreativos, también con monedas, también de pie frente a una pantalla enorme que nadie tenía en casa. Me quedé con la lógica: encajar lo que te cae, sin quejarte, lo más rápido posible.
            </p>
            <p className="text-base italic text-muted/70">
              Estos juegos los he reconstruido ahora, con IA, para recordar lo que sentía entonces. Son míos de otra manera.
            </p>
          </div>
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
