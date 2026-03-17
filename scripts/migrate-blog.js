const admin = require('firebase-admin');
const sa = require('/Users/javierbenitez/Downloads/javiersoy-v2-firebase-adminsdk-fbsvc-0ad9158213.json');

admin.initializeApp({ credential: admin.credential.cert(sa) });
const db = admin.firestore();

const articles = [
  {
    slug: 'agentes-ia-ensenanza',
    title: 'Agentes de IA: El futuro de la enseñanza personalizada',
    excerpt: 'Una visión general de cómo los agentes de IA pueden personalizar la educación, con aplicaciones prácticas para la enseñanza de lenguas.',
    tags: ['Agentes IA', 'IA', 'Educación'],
    publishedAt: '2026-01-04T00:00:00.000Z',
    readingTime: 7,
    content: `## ¿Qué son los agentes de IA?

Un sistema autónomo capaz de realizar tareas complejas independientemente. A diferencia de chatbots convencionales, pueden planificar múltiples pasos, usar herramientas, recordar contexto a largo plazo y mejorar con el tiempo.

## Diferencia entre chatbot y agente

Los chatbots responden directamente a consultas. Los agentes pueden buscar estándares, diseñar secuencias de clases, crear materiales y generar evaluaciones completas.

## Tres tipos de agentes educativos

1. **Tutor**: Guía paso a paso con feedback personalizado
2. **Creador de materiales**: Genera recursos didácticos completos
3. **Evaluador**: Corrige tareas y sigue progreso estudiantil

## Herramientas para crear agentes

- ChatGPT Custom Instructions (principiante)
- Claude Projects
- OpenAI GPTs
- LangChain (avanzado)
- AutoGPT (avanzado)

## Limitaciones actuales

Alucinaciones, contexto limitado, falta de verdadera comprensión semántica y dependencia de calidad del prompt.

## Futuro esperado

Tutores personales 24/7, adaptación curricular en tiempo real e identificación automática de lagunas de aprendizaje, manteniendo la colaboración profesor-agente como eje central del proceso educativo.`,
  },
  {
    slug: 'etica-ia-educacion',
    title: 'Ética de la IA en educación: guía para uso responsable',
    excerpt: 'Los dilemas éticos que plantea la IA en el aula: sesgos, privacidad, integridad académica y brecha digital. Una guía práctica para docentes.',
    tags: ['Ética', 'IA', 'Educación'],
    publishedAt: '2026-01-11T00:00:00.000Z',
    readingTime: 8,
    content: `## Introducción

La inteligencia artificial transforma la educación. Los docentes enfrentan dilemas éticos que requieren reflexión crítica sobre cómo integrar estas herramientas responsablemente.

## 5 dilemas éticos principales

### 1. Sesgo y discriminación

Las IA contienen sesgos culturales, lingüísticos y sociales en sus datos de entrenamiento. Pueden representar estereotipos de culturas hispanas y adoptar perspectivas eurocéntricas. La solución: revisar críticamente el contenido generado y añadir contextos multiculturales.

### 2. Privacidad de datos

Nunca incluir nombres reales de estudiantes en prompts. Evitar compartir datos personales o sensibles. Informar sobre políticas de privacidad de las plataformas.

### 3. Dependencia tecnológica

El riesgo: "Si los estudiantes usan IA para todo, ¿desarrollan realmente habilidades?" Usar IA como herramienta de apoyo, no como sustituto. Diseñar actividades que requieran procesamiento crítico humano.

### 4. Integridad académica

Permitir IA para lluvia de ideas, no para producto final. Exigir citación del uso de IA como herramienta. Diseñar evaluaciones que no se resuelvan únicamente con IA.

### 5. Brecha digital

No todos tienen acceso a herramientas de pago. Ofrecer alternativas gratuitas y asegurar equidad en oportunidades.

## Principios para uso ético

1. **Transparencia:** Declarar siempre cuándo se usa IA
2. **Verificación:** Revisar precisión factual
3. **Complementariedad:** IA apoya, no sustituye
4. **Equidad:** Acceso igualitario
5. **Responsabilidad:** El profesor es responsable del material

## Conclusión

La IA no es buena ni mala; requiere guía ética. La responsabilidad docente es modelar uso responsable, enseñar pensamiento crítico y asegurar que la tecnología potencie el aprendizaje humano sin reemplazarlo.`,
  },
  {
    slug: 'prompt-engineering-basico',
    title: 'Prompt engineering básico para educadores',
    excerpt: 'Introducción a la estructuración de prompts, frameworks útiles y ejemplos de creación de material didáctico. Para docentes que quieren empezar.',
    tags: ['Prompts', 'Educación', 'IA', 'ELE'],
    publishedAt: '2026-01-18T00:00:00.000Z',
    readingTime: 12,
    content: `## Introducción

La inteligencia artificial conversacional puede transformar la enseñanza de español, pero requiere dominar el prompt engineering: "el arte de formular instrucciones precisas a la IA." No es un concepto técnico complejo, sino aprender a solicitar claramente lo que necesitamos.

## ¿Qué es un prompt y por qué importa?

Un prompt es la instrucción dirigida a sistemas de IA. La diferencia entre obtener contenido genérico e inutilizable versus material perfectamente adaptado depende de cómo estructuramos nuestra solicitud.

## La anatomía de un prompt efectivo

Cuatro componentes fundamentales:

1. **Rol o contexto:** Define la función de la IA — por ejemplo, "profesor experimentado especializado en estudiantes sinohablantes B1"

2. **Tarea específica:** Qué exactamente necesitamos — no "dame ejercicios de pretérito" sino "crea 5 ejercicios contrastando indefinido vs. imperfecto, nivel B1, contexto de viajes"

3. **Formato deseado:** Estructura esperada: tabla, lista, instrucciones paso a paso, con o sin claves de respuesta

4. **Restricciones:** Longitud, vocabulario permitido, nivel MCER, temática cultural

## Ejemplos comparados

**Básico:** "Hazme un ejercicio de subjuntivo"

**Optimizado:** Incluye perfil de estudiantes, contexto específico, número de ítems, formato de salida y consideraciones sobre dificultad.

## 5 Frameworks esenciales

1. **R-T-F:** Rol — Tarea — Formato (estructura básica)
2. **C-C-C:** Contexto — Condiciones — Contenido (materiales complejos)
3. **P-E-P:** Problema — Ejemplo — Prevención (corrección de errores)
4. **I-D-O:** Input — Debrief — Output (secuencias de aprendizaje)
5. **S-A-S:** Situación — Acción — Solución (tareas comunicativas)

## Técnicas avanzadas

- **Ejemplos positivos y negativos:** Mostrar qué sí y qué no queremos
- **Personalización por perfiles:** Detallar edad, profesión, nivel de comprensión vs. producción
- **Iteración conversacional:** Refinar resultados progresivamente
- **Especificidad cultural:** Contextualizar geográficamente (latinoamericano vs. español peninsular)

## Conclusión

El prompt engineering se convierte en competencia docente esencial que multiplica la capacidad pedagógica sin sustituir la experiencia del profesor, permitiendo dedicar más tiempo a la interacción genuina con los estudiantes.`,
  },
  {
    slug: 'chatgpt-claude-profesores-ele',
    title: 'ChatGPT y Claude para profesores de ELE: guía práctica',
    excerpt: 'Comparativa práctica de ChatGPT y Claude para la enseñanza de español. Prompts efectivos, errores comunes y estrategias de integración.',
    tags: ['ChatGPT', 'Claude', 'ELE', 'Prompts'],
    publishedAt: '2026-01-25T00:00:00.000Z',
    readingTime: 12,
    content: `## Introducción

ChatGPT (OpenAI) y Claude (Anthropic) son las dos herramientas principales de IA para la enseñanza de español. Saber cuándo usar cada una puede transformar la práctica docente.

## Diferencias clave

**ChatGPT** destaca por velocidad y creatividad, aunque puede inventar información. **Claude** ofrece mayor precisión, reflexión profunda y un contexto más largo (200k tokens vs. 128k de ChatGPT).

## Cinco usos prácticos

1. **Generación de materiales contextualizados** con situaciones reales comunicativas
2. **Corrección de textos** con análisis metalingüístico y actividades de refuerzo
3. **Creación de diálogos auténticos** con registro y fórmulas naturales
4. **Adaptación de niveles** según el Marco Común Europeo de Referencia
5. **Diseño de actividades comunicativas** que requieran interacción real

## Prompts por nivel

El artículo proporciona ejemplos específicos para A1-A2, B1-B2 y C1, enfatizando estructuras, contexto cultural y objetivos comunicativos según cada etapa.

## Errores comunes que evitar

- Prompts vagos sin especificidad
- Falta de verificación del contenido generado
- Sobrecarga de instrucciones en un solo prompt
- Descontextualización cultural
- Dependencia de una sola herramienta

## Características de prompts efectivos

Un buen prompt especifica: contexto del aula, nivel MCER del grupo, duración esperada de la actividad, formato de salida deseado y criterios de evaluación.

## Ejemplo práctico

Unidad didáctica completa sobre gastronomía española con progresión de cuatro sesiones, objetivos específicos y evaluación por rúbrica.

## Limitaciones y precauciones

Verificar siempre el contenido generado. Proteger los datos de los estudiantes. Adaptar los materiales al contexto real del aula. Usar la IA como complemento pedagógico, no como sustituto de la planificación docente.`,
  },
  {
    slug: 'prompting-como-acto-poetico',
    title: 'Prompting como acto poético: el lenguaje que crea lenguaje',
    excerpt: 'El prompt no es una orden técnica: es un acto de delegación poética. Una reflexión sobre la escritura, la autoría y la IA.',
    tags: ['Prompts', 'Creatividad', 'Escritura', 'IA', 'Poesía'],
    publishedAt: '2026-02-02T00:00:00.000Z',
    readingTime: 8,
    content: `## Introducción

El prompting tiene una naturaleza paradójica: escribimos instrucciones para que una IA genere lenguaje. El prompt no es una orden técnica; es un acto de delegación poética. ¿Qué significa escribir bien cuando el destinatario es una máquina?

## La paradoja: escribir para que una IA escriba

El lenguaje tradicional se transforma cuando debe comunicar con máquinas. Escribir un prompt implica transferir parte de la identidad lingüística del autor a un algoritmo. ¿Qué significa calidad textual en este nuevo contexto?

## El prompt como poema contemporáneo

Poesía y prompting comparten algo esencial: ambas formas utilizan el lenguaje para crear más lenguaje. Mientras los poemas evocan experiencias estéticas, los prompts generan producciones funcionales. Ambos comparten estructura, ritmo e intención.

**Anatomía de un prompt poético:**
- Contexto (situación semántica)
- Voz (posición y registro)
- Intención (tipo de respuesta esperada)
- Ritmo (cadencia sintáctica)

## Siete prompts que son (casi) poemas

1. **Educativo:** Prompt para profesor de ELE con sensibilidad cultural y pedagógica
2. **Creativo:** Reescritura poética desde la tradición hispana
3. **Analítico:** Lectura crítica que revela lo no dicho
4. **Técnico-poético:** Documentación humanizada sin perder rigor
5. **Ético-reflexivo:** Pensamiento en voz alta sobre dilemas morales
6. **Multimodal:** Dirección creativa para videopoemas
7. **Meta:** Reflexión sobre qué significa escribir prompts excelentes

## La ética de la creación delegada

La cuestión de la autoría en la era de la IA colaborativa tiene tres niveles:

- **Autor del prompt:** arquitecto de la estructura
- **Autor del resultado:** la IA ejecutante
- **Autor de la selección:** editor y curador

El riesgo principal es la mediocridad generada por prompts genéricos. La práctica consciente del prompting representa una resistencia ética a la entropía del lenguaje automatizado.

## Conclusión

Quienes mejor usan la IA tienden a ser quienes mejor escriben. El prompting es, fundamentalmente, una práctica de lenguaje que requiere exigencia y reflexión. La invitación es cultivar una relación consciente y ética con esta nueva forma de escritura.`,
  },
  {
    slug: 'slop-papilla-digital',
    title: 'Slop: la papilla digital que atrofia nuestro pensamiento',
    excerpt: 'El "slop" es contenido fluido, convincente y barato producido a escala. Cómo el contenido de IA de baja calidad afecta a nuestros hábitos de consumo y al pensamiento crítico.',
    tags: ['IA', 'Ética', 'Cultura', 'Pensamiento crítico'],
    publishedAt: '2026-02-01T00:00:00.000Z',
    readingTime: 10,
    content: `## El meme que se hizo realidad

El concepto de "slop" describe un fenómeno digital más sutil que la desinformación tradicional. No es necesariamente falso, sino diseñado para satisfacer sin exigir pensamiento crítico. Su propósito es entrenar a los consumidores "para no ir a la fuente."

## Definiendo el "slop"

El "slop" es contenido "fluido, convincente y barato, producido a escala" que reduce la necesidad de verificación. Fluye. Convence. No molesta. Y precisamente por eso es peligroso.

## La experiencia cognitiva

El contenido generado por IA presenta una paradoja: "prosa mecánicamente perfecta con ideas malformadas." Aunque gramaticalmente superior, produce agotamiento mental debido a su homogeneidad percibida.

Dos problemas centrales:

- **Los 10.000 boles de avena:** La uniformidad estadística elimina la voz autoral
- **La cabina de piloto:** El estilo promedio no resuena auténticamente con nadie

## Las raíces psicológicas

El consumo compulsivo de contenido fácil refleja ansiedad existencial sobre enfrentarse con los propios pensamientos. Los usuarios buscan pantomima de la comunicación en lugar de conexiones profundas. James Williams lo caracteriza como "la lucha moral y política definitoria de nuestro tiempo."

## Las consecuencias políticas

El "slop" socava la infraestructura democrática al entrenar ciudadanos para no exigir pruebas. Cuando se combina con noticias falsas y distribución algorítmica, crea vulnerabilidad sistémica.

La afirmación central: "En una democracia, la verificación no es un lujo. Es infraestructura."

## El antídoto: fricción deliberada

**Fricción cognitiva:** Adoptar "lectura firme" que pregunta "¿Es posible la interpretación aquí?" antes de buscar significado.

**Fricción estructural:** Implementar el principio "FUENTE O ETIQUETA": toda afirmación debe adjuntar una fuente verificable o llevar etiqueta de opinión.

## Conclusión

El "slop" representa una elección fundamental entre comodidad que atrofia versus esfuerzo que fortalece. La decisión diaria sobre qué consumir es una decisión sobre el tipo de mentes que queremos tener y el tipo de sociedad que queremos construir.`,
  },
  {
    slug: 'mas-alla-chatgpt-claude-analisis-zai',
    title: 'Más allá de ChatGPT y Claude: análisis de z.ai para profesores',
    excerpt: 'Comparativa técnica de z.ai con ChatGPT y Claude. Aplicaciones prácticas para docentes de español, con prompts reales y una estrategia de adopción progresiva.',
    tags: ['IA', 'z.ai', 'ELE'],
    publishedAt: '2026-02-03T00:00:00.000Z',
    readingTime: 8,
    content: `## Introducción

Más allá de ChatGPT y Claude, z.ai emerge como una plataforma que merece atención, especialmente para educadores que trabajan con materiales complejos o secuencias largas.

## ¿Qué es z.ai?

z.ai es "una plataforma de agentes construida sobre modelos de lenguaje de última generación con una capa de razonamiento integrada y herramientas." No es un nuevo modelo fundacional, sino un sistema interactivo capaz de ejecutar acciones. Opera vía web y apps móviles, con modelo freemium desde aproximadamente €20/mes para las funciones Pro.

## Comparativa técnica

| Característica | z.ai | ChatGPT | Claude |
|---|---|---|---|
| Ventana de contexto | 1M tokens | 128k | 200k |
| Capacidad agéntica | Alta (nativa) | Media | Media |
| Razonamiento | Chain-of-Thought profundo | Estándar | Alto |
| Memoria | Persistente por proyecto | Por conversación | Por proyecto |

## Dónde destaca z.ai

**Coherencia en roleplay extendido:** Mantiene la coherencia del personaje a lo largo de más de 20 intercambios mejor que ChatGPT.

**Análisis de PDFs complejos:** Procesa documentos oficiales extensos de forma sistemática sin fabricar contenido.

## Limitaciones

Tiempos de respuesta más lentos por el overhead del razonamiento, curva de aprendizaje más pronunciada en la interfaz y cuotas restrictivas en el nivel gratuito para uso en clase.

## Estrategia de implementación progresiva

- **Semana 1:** Exploración libre sin compromiso
- **Semana 2:** Prueba de un caso de uso específico
- **Semana 3:** Análisis coste-beneficio real
- **Semana 4:** Integración en el flujo de trabajo

## Conclusión

z.ai justifica la inversión principalmente para educadores que diseñan currículos, hacen seguimiento del progreso de estudiantes o procesan materiales de gran extensión. Para búsquedas rápidas de sinónimos o correcciones puntuales, las alternativas gratuitas son suficientes.`,
  },
];

async function migrate() {
  console.log(`Migrando ${articles.length} artículos...`);

  for (const article of articles) {
    const doc = {
      ...article,
      author: 'Javier Benítez Láinez',
      published: true,
      createdAt: article.publishedAt,
      updatedAt: new Date().toISOString(),
    };

    await db.collection('articles').doc(article.slug).set(doc);
    console.log(`✓ ${article.slug}`);
  }

  console.log('\nMigración completada.');
  process.exit();
}

migrate().catch(err => {
  console.error(err);
  process.exit(1);
});
