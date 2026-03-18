'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/ia',        label: 'IA' },
  { href: '/docencia',  label: 'Docencia' },
  { href: '/creacion',  label: 'Creación' },
  { href: '/blog',      label: 'Blog' },
  { href: '/archivo',   label: 'Archivo' },
  { href: '/activismo', label: 'Activismo' },
];

export function Navbar() {
  const { data: session, status } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-border bg-panel/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo + links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold shrink-0">
              Javier<span className="text-accent">.soy</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-4">
            {status === 'authenticated' && session?.user ? (
              <>
                <Link href="/dashboard" className="hidden sm:block text-sm text-muted hover:text-accent transition-colors">
                  Dashboard
                </Link>
                {session.user.role === 'admin' && (
                  <Link href="/admin" className="hidden sm:block text-sm text-accent hover:opacity-80 transition-opacity font-medium">
                    Admin
                  </Link>
                )}
                <span className="hidden sm:block text-sm text-muted">
                  {session.user.name?.split(' ')[0] || session.user.email}
                </span>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="text-sm text-muted hover:text-accent transition-colors cursor-pointer"
                >
                  Salir
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm text-muted hover:text-accent transition-colors">
                  Entrar
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-accent text-bg text-sm font-semibold rounded-full hover:opacity-90 transition-colors"
                >
                  Registrarse
                </Link>
              </>
            )}

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-muted hover:text-accent transition-colors ml-2"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Menú"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border mt-4 pt-4 pb-2 flex flex-col gap-3">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-muted hover:text-accent transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
            {status === 'authenticated' && (
              <>
                <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="text-muted hover:text-accent text-sm">
                  Dashboard
                </Link>
                {session?.user?.role === 'admin' && (
                  <Link href="/admin" onClick={() => setMenuOpen(false)} className="text-accent text-sm font-medium">
                    Admin
                  </Link>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
