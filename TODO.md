# TODO — Sitio web Seco24

> Instrucciones para Claude Code: trabajar fase por fase, en orden. No avanzar a la siguiente fase sin completar la anterior. Marcar cada ítem con [x] al completarlo. Leer primero `CLAUDE.md` (contexto y restricciones) y `CONTENIDO.md` (textos de cada sección).

## Fase 0 — Setup del proyecto
- [x] Inicializar proyecto Astro con template mínimo (`npm create astro@latest`)
- [x] Agregar Tailwind CSS
- [x] Crear estructura de carpetas: `src/components/`, `src/assets/` (mover ahí las imágenes de `/assets/`)
- [x] Configurar los colores de marca como tokens de Tailwind (extraer hex exacto del logo)
- [x] Verificar que `npm run dev` levanta correctamente
- [x] Commit inicial

## Fase 1 — Preparación de assets
- [ ] Extraer el color azul exacto del logo y documentarlo en tailwind.config
- [ ] Generar versión del logo con fondo transparente (PNG) para el header; si es viable, vectorizarlo a SVG
- [ ] Optimizar todas las fotos: convertir a WebP, redimensionar a máx 1600px de ancho
- [ ] Recortar/alinear los pares antes-después para que coincidan lo mejor posible en encuadre (necesario para el slider)
- [ ] Crear imagen Open Graph (1200x630) con un antes/después y el logo

## Fase 2 — Estructura y contenido
- [ ] Layout base: header fijo con logo + anclas + botón WhatsApp, footer azul con logo blanco
- [ ] Sección Hero con titular, subtítulo y CTA de WhatsApp (textos en CONTENIDO.md)
- [ ] Sección "Cómo funciona" (4 pasos)
- [ ] Sección "Diseños de placas" (galería simple con las 3 texturas)
- [ ] Sección "Por qué placas de yeso" (beneficios)
- [ ] Sección "Zona y contacto" + links a Instagram y WhatsApp
- [ ] Placeholder de sección Testimonios (oculta o con nota [PENDIENTE] hasta tener testimonios reales)
- [ ] Botón flotante de WhatsApp visible en toda la página
- [ ] Revisar que todo el copy salga de CONTENIDO.md

## Fase 3 — Componente estrella: slider antes/después
- [ ] Componente de comparación con barra deslizable (drag con mouse y touch)
- [ ] Accesible: manejable también con teclado (flechas), etiquetas ARIA
- [ ] Integrar los 2 trabajos disponibles (trabajo1 y trabajo2/puerta)
- [ ] Probar en mobile: el gesto de arrastre no debe pelearse con el scroll vertical

## Fase 4 — Pulido, SEO y performance
- [ ] Title, meta description, favicon (usar el ícono del reloj del logo)
- [ ] Open Graph + Twitter cards con la imagen creada en Fase 1
- [ ] JSON-LD Schema.org LocalBusiness
- [ ] `alt` en todas las imágenes, jerarquía de headings correcta, una sola H1
- [ ] Lazy-loading de imágenes (salvo hero), `loading="eager"` solo en hero
- [ ] Lighthouse: apuntar a 90+ en Performance, Accessibility, Best Practices y SEO en mobile
- [ ] Revisar `prefers-reduced-motion` y foco visible en elementos interactivos

## Fase 5 — Deploy (gratis)
- [ ] Crear repo en GitHub y pushear
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
