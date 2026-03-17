import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import admin from 'firebase-admin';

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, '../.env.local');

// Parse .env.local manually
const env = {};
readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const m = line.match(/^([^#=\s]+)=(.*)$/);
  if (m) env[m[1]] = m[2].replace(/^"(.*)"$/, '$1');
});

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
      clientEmail: env['FIREBASE_CLIENT_EMAIL'],
      privateKey: env['FIREBASE_PRIVATE_KEY'].replace(/\\n/g, '\n'),
    }),
  });
}

const article = {
  slug: 'como-construi-javier-soy-v2',
  title: 'Cómo construí javier.soy v2 con IA: del repositorio estático a una app completa en Next.js',
  excerpt: 'Un relato técnico y personal sobre migrar una web estática a Next.js 15, integrar Firebase, implementar agentes de IA reales y aprender que la IA no sustituye al criterio — lo amplifica.',
  author: 'Javier Benítez Láinez',
  publishedAt: new Date('2026-03-18').toISOString(),
  readingTime: 8,
  published: true,
  tags: ['ia', 'prompts', 'educacion'],
  content: `## Por qué una v2

La primera versión de javier.soy era un repositorio estático en GitHub Pages. HTML, CSS y algo de JavaScript a mano. Funcionaba, pero no crecía: cada cambio requería editar archivos a mano, no había blog real, ni autenticación, ni forma de mostrar demos interactivas.

Llegó un punto en que lo que quería contar ya no cabía en lo que tenía. Necesitaba una plataforma, no solo una página.

---

## Las decisiones técnicas

**Next.js 15 con App Router.** No fue una elección aleatoria. El App Router permite mezclar Server Components y Client Components con criterio: las páginas que no necesitan interactividad se renderizan en servidor, lo que mejora el rendimiento y el SEO sin esfuerzo extra.

**Firebase.** Para autenticación con Google (NextAuth + Firebase Admin SDK) y para Firestore como base de datos de artículos y usuarios. Sin servidor propio, sin gestión de infraestructura. El panel de admin escribe directamente en Firestore; el blog lee desde ahí.

**Tailwind CSS con tokens de diseño.** Todo el sistema visual usa variables personalizadas (\`bg\`, \`fg\`, \`accent\`, \`muted\`, \`panel\`). El resultado es un tema coherente que se puede cambiar en un solo archivo.

---

## El proceso: con IA como copiloto

Una parte significativa del desarrollo se hizo en conversación con Claude. No como generador de código en modo automático, sino como interlocutor técnico: proponer estructura, revisar decisiones, implementar componentes, detectar errores.

Lo que aprendí en el proceso:

- **La IA escribe código que funciona, pero no sabe qué quieres.** Cuanto más específico el prompt, mejor el resultado. "Haz un formulario" produce basura. "Haz un formulario de contacto en dos pasos con briefing de voz y fallback entre tres proveedores de IA" produce algo útil.

- **El criterio sigue siendo tuyo.** La IA propone; tú decides. En varias ocasiones el código generado era correcto pero no era lo que necesitaba. Reconocer eso es una habilidad, no un error del modelo.

- **La migración fue una auditoría.** Partir de 45 archivos HTML estáticos y trasladarlos a rutas de Next.js obligó a revisar cada enlace, cada página, cada fragmento de contenido. La IA aceleró el proceso; el resultado final fue más ordenado que el original.

---

## Las demos en vivo

Lo más interesante de la v2 es que no es solo una web de presentación: tiene herramientas reales.

El **agente de contenido** es un ejemplo. El usuario hace un briefing de su voz (audiencia, tono, texto de ejemplo), escribe una idea, elige el canal (LinkedIn, Instagram, newsletter, blog), y recibe texto listo para publicar. Por debajo hay tres proveedores de IA en cadena: Groq → Gemini Flash → Anthropic. Si uno falla, entra el siguiente sin que el usuario lo note.

El límite de tres demos por usuario no es una restricción arbitraria: es parte del diseño. Quiero que quien llegue aquí pruebe algo real, entienda cómo funciona, y si le interesa, hable conmigo.

---

## Lo que sigue

La web es funcional pero no está terminada. Faltan:

- Metadata SEO en todas las páginas
- Deploy estable en Vercel con dominio propio
- Panel de materiales para estudiantes en el dashboard
- Integración de pagos (Stripe) para servicios de asesoría

Lo que sí está: blog con categorías y etiquetas, perfil de autor, demos interactivas, panel de admin para publicar artículos, sistema de autenticación, agentes de IA con checkpoint humano.

---

## Conclusión

Construir esto no fue un ejercicio técnico. Fue una forma de pensar en público: qué hago, cómo lo explico, qué puedo demostrar en lugar de solo describir.

Si estás pensando en algo similar — una web que combine tu presencia personal con herramientas reales — me puedes escribir. No para que te cuente cómo se hace: para construirlo contigo.`,
};

const db = admin.firestore();
await db.collection('articles').doc(article.slug).set(article);
console.log('✓ Artículo publicado:', article.title);
process.exit(0);
