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

  await adminDb.collection('users').doc(session.user.email).update({
    nombre,
    profesion,
    institucion: institucion || '',
    interes,
    profileComplete: true,
    status: 'active',
    updatedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
