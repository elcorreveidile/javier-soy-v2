import Link from 'next/link';

const cursos = [
  {
    nivel: 'A2.1',
    nombre: 'La WikiClase',
    detalles: '55 h · 4 semanas',
    desc: 'Proyectos sobre rutas de tapas y series de reubicación. Aprendizaje por tareas con componente digital.',
    href: 'https://lawikiclase.com',
  },
  {
    nivel: 'B1',
    nombre: 'Intensivo 2',
    detalles: 'Nivel intermedio',
    desc: 'Consolidación comunicativa con autonomía progresiva del estudiante.',
    href: 'https://elcorreveidile.github.io/intensivo2/',
  },
  {
    nivel: 'B2.1',
    nombre: 'Producción e Interacción Oral',
    detalles: '45 h · Optativa · L-X 12:30-14:30',
    desc: 'Metodología basada en cine y actividades de interacción real.',
    href: 'https://elcorreveidile.github.io/Produccion-Oral/',
  },
  {
    nivel: 'C1',
    nombre: 'Producción e Interacción Oral',
    detalles: '16 sesiones prácticas · 3 bloques temáticos',
    desc: 'Metodología híbrida orientada a la expresión avanzada en contextos académicos y profesionales.',
    href: 'https://pio8.cognoscencia.com',
  },
  {
    nivel: 'C2',
    nombre: 'Cognoscencia',
    detalles: 'Nivel avanzado',
    desc: 'Plataforma enfocada en la conciencia lingüística y cultural del hispanohablante culto.',
    href: 'https://www.cognoscencia.com',
  },
];

const nivelColor: Record<string, string> = {
  'A2.1': 'text-green-400',
  'B1':   'text-yellow-400',
  'B2.1': 'text-orange-400',
  'C1':   'text-red-400',
  'C2':   'text-purple-400',
};

export default function DocenciaPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Docencia</p>
          <h1 className="text-5xl font-bold mb-4">Español como Lengua Extranjera</h1>
          <p className="text-xl text-muted max-w-2xl">
            Materiales, cursos y recursos para la enseñanza de ELE. Enfoque comunicativo, aprendizaje por proyectos e integración de tecnología educativa.
          </p>
          <p className="text-sm text-muted mt-3">
            Centro de Lenguas Modernas · Universidad de Granada · desde 2003
          </p>
        </div>

        {/* Cursos */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Cursos por nivel</h2>
          <div className="grid gap-4">
            {cursos.map(curso => (
              <a
                key={curso.nombre + curso.nivel}
                href={curso.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-panel border border-border rounded-xl p-6 hover:border-accent transition-colors group block"
              >
                <div className="flex items-start gap-4">
                  <span className={`font-mono font-bold text-lg shrink-0 ${nivelColor[curso.nivel] || 'text-accent'}`}>
                    {curso.nivel}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-fg group-hover:text-accent">{curso.nombre}</h3>
                    <p className="text-xs text-muted mb-2">{curso.detalles}</p>
                    <p className="text-sm text-muted">{curso.desc}</p>
                  </div>
                  <span className="text-muted group-hover:text-accent shrink-0 text-sm">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Otros programas */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href="https://elcorreveidile.github.io/DELE/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group block"
          >
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">Preparación DELE</h3>
            <p className="text-muted text-sm">
              Modelos de examen, estrategias y consejos prácticos para los niveles A1–C2 del Instituto Cervantes.
            </p>
          </a>
          <a
            href="https://clasesporzoom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-panel border border-border rounded-2xl p-6 hover:border-accent transition-colors group block"
          >
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent">Clases online</h3>
            <p className="text-muted text-sm">
              Clases particulares 1 a 1 vía Zoom. Programación flexible adaptada a tus objetivos.
            </p>
          </a>
        </div>

        {/* Materiales especializados */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Materiales especializados</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { titulo: 'Literatura ELE', desc: 'Poesía contemporánea y lectura creativa para clase de español.', href: 'https://elcorreveidile.github.io/Literatura/' },
              { titulo: 'Cultura y civilización', desc: 'Estudios culturales hispánicos integrados en el aula de ELE.', href: 'https://elcorreveidile.github.io/CCLE/' },
            ].map(m => (
              <a
                key={m.titulo}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg border border-border rounded-xl p-5 hover:border-accent transition-colors group block"
              >
                <h4 className="font-medium text-fg mb-1 group-hover:text-accent">{m.titulo} →</h4>
                <p className="text-sm text-muted">{m.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Principios pedagógicos */}
        <div className="bg-panel border border-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Enfoque pedagógico</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'La lengua como herramienta de comunicación',
              'Aprendizaje basado en proyectos y tareas',
              'Evaluación continua e integrada',
              'Tecnología al servicio del aprendiz',
              'Autonomía y responsabilidad del estudiante',
              'Integración de IA como herramienta didáctica',
            ].map(p => (
              <div key={p} className="flex items-start gap-2 text-sm text-muted">
                <span className="text-accent mt-0.5">→</span>
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-bg border border-accent/30 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">¿Quieres acceder a los materiales?</h3>
          <p className="text-muted text-sm mb-6">
            Regístrate para acceder a recursos didácticos, secuencias y materiales de clase.
          </p>
          <Link
            href="/register"
            className="inline-block px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:opacity-90 transition text-sm"
          >
            Crear cuenta gratuita →
          </Link>
        </div>

      </div>
    </div>
  );
}
