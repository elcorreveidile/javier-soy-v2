import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

interface Article {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  tags: string[];
  category: string;
  publishedDate: string;
  ogImage: string;
}

const SOURCE_DIR = path.join(__dirname, '../../IAZ/blog/articulos');
const OUTPUT_DIR = path.join(__dirname, '../migrated-articles');

// Asegurar que el directorio de output existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function migrateArticle(htmlFile: string): Promise<Article> {
  const html = fs.readFileSync(path.join(SOURCE_DIR, htmlFile), 'utf-8');
  const $ = cheerio.load(html);

  const title = $('h1').first().text().trim();
  const content = $('.article-content').html() || '';
  const excerpt = $('meta[name="description"]').attr('content') || '';
  const keywords = $('meta[name="keywords"]').attr('content') || '';
  const tags = keywords ? keywords.split(',').map(t => t.trim()) : [];
  const category = $('meta[property="article:section"]').attr('content') || '';
  const publishedDate = $('meta[property="article:published_time"]').attr('content') || '';
  const ogImage = $('meta[property="og:image"]').attr('content') || '';

  const slug = htmlFile.replace('.html', '');

  const article: Article = {
    title,
    slug,
    content,
    excerpt,
    tags,
    category,
    publishedDate,
    ogImage,
  };

  // Guardar como JSON para verificación
  const outputFile = path.join(OUTPUT_DIR, `${slug}.json`);
  fs.writeFileSync(outputFile, JSON.stringify(article, null, 2), 'utf-8');

  return article;
}

async function main() {
  console.log('🚀 Iniciando migración de artículos...\n');
  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  const htmlFiles = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.html'));

  console.log(`📄 Encontrados ${htmlFiles.length} archivos HTML\n`);

  const articles: Article[] = [];

  for (const file of htmlFiles) {
    try {
      console.log(`Procesando: ${file}`);
      const article = await migrateArticle(file);
      articles.push(article);
      console.log(`  ✓ Título: ${article.title}`);
      console.log(`  ✓ Tags: ${article.tags.join(', ')}`);
      console.log(`  ✓ Content length: ${article.content.length} chars\n`);
    } catch (error) {
      console.error(`  ✗ Error migrando ${file}:`, error);
    }
  }

  // Guardar índice de todos los artículos
  const indexFile = path.join(OUTPUT_DIR, 'index.json');
  fs.writeFileSync(indexFile, JSON.stringify(articles, null, 2), 'utf-8');

  console.log('✅ Migración completada!');
  console.log(`\n📊 Resultado:`);
  console.log(`  Total artículos: ${articles.length}`);
  console.log(`  Archivos guardados en: ${OUTPUT_DIR}`);
  console.log('\n📝 Próximo paso: Revisar los archivos JSON y luego ejecutar el script de subida a Firestore');
}

main().catch((error) => {
  console.error('❌ Error en migración:', error);
  process.exit(1);
});
