import NextAuth from 'next-auth';
import { FirebaseAdapter } from '@auth/firebase-adapter';
import { getAdminApp } from '@/lib/firebase';
import Google from 'next-auth/providers/google';
import Email from 'next-auth/providers/email';

export const { handlers, auth } = NextAuth({
  adapter: FirebaseAdapter(getAdminApp()),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login',
    verifyRequest: '/verify-request',
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = (user as any).role || 'client';
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // First time login - set default role
      if (user && !(user as any).role) {
        (user as any).role = 'client';
      }
      return true;
    },
  },
});

export const { GET, POST } = handlers;
