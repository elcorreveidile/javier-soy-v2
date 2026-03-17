'use client';

import { useState } from 'react';

type User = {
  email: string;
  nombre?: string;
  name?: string;
  profesion?: string;
  institucion?: string;
  interes?: string;
  role: string;
  status: string;
  profileComplete: boolean;
  createdAt: string;
};

const INTERES_LABEL: Record<string, string> = {
  agentes_ia: 'Agentes IA',
  ensenanza_ele: 'ELE',
  contenido: 'Contenido',
  gestion: 'Gestión',
  otro: 'Otro',
};

export default function UsersTable({ initialUsers }: { initialUsers: User[] }) {
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState<string | null>(null);

  const filtered = users.filter(u => {
    if (!u.email) return false;
    if (!filter) return true;
    return (
      u.email.includes(filter) ||
      (u.nombre || u.name || '').toLowerCase().includes(filter.toLowerCase())
    );
  });

  async function update(email: string, field: string, value: string) {
    setLoading(`${email}-${field}`);
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, field, value }),
      });
      if (!res.ok) throw new Error();
      setUsers(prev =>
        prev.map(u => u.email === email ? { ...u, [field]: value } : u)
      );
    } catch {
      alert('Error al actualizar');
    } finally {
      setLoading(null);
    }
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por email o nombre..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="w-full max-w-sm bg-bg border border-border rounded-lg px-4 py-2 text-sm text-fg focus:outline-none focus:border-accent"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-muted text-left">
              <th className="pb-3 pr-4 font-medium">Usuario</th>
              <th className="pb-3 pr-4 font-medium">Profesión</th>
              <th className="pb-3 pr-4 font-medium">Interés</th>
              <th className="pb-3 pr-4 font-medium">Registro</th>
              <th className="pb-3 pr-4 font-medium">Rol</th>
              <th className="pb-3 font-medium">Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(u => {
              const displayName = u.nombre || u.name || '—';
              const date = new Date(u.createdAt).toLocaleDateString('es-ES', {
                day: '2-digit', month: 'short', year: 'numeric'
              });
              return (
                <tr key={u.email} className="border-b border-border/50 hover:bg-bg/50 transition-colors">
                  <td className="py-3 pr-4">
                    <div className="font-medium text-fg">{displayName}</div>
                    <div className="text-muted text-xs">{u.email}</div>
                    {!u.profileComplete && (
                      <span className="text-xs text-yellow-500">perfil incompleto</span>
                    )}
                  </td>
                  <td className="py-3 pr-4 text-muted">
                    <div>{u.profesion || '—'}</div>
                    {u.institucion && <div className="text-xs">{u.institucion}</div>}
                  </td>
                  <td className="py-3 pr-4 text-muted">
                    {u.interes ? (INTERES_LABEL[u.interes] || u.interes) : '—'}
                  </td>
                  <td className="py-3 pr-4 text-muted text-xs">{date}</td>
                  <td className="py-3 pr-4">
                    <select
                      value={u.role}
                      disabled={loading === `${u.email}-role`}
                      onChange={e => update(u.email, 'role', e.target.value)}
                      className="bg-bg border border-border rounded px-2 py-1 text-xs text-fg focus:outline-none focus:border-accent disabled:opacity-50"
                    >
                      <option value="client">client</option>
                      <option value="admin">admin</option>
                    </select>
                  </td>
                  <td className="py-3">
                    <select
                      value={u.status}
                      disabled={loading === `${u.email}-status`}
                      onChange={e => update(u.email, 'status', e.target.value)}
                      className="bg-bg border border-border rounded px-2 py-1 text-xs text-fg focus:outline-none focus:border-accent disabled:opacity-50"
                    >
                      <option value="pending">pending</option>
                      <option value="active">active</option>
                      <option value="suspended">suspended</option>
                    </select>
                  </td>
                </tr>
              );
            })}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="py-8 text-center text-muted">
                  No se encontraron usuarios
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
