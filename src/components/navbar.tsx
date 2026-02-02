import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="border-b border-border bg-panel/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold">
              Javier<span className="text-accent">.soy</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/blog"
                className="text-muted hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <a
                href="https://javier.soy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-accent transition-colors"
              >
                Sitio Original
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-accent text-bg text-sm font-semibold rounded-full hover:bg-fg transition-colors"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
