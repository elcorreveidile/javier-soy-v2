# Javier.soy v2 - Sitio Dinámico con Next.js

Versión dinámica del sitio web, construida con Next.js, Firebase y NextAuth.

## 🚀 Tech Stack

- **Frontend**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: Firebase Firestore
- **Autenticación**: NextAuth.js v5
- **Pagos**: Stripe
- **Hosting**: Vercel Pro

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Rutas de autenticación
│   ├── (protected)/       # Rutas protegidas
│   │   ├── clientes/      # Área de clientes
│   │   └── admin/         # Área de administrador
│   ├── api/               # API routes
│   ├── blog/              # Blog dinámico
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Homepage
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── ui/                # Componentes UI base
│   ├── blog/              # Componentes del blog
│   ├── admin/             # Componentes admin
│   └── clientes/          # Componentes clientes
├── lib/                   # Utilidades y configs
│   ├── firebase.ts        # Firebase setup
│   ├── stripe.ts          # Stripe setup
│   └── auth.ts            # Auth helpers
├── models/                # TypeScript interfaces
│   ├── article.ts         # Article model
│   └── client.ts          # Client model
└── scripts/               # Scripts de utilidad
```

## 🔧 Setup

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configurar Environment Variables

Copia `.env.example` a `.env.local`:

```bash
cp .env.example .env.local
```

Y completa las variables:

#### Firebase (obtener de Firebase Console)
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

#### NextAuth
- `NEXTAUTH_SECRET`: Genera con `openssl rand -base64 32`

#### Google OAuth (obtener de Google Cloud Console)
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`

#### Stripe (obtener de Stripe Dashboard)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`

#### Email (opcional)
- `EMAIL_SERVER`
- `EMAIL_FROM`

### 3. Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 📦 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run migrate      # Migrar artículos desde estático
npm run verify       # Verificar migración
```

## 🌐 Deploy en Vercel

### 1. Crear Proyecto en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 2. Configurar Environment Variables en Vercel

Añade todas las variables de `.env.local` en:

`Vercel Dashboard → Project → Settings → Environment Variables`

### 3. Deploy

Automatic deployment al hacer push a la rama `main`.

## 🔥 Firestore Database Schema

### Collection: `users`
```typescript
{
  email: string;
  emailVerified: boolean;
  name: string;
  image: string;
  role: 'admin' | 'client';
}
```

### Collection: `articles`
```typescript
{
  slug: string;          // ID del documento
  title: string;
  excerpt: string;
  content: string;       // Markdown
  tags: string[];
  category: string;
  ogImage: string;
  published: boolean;
  authorId: string;
  publishedDate: string;
  createdAt: timestamp;
  updatedAt: timestamp;
}
```

### Collection: `clients`
```typescript
{
  userId: string;       // Same as users collection ID
  stripeCustomerId: string;
  subscription: 'free' | 'basic' | 'premium';
  materialesDescargados: string[];
  progresoCursos: {
    [cursoId]: {
      completado: boolean;
      progreso: number;
      ultimoAcceso: timestamp;
    }
  };
  fechaRegistro: timestamp;
}
```

### Collection: `materiales`
```typescript
{
  titulo: string;
  descripcion: string;
  tipo: 'pdf' | 'video' | 'curso';
  fileUrl: string;
  thumbnailUrl: string;
  categoria: string;
  nivelAcceso: 'free' | 'basic' | 'premium';
  orden: number;
  createdAt: timestamp;
}
```

## 📝 Plan de Migración

### Fase 1: Setup (Actual) ✅
- [x] Crear proyecto Next.js
- [x] Configurar Firebase
- [x] Configurar NextAuth
- [x] Crear estructura base

### Fase 2: Migración Contenido
- [ ] Migrar 7 artículos del blog
- [ ] Crear páginas del blog dinámico
- [ ] Verificar contenido migrado

### Fase 3: Áreas Protegidas
- [ ] Dashboard de clientes
- [ ] Dashboard de admin
- [ ] Sistema de autenticación

### Fase 4: Features Avanzadas
- [ ] Stripe integration
- [ ] Subida de materiales
- [ ] Testing completo

## 🔐 Seguridad

- Todas las rutas API están protegidas
- Autenticación con NextAuth.js
- Firestore Security Rules pendientes
- Variables de entorno en Vercel

## 📱 Features Pendientes

- [ ] Páginas de login/registro
- [ ] Dashboard clientes
- [ ] Dashboard admin
- [ ] CRUD artículos
- [ ] Stripe payments
- [ ] File uploads (Vercel Blob)

## 🚨 Rollback Plan

Si algo falla, volver al sitio estático:

```bash
# En el repositorio original (IAZ)
git checkout backup-before-migration
git push origin main
```

## 📄 Licencia

ISC
