#!/usr/bin/env ts-node
/**
 * Script para generar un NEXTAUTH_SECRET seguro
 * Uso: npm run generate:secret
 */

import crypto from 'crypto';

function generateSecret(): string {
  return crypto.randomBytes(32).toString('base64');
}

console.log('\n🔑 Generando NEXTAUTH_SECRET...\n');
console.log('Copia esta línea en tu archivo .env.local:\n');
console.log(`NEXTAUTH_SECRET=${generateSecret()}\n`);
console.log('⚠️  Guarda este secret de forma segura. No lo compartas en repositorios públicos.\n');
