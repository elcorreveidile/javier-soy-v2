import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';
import DemoContenidoForm from '@/components/agentes/DemoContenidoForm';

export default async function AgenteDemoPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) redirect('/login?callbackUrl=/ia/agentes/demo');

  const userDoc = await adminDb.collection('users').doc(session.user.email).get();
  const usoActual: number = userDoc.data()?.demoContenidoCount ?? 0;

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-2">
          <Link href="/ia/agentes" className="text-sm text-muted hover:text-accent transition-colors">← Agentes de IA</Link>
        </div>

        <div className="mb-10">
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wider">Demo · Agente 02</p>
          <h1 className="text-4xl font-bold mb-3">Agente de contenido</h1>
          <p className="text-lg text-muted mb-4">
            Transforma tu idea en texto publicable adaptado al canal. 3 demos gratuitas por usuario.
          </p>

          <div className="flex flex-wrap gap-2">
            {['LinkedIn', 'Instagram', 'Newsletter', 'Blog'].map(c => (
              <span key={c} className="px-2 py-1 bg-panel border border-border rounded-full text-xs text-muted">{c}</span>
            ))}
          </div>
        </div>

        <div className="bg-bg border border-border rounded-xl p-4 mb-8 text-sm text-muted">
          <strong className="text-fg">Cómo funciona:</strong> Escribe tu idea o borrador, elige el canal y el agente genera el texto listo para publicar. Tú revisas y decides antes de publicar — el agente propone, nunca publica.
        </div>

        <DemoContenidoForm usoInicial={usoActual} />

      </div>
    </div>
  );
}
