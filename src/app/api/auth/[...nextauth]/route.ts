import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { authOptions } from '@/auth';

export const runtime = 'nodejs';

const { handlers } = NextAuth(authOptions);

export const { GET, POST } = handlers;
