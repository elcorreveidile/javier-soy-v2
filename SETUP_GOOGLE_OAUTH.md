# Guía de Configuración: Google OAuth

## Paso 1: Ir a Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. En el buscador, busca "APIs & Services" → "Credentials"

## Paso 2: Configurar OAuth 2.0

### 2.1 Configurar la pantalla de consentimiento

1. En el menú lateral, ve a **OAuth consent screen**
2. Selecciona **External** (para usuarios externos) y haz clic en **Create**
3. Completa la información:
   - **App name**: `Javier.soy` (o el nombre que prefieras)
   - **User support email**: tu email
   - **Developer contact email**: tu email
4. Haz clic en **Save and Continue**
5. En "Scopes", haz clic en **Save and Continue** (no necesitas agregar scopes aún)
6. En "Test users", agrega tu email si quieres probar antes de publicar
7. Haz clic en **Save and Continue**

### 2.2 Crear credenciales OAuth

1. Ve a **Credentials** en el menú lateral
2. Haz clic en **+ CREATE CREDENTIALS**
3. Selecciona **OAuth client ID**
4. Selecciona **Web application**
5. Completa:
   - **Name**: `Javier.soy Next.js`
   - **Authorized JavaScript origins**:
     - `http://localhost:3000` (desarrollo)
     - `https://javier.soy` (producción)
     - `https://v2.javier.soy` (producción v2)
   - **Authorized redirect URIs**:
     - `http://localhost:3000/api/auth/callback/google` (desarrollo)
     - `https://javier.soy/api/auth/callback/google` (producción)
     - `https://v2.javier.soy/api/auth/callback/google` (producción v2)
6. Haz clic en **Create**

### 2.3 Guardar las credenciales

Se mostrará un diálogo con:
- **Client ID**: Guárdalo (algo como `123456789-abc...apps.googleusercontent.com`)
- **Client Secret**: Haz clic en "SHOW" y guárdalo

## Paso 3: Configurar variables de entorno

Copia el **Client ID** y **Client Secret** en tu archivo `.env.local`:

```env
GOOGLE_CLIENT_ID=tu-client-id-aqui.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=tu-client-secret-aqui
```

## Paso 4: Probar la configuración

1. Asegúrate de que `.env.local` esté en la raíz del proyecto
2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Ve a `http://localhost:3000/login`
4. Haz clic en "Continuar con Google"
5. Deberías ver la pantalla de Google para seleccionar tu cuenta

## Paso 5: Verificar el callback

Después de seleccionar tu cuenta:
- Google debería redirigirte de vuelta a tu app
- NextAuth debería crear la sesión
- Deberías ser redirigido a `/clientes`

## Troubleshooting

### Error: redirect_uri_mismatch
- Verifica que hayas agregado **exactamente** las URLs en "Authorized redirect URIs"
- Incluye la ruta completa: `http://localhost:3000/api/auth/callback/google`

### Error: invalid_client
- Verifica que el `GOOGLE_CLIENT_ID` sea correcto
- Asegúrate de que no haya espacios al inicio o final

### Error: unauthorized_client
- Verifica que la aplicación OAuth esté en modo "Production" o que tu email esté en "Test users"

### Error 500 al hacer login
- Verifica que `NEXTAUTH_SECRET` esté configurado
- Puedes generar uno nuevo con: `openssl rand -base64 32`

## URLs importantes para producción

Cuando hagas deploy en Vercel, necesitarás agregar:

**Authorized JavaScript origins:**
- `https://javier.soy`
- `https://v2.javier.soy`

**Authorized redirect URIs:**
- `https://javier.soy/api/auth/callback/google`
- `https://v2.javier.soy/api/auth/callback/google`

## Recursos

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [NextAuth Google Provider](https://next-auth.js.org/providers/google)
- [Google Cloud Console](https://console.cloud.google.com/)
