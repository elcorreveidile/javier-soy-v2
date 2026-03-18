# javier-soy-v2 — Instrucciones para agentes

## Qué es este proyecto
Web personal de Javier Benítez Láinez (`www.javier.soy`). Next.js 15 App Router + Firebase Firestore + NextAuth v4 + Google OAuth. Desplegada en Vercel.

## Stack
- **Framework**: Next.js 15.5 (App Router, `force-dynamic` en todas las páginas)
- **Base de datos**: Firebase Firestore (Admin SDK) — colección `articles` para el blog, `users` para autenticación
- **Auth**: NextAuth v4 con Google Provider
- **Estilos**: Tailwind CSS con tema oscuro personalizado
- **Deploy**: Vercel (team: `javiers-projects-cc8068ed`, proyecto: `javier-soy-v2`)
- **Repo**: `https://github.com/elcorreveidile/javier-soy-v2.git`

## Reglas críticas de arquitectura

### Firebase Admin SDK
- **SIEMPRE** usar `export const dynamic = 'force-dynamic'` en cualquier página o layout que importe `adminDb` o use `getServerSession`
- **SIEMPRE** envolver las llamadas a `adminDb` en `try/catch` — nunca dejar que un fallo de Firebase crashee una página
- La inicialización de Firebase está en `src/lib/firebase-admin.ts` con try/catch y soporte para dos métodos:
  1. `FIREBASE_SERVICE_ACCOUNT_BASE64` (preferido) — JSON de cuenta de servicio codificado en base64
  2. Fallback: variables individuales `FIREBASE_PRIVATE_KEY`, `FIREBASE_CLIENT_EMAIL`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- El JSON de la cuenta de servicio está en: `/Users/javierbenitez/Downloads/javiersoy-v2-firebase-adminsdk-fbsvc-0ad9158213.json`
- Para regenerar el base64: `base64 -i [archivo.json] | tr -d '\n' > /tmp/fb_base64.txt`

### Variables de entorno en Vercel
Para añadir/actualizar variables largas (como claves privadas), usar Vercel CLI para evitar truncado:
```bash
npx vercel env rm NOMBRE production
npx vercel env add NOMBRE production < /tmp/valor.txt
```
Vincular el proyecto primero con `npx vercel link` si no está vinculado.

### Páginas 'use client' con hooks de Next-Auth
Las páginas con `useSession`, `signIn`, etc. también necesitan `export const dynamic = 'force-dynamic'` aunque sean Client Components.

### API Routes
Usar `.set({ merge: true })` en lugar de `.update()` para escrituras en Firestore — así funciona aunque el documento no exista.

## Estructura de rutas principales
```
/                          → Home (artículos recientes + hero)
/blog                      → Lista de artículos con filtros
/blog/[slug]               → Artículo individual
/blog/categorias/[cat]     → Por categoría
/blog/etiquetas/[etiq]     → Por etiqueta
/blog/autores/javier-benitez-lainez → Página de autor
/ia                        → Hub de IA
/ia/agentes/demo           → Demo agente de contenido (requiere login)
/ia/asesoria               → Página de asesoría
/ia/asesoria/cuestionario  → Cuestionario autoevaluación con WhatsApp CTA
/ia/asesoria/brochure      → PDF descargable con credenciales y tarifas
/ia/portafolio             → Portafolio de proyectos con IA
/ia/talleres               → Talleres
/docencia /creacion /activismo /archivo → Páginas estáticas
/dashboard                 → Área de cliente (requiere login + perfil completo)
/perfil                    → Completar perfil tras primer login
/login /register           → Auth pages
/admin                     → Panel admin (requiere rol admin)
/admin/articulos           → Lista de artículos en Firestore
/admin/articulos/nuevo     → Crear artículo
/admin/articulos/[slug]    → Editar artículo
```

## Autenticación y roles
- Login con Google OAuth
- Tras primer login → redirige a `/perfil` para completar datos
- Tras perfil completo → redirige a `/dashboard`
- Roles: `client` (por defecto) y `admin`
- Para asignar rol admin: Firestore → colección `users` → documento `email` → campo `role: "admin"`
- El dashboard muestra bloque de acceso al panel admin solo si `role === 'admin'`

## Agente de contenido IA
- Ruta: `/ia/agentes/demo` (requiere login)
- Límite: 3 usos por usuario (campo `demoContenidoCount` en Firestore)
- Flujo 2 pasos: Briefing (audiencia, tono, evitar, texto ejemplo) → Canal + idea → Generación
- API: `POST /api/agentes/contenido` con `{ idea, canal, briefing }`
- Fallback de modelos: Groq → Gemini Flash → Anthropic
- Claves: `GROQ_API_KEY`, `GEMINI_API_KEY`, `ANTHROPIC_API_KEY`

## Blog
- Artículos en Firestore, colección `articles`
- Campos: `slug`, `title`, `excerpt`, `content` (Markdown), `tags[]`, `publishedAt`, `readingTime`, `author`, `published`
- Script de seed: `scripts/seed-article-v2.mjs`
- Renderizado con `react-markdown` + `remark-gfm`

## Diseño
- Tema oscuro con variables CSS en `globals.css`
- Fondo: foto `portada.JPEG` con `opacity: 0.12` como watermark en toda la web
- Variables de color: `--bg`, `--fg`, `--accent`, `--muted`, `--panel`, `--border`

## Pendiente / próximas features
- Sección "Materiales y Recursos" en el dashboard (cursos, PDFs, prompts, progreso)
- Newsletter funcional (actualmente el form es decorativo)
- Página de activismo con contenido real
