import { auth } from '@/auth';

export async function getSession() {
  return await auth();
}

export async function getCurrentUser() {
  const session = await auth();
  return session?.user;
}

export async function requireAuth() {
  const session = await auth();
  if (!session?.user) {
    throw new Error('Unauthorized');
  }
  return session.user;
}

export async function requireAdmin() {
  const session = await auth();
  if (session?.user?.role !== 'admin') {
    throw new Error('Forbidden: Admin access required');
  }
  return session.user;
}
