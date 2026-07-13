# TODO — Sitio web Seco24

> Instrucciones para Claude Code: trabajar fase por fase, en orden. No avanzar a la siguiente fase sin completar la anterior. Marcar cada ítem con [x] al completarlo. Leer primero `CLAUDE.md` (contexto y restricciones) y `CONTENIDO.md` (textos de cada sección).

> **Estado actual:** Fases 0-4 ✅ mergeadas en `main` + **rediseño visual** aplicado (en su PR). **Próximo: Fase 5** (deploy). ⚠️ Al deployar, actualizar `site` en `astro.config.mjs` con el dominio real (lo usan canonical/OG/JSON-LD).
> Flujo de trabajo: rama por hito → push → PR a `main` → merge. Dev server: `npm run dev` → http://localhost:4321. Ver notas de desarrollo al final de `CLAUDE.md`.

## Fase 0 — Setup del proyecto
- [x] Inicializar proyecto Astro con template mínimo (`npm create astro@latest`)
- [x] Agregar Tailwind CSS
- [x] Crear estructura de carpetas: `src/components/`, `src/assets/` (mover ahí las imágenes de `/assets/`)
- [x] Configurar los colores de marca como tokens de Tailwind (extraer hex exacto del logo)
- [x] Verificar que `npm run dev` levanta correctamente
- [x] Commit inicial

## Fase 1 — Preparación de assets
- [x] Extraer el color azul exacto del logo y documentarlo en tailwind.config (#13218C)
- [x] Generar versión del logo con fondo transparente (PNG) para el header; si es viable, vectorizarlo a SVG (logo azul + blanco transparentes; reloj vectorizado como favicon.svg)
- [x] Optimizar todas las fotos: convertir a WebP, redimensionar a máx 1600px de ancho (21MB → 972KB)
- [x] Recortar/alinear los pares antes-después para que coincidan lo mejor posible en encuadre (trabajo1 1600x900, trabajo2 1200x1600)
- [x] Crear imagen Open Graph (1200x630) con un antes/después y el logo

## Fase 2 — Estructura y contenido
- [x] Layout base: header fijo con logo + anclas + botón WhatsApp, footer azul con logo blanco
- [x] Sección Hero con titular, subtítulo y CTA de WhatsApp (textos en CONTENIDO.md)
- [x] Sección "Cómo funciona" (4 pasos)
- [x] Sección "Diseños de placas" (galería con los 4 diseños)
- [x] Sección "Por qué placas de yeso" (beneficios)
- [x] Sección "Zona y contacto" + links a Instagram y WhatsApp
- [x] Placeholder de sección Testimonios (oculta con nota hasta tener testimonios reales)
- [x] Botón flotante de WhatsApp visible en toda la página
- [x] Revisar que todo el copy salga de CONTENIDO.md

## Fase 3 — Componente estrella: slider antes/después
- [x] Componente de comparación con barra deslizable (drag con mouse y touch) → `CompareSlider.astro`
- [x] Accesible: manejable también con teclado (flechas), etiquetas ARIA (input range nativo + aria-label)
- [x] Integrar los 2 trabajos disponibles (trabajo1 living 16:9 y trabajo2 puerta 3:4)
- [x] Probar en mobile: el gesto de arrastre no se pelea con el scroll (`touch-action: pan-y`)

## Fase 4 — Pulido, SEO y performance
- [x] Title, meta description, favicon (reloj del logo en `public/favicon.svg`)
- [x] Open Graph + Twitter cards con la imagen `public/og-image.jpg` (1200x630)
- [x] JSON-LD Schema.org LocalBusiness (`HomeAndConstructionBusiness`, subtipo de LocalBusiness) en `Layout.astro`
- [x] `alt` en todas las imágenes, jerarquía de headings correcta, una sola H1 (auditado)
- [x] Lazy-loading de imágenes (hero + logo header en `eager` por estar above-the-fold; hero con `fetchpriority="high"`)
- [x] `prefers-reduced-motion` y foco visible en elementos interactivos (en `Layout.astro`); contraste AA verificado en toda la paleta
- [ ] Lighthouse 90+ en mobile → **medir sobre el sitio publicado (Fase 5)**; ya aplicadas las buenas prácticas (imágenes WebP responsive, lazy, fetchpriority, meta/OG/JSON-LD, a11y)

## Fase 5 — Deploy (gratis)
- [x] Crear repo en GitHub y pushear (repo bajo cuenta personal AgustinaPetrone; Fases 0-2 mergeadas vía PR #1)
- [ ] Conectar a Cloudflare Pages (o Vercel/GitHub Pages) con deploy automático desde `main`
- [ ] Verificar el sitio publicado en el subdominio gratuito
- [ ] Probar el link de WhatsApp con el número real desde un celular
- [ ] Compartir el link por WhatsApp y verificar que la preview (Open Graph) se vea bien

## Fase 6 — Post-lanzamiento (tareas del dueño, no de código)
- [ ] Crear ficha de Google Business Profile (gratis) con fotos, zona y link a la web
- [ ] Poner el link de la web en la bio de Instagram
- [ ] Dar de alta el sitio en Google Search Console y enviar el sitemap
- [ ] Conseguir 2-3 testimonios reales y agregarlos a la sección Testimonios
- [ ] Evaluar compra de dominio propio (ej: seco24.uy o seco24.com) si el proyecto funciona
- [ ] Sacar más fotos: placas instaladas en paredes reales, el equipo trabajando, más pares antes/después
