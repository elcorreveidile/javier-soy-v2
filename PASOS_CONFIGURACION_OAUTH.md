# 🚀 Configuración de Google OAuth - Guía Rápida

## ✅ Lo que ya está listo

- ✅ Archivo `.env.local` creado con las variables necesarias
- ✅ NextAuth configurado con Google provider
- ✅ Rutas de autenticación creadas (`/login`, `/register`)
- ✅ Script para generar secrets seguros
- ✅ Documentación completa en `SETUP_GOOGLE_OAUTH.md`

## 📋 Pasos que necesitas completar

### Paso 1: Obtener credenciales de Google (5-10 min)

1. **Ir a Google Cloud Console**
   - Ve a: https://console.cloud.google.com/
   - Crea o selecciona un proyecto

2. **Configurar OAuth Consent Screen**
   - Busca "OAuth consent screen" en el menú
   - Selecciona "External"
   - Completa:
     - App name: `Javier.soy`
     - User support email: tu email
   - Guarda y continúa

3. **Crear credenciales OAuth**
   - Ve a "Credentials"
   - Clic en "+ CREATE CREDENTIALS" → "OAuth client ID"
   - Application type: **Web application**
   - Name: `Javier.soy Next.js`

4. **Configurar URLs autorizadas**

   **Authorized JavaScript origins:**
   ```
   http://localhost:3000
   https://javier.soy
   https://v2.javier.soy
   ```

   **Authorized redirect URIs:**
   ```
   http://localhost:3000/api/auth/callback/google
   https://javier.soy/api/auth/callback/google
   https://v2.javier.soy/api/auth/callback/google
   ```

5. **Crear y guardar credenciales**
   - Clic en "Create"
   - **COPIA el Client ID** (ej: `123456789-abc...apps.googleusercontent.com`)
   - **COPIA el Client Secret** (clic en "SHOW")

### Paso 2: Configurar variables de entorno (2 min)

Abre el archivo `.env.local` en la raíz del proyecto y añade:

```env
# NEXTAUTH_SECRET (ya generado para ti)
NEXTAUTH_SECRET=YVpou1DXnS9MkXSx3WyXDIJYPdkRR2xmc3kXducnvo0=

# Google OAuth (reemplaza con tus credenciales)
GOOGLE_CLIENT_ID=tu-client-id-aqui.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=tu-client-secret-aqui
```

### Paso 3: Probar la configuración (2 min)

1. Inicia el servidor:
   ```bash
   npm run dev
   ```

2. Abre tu navegador en: http://localhost:3000/login

3. Haz clic en "Continuar con Google"

4. **Flujo esperado:**
   - Google te pide seleccionar tu cuenta
   - Te redirige de vuelta a la app
   - Deberías ver el dashboard de clientes

## 🔧 Troubleshooting Rápido

### Error: `redirect_uri_mismatch`
**Solución:** Verifica que las URLs en Google Cloud Console coinciden exactamente:
```
http://localhost:3000/api/auth/callback/google
```

### Error: `invalid_client`
**Solución:** Verifica que el `GOOGLE_CLIENT_ID` en `.env.local` esté completo y sin espacios.

### Error: 500 en el servidor
**Solución:**
- Asegúrate de que `.env.local` existe en la raíz del proyecto
- Verifica que `NEXTAUTH_SECRET` esté configurado
- Reinicia el servidor: `npm run dev`

## 📱 Probar en Producción

Cuando hagas deploy en Vercel, necesitarás:

1. **En Google Cloud Console**, agregar las URLs de producción:
   - Authorized origins: `https://v2.javier.soy`
   - Redirect URIs: `https://v2.javier.soy/api/auth/callback/google`

2. **En Vercel**, configurar las variables de entorno:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
   - `NEXTAUTH_SECRET` (genera uno nuevo para producción)
   - `NEXTAUTH_URL=https://v2.javier.soy`

## 🎯 Checklist

- [ ] He creado el proyecto en Google Cloud Console
- [ ] He configurado la OAuth consent screen
- [ ] He creado las credenciales OAuth 2.0
- [ ] He configurado las URLs autorizadas (localhost y producción)
- [ ] He copiado el Client ID y Client Secret
- [ ] He añadido las credenciales en `.env.local`
- [ ] He probado el login en http://localhost:3000/login
- [ ] El login funciona correctamente

## 📚 Documentación Adicional

- Guía completa: `SETUP_GOOGLE_OAUTH.md`
- NextAuth docs: https://next-auth.js.org/providers/google
- Google OAuth docs: https://developers.google.com/identity/protocols/oauth2

## 💬 ¿Necesitas ayuda?

Si encuentras algún problema:
1. Revisa los logs de la consola del navegador
2. Revisa los logs del terminal donde ejecutas `npm run dev`
3. Verifica que todas las variables en `.env.local` estén completas
4. Asegúrate de no haber commitado `.env.local` al repositorio

---

**Próximo paso:** Una vez configurado Google OAuth, podemos:
- Crear el proyecto en Vercel
- Configurar Firebase
- Implementar funcionalidad adicional
