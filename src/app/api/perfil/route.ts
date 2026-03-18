import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'No autenticado' }, { status: 401 });
  }

  const { nombre, profesion, institucion, interes } = await req.json();
  if (!nombre || !profesion || !interes) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
  }

  try {
    await adminDb.collection('users').doc(session.user.email).set({
      email: session.user.email,
      nombre,
      profesion,
      institucion: institucion || '',
      interes,
      profileComplete: true,
      status: 'active',
      role: 'client',
      updatedAt: new Date().toISOString(),
    }, { merge: true });
  } catch (e) {
    console.error('Error guardando perfil:', e);
    return NextResponse.json({ error: 'Error guardando perfil' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
