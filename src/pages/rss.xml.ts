import { getCollection, type CollectionEntry } from 'astro:content';

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, character => {
    const entities: Record<string, string> = {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;',
    };
    return entities[character];
  });

export async function GET(context: { site: URL }) {
  const articulos = await getCollection('articulos');
  const items = articulos
    .sort(
      (a: CollectionEntry<'articulos'>, b: CollectionEntry<'articulos'>) =>
        b.data.date.valueOf() - a.data.date.valueOf(),
    )
    .map((article: CollectionEntry<'articulos'>): string => {
      const link = new URL(`/articulos/${article.slug}/`, context.site).href;
      return `
    <item>
      <title>${escapeXml(article.data.title)}</title>
      <description>${escapeXml(article.data.description)}</description>
      <pubDate>${article.data.date.toUTCString()}</pubDate>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Fundamento Jurídico</title>
    <description>Análisis jurídico especializado en derecho corporativo, compliance y nuevas tecnologías.</description>
    <link>${escapeXml(context.site.href)}</link>
    <language>es-PE</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}