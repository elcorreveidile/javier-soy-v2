import Google from 'next-auth/providers/google';
import { adminDb } from '@/lib/firebase-admin';

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/login',
  },
  callbacks: {
    async signIn({ user }: any) {
      if (!user?.email) return false;
      try {
        const ref = adminDb.collection('users').doc(user.email);
        const doc = await ref.get();
        if (!doc.exists) {
          await ref.set({
            email: user.email,
            name: user.name || '',
            image: user.image || '',
            status: 'pending',
            role: 'client',
            profileComplete: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          });
        } else {
          // Aseguramos que profileComplete exista en documentos antiguos
          const data = doc.data()!;
          if (data.profileComplete === undefined) {
            await ref.update({ profileComplete: false });
          }
        }
      } catch (e) {
        console.error('Error creando usuario en Firestore:', e);
      }
      return true;
    },

    async redirect({ url, baseUrl }: any) {
      // Tras login, siempre al dashboard (que redirige a /perfil si hace falta)
      return baseUrl + '/dashboard';
    },

    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role || 'client';
        session.user.status = token.status || 'pending';
        session.user.profileComplete = token.profileComplete || false;
      }
      return session;
    },

    async jwt({ token, user, trigger }: any) {
      // Leer Firestore en login inicial o cuando el cliente pide update()
      if (user || trigger === 'update') {
        const email = user?.email || token.email;
        if (email) {
          try {
            const ref = adminDb.collection('users').doc(email);
            const doc = await ref.get();
            if (doc.exists) {
              const data = doc.data()!;
              token.status = data.status;
              token.profileComplete = data.profileComplete;
              token.role = data.role;
              token.email = email;
            }
          } catch (e) {
            token.status = token.status || 'pending';
          }
        }
      }
      return token;
    },
  },
};
