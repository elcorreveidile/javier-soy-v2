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

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export async function POST(req: NextRequest) {
  if (!await requireAdmin()) return NextResponse.json({ error: 'No autorizado' }, { status: 403 });

  const { title, excerpt, content, tags, publishedAt, readingTime, published } = await req.json();
  if (!title || !content) return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });

  const slug = slugify(title);
  const now = new Date().toISOString();

  await adminDb.collection('articles').doc(slug).set({
    slug,
    title,
    excerpt: excerpt || '',
    content,
    tags: tags || [],
    publishedAt: publishedAt || now,
    readingTime: readingTime || 5,
    published: published ?? true,
    author: 'Javier Benítez Láinez',
    createdAt: now,
    updatedAt: now,
  });

  return NextResponse.json({ ok: true, slug });
}
