import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';

async function requireAdmin() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;
  const doc = await adminDb.collection('users').doc(session.user.email).get();
  if (doc.data()?.role !== 'admin') return null;
  return session;
}

export async function PATCH(req: NextRequest) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: 'No autorizado' }, { status: 403 });
  }

  const { email, field, value } = await req.json();

  if (!email || !field || value === undefined) {
    return NextResponse.json({ error: 'Faltan parámetros' }, { status: 400 });
  }

  const allowed = ['role', 'status'];
  if (!allowed.includes(field)) {
    return NextResponse.json({ error: 'Campo no permitido' }, { status: 400 });
  }

  await adminDb.collection('users').doc(email).update({
    [field]: value,
    updatedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
