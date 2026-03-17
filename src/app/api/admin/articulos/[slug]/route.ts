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

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!await requireAdmin()) return NextResponse.json({ error: 'No autorizado' }, { status: 403 });

  const { slug } = await params;
  const body = await req.json();

  await adminDb.collection('articles').doc(slug).update({
    ...body,
    updatedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!await requireAdmin()) return NextResponse.json({ error: 'No autorizado' }, { status: 403 });

  const { slug } = await params;
  await adminDb.collection('articles').doc(slug).delete();

  return NextResponse.json({ ok: true });
}
