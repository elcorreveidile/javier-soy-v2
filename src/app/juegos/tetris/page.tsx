import Link from 'next/link';

export default function TetrisPage() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4 flex items-center justify-between">
          <Link href="/juegos" className="text-sm text-muted hover:text-accent transition-colors">← Juegos</Link>
          <span className="text-xs text-muted font-mono">← → bajar · ↑ rotar · Espacio caída rápida</span>
        </div>
        <h1 className="text-2xl font-bold mb-4">🟦 Tetris</h1>
        <div className="bg-black rounded-2xl overflow-hidden border border-border" style={{ height: '600px' }}>
          <iframe
            src="/juegos/tetris.html"
            className="w-full h-full border-0"
            title="Tetris"
          />
        </div>
      </div>
    </div>
  );
}
