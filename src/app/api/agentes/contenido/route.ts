import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { adminDb } from '@/lib/firebase-admin';

const LIMITE_DEMO = 3;

const CANALES: Record<string, { nombre: string; instrucciones: string }> = {
  linkedin: {
    nombre: 'LinkedIn',
    instrucciones: 'Post profesional para LinkedIn. Máximo 250 palabras. Tono reflexivo y directo. Un párrafo de gancho, desarrollo con sustancia, cierre con pregunta o reflexión. Sin hashtags genéricos — solo 2-3 muy relevantes al final.',
  },
  instagram: {
    nombre: 'Instagram',
    instrucciones: 'Caption para Instagram. Máximo 150 palabras. Tono cercano y personal. Primer línea como gancho visual. Emojis con criterio (no en exceso). 4-6 hashtags relevantes al final separados del texto.',
  },
  newsletter: {
    nombre: 'Newsletter',
    instrucciones: 'Sección para una newsletter. Máximo 300 palabras. Tono conversacional pero con ideas sólidas. Asunto de email incluido al principio (línea: Asunto: ...). Estructura: intro, desarrollo, cierre con acción o reflexión.',
  },
  blog: {
    nombre: 'Blog',
    instrucciones: 'Borrador de artículo para blog. Máximo 400 palabras. Tono claro y con criterio. Incluye: título sugerido, introducción, 2-3 bloques de desarrollo con subtítulos, conclusión. Sin relleno — cada párrafo aporta.',
  },
};

async function generarConGroq(prompt: string): Promise<string> {
  const Groq = (await import('groq-sdk')).default;
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  const res = await groq.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    max_tokens: 800,
    messages: [{ role: 'user', content: prompt }],
  });
  const content = res.choices[0]?.message?.content;
  if (!content) throw new Error('Groq no devolvió contenido');
  return content;
}

async function generarConGemini(prompt: string): Promise<string> {
  const { GoogleGenerativeAI } = await import('@google/generative-ai');
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const res = await model.generateContent(prompt);
  return res.response.text();
}

async function generarConAnthropic(prompt: string): Promise<string> {
  const Anthropic = (await import('@anthropic-ai/sdk')).default;
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const msg = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 800,
    messages: [{ role: 'user', content: prompt }],
  });
  return (msg.content[0] as { type: string; text: string }).text;
}

async function generar(prompt: string): Promise<{ texto: string; proveedor: string }> {
  // 1. Groq (gratuito, prioritario)
  if (process.env.GROQ_API_KEY) {
    try {
      return { texto: await generarConGroq(prompt), proveedor: 'Groq' };
    } catch (e) {
      console.warn('Groq falló, intentando Gemini:', e);
    }
  }
  // 2. Gemini Flash
  if (process.env.GEMINI_API_KEY) {
    try {
      return { texto: await generarConGemini(prompt), proveedor: 'Gemini' };
    } catch (e) {
      console.warn('Gemini falló, intentando Anthropic:', e);
    }
  }
  // 3. Anthropic (fallback final)
  if (process.env.ANTHROPIC_API_KEY) {
    return { texto: await generarConAnthropic(prompt), proveedor: 'Anthropic' };
  }
  throw new Error('No hay ningún proveedor de IA configurado.');
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Debes iniciar sesión para usar esta función.' }, { status: 401 });
  }

  const email = session.user.email;
  const userRef = adminDb.collection('users').doc(email);
  const userDoc = await userRef.get();
  const usoActual: number = userDoc.data()?.demoContenidoCount ?? 0;

  if (usoActual >= LIMITE_DEMO) {
    return NextResponse.json({
      error: `Has alcanzado el límite de ${LIMITE_DEMO} demostraciones gratuitas.`,
      limite: true,
      usoActual,
    }, { status: 429 });
  }

  const { idea, canal, briefing } = await req.json();
  if (!idea?.trim() || !canal) {
    return NextResponse.json({ error: 'Faltan datos: idea y canal son obligatorios.' }, { status: 400 });
  }

  const canalConfig = CANALES[canal];
  if (!canalConfig) {
    return NextResponse.json({ error: 'Canal no válido.' }, { status: 400 });
  }

  const briefingBloque = briefing ? `
Perfil del autor:
- Audiencia habitual: ${briefing.audiencia || 'no especificada'}
- Tono de voz: ${briefing.tono || 'cercano'}
- Qué evitar: ${briefing.evitar || 'nada indicado'}

Texto de ejemplo escrito por el autor (úsalo para capturar su voz, ritmo y vocabulario):
"""
${briefing.textoEjemplo?.trim() || ''}
"""
` : '';

  const prompt = `Eres un experto en comunicación para creadores de contenido en español. Tu trabajo es transformar ideas en texto publicable, adaptado a la voz real del autor.
${briefingBloque}
Canal de destino: ${canalConfig.nombre}
Instrucciones de formato: ${canalConfig.instrucciones}

Idea o borrador del usuario:
"""
${idea.trim()}
"""

Genera el texto listo para publicar imitando la voz, el tono y el estilo del texto de ejemplo. No incluyas explicaciones ni comentarios antes o después del texto — solo el contenido.`;

  try {
    const { texto, proveedor } = await generar(prompt);
    await userRef.update({ demoContenidoCount: usoActual + 1 });
    return NextResponse.json({
      resultado: texto,
      proveedor,
      usoActual: usoActual + 1,
      restantes: LIMITE_DEMO - (usoActual + 1),
    });
  } catch (err) {
    console.error('Error generando contenido:', err);
    return NextResponse.json({ error: 'Error al generar el contenido. Inténtalo de nuevo.' }, { status: 500 });
  }
}
