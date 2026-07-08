import { defineConfig } from 'astro/config';

export default defineConfig({
  // URL de producción: se usa para generar URLs absolutas (canonical,
  // Open Graph, JSON-LD). ⚠️ [PENDIENTE Fase 5] Actualizar con el dominio
  // real del deploy (Cloudflare Pages / Vercel). El preview de WhatsApp
  // necesita que esta URL coincida con donde se publique el sitio.
  site: 'https://seco24-web.pages.dev',
});
