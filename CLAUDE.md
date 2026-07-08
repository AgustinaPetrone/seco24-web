# SECO24 — Sitio web

## Qué es este proyecto
Landing page para **Seco24**, un emprendimiento familiar de Uruguay que soluciona problemas de humedad en paredes interiores mediante la colocación de placas de yeso decorativas (antihumedad). El diferencial de la marca está en su nombre: **el trabajo queda listo en 24 horas**.

La web NO es un e-commerce. Es una web de confianza y conversión: su único objetivo es que quien la visite pida un presupuesto por WhatsApp.

## El negocio
- **Servicio:** colocación de placas de yeso sobre paredes con humedad (debajo de ventanas, detrás de muebles, paredes exteriores que traspasan humedad, etc.). La placa cubre y trata la pared, y además queda decorativa.
- **Diseños de placas disponibles:** ladrillo/piedra rústica, símil madera (vetas), texturado tipo revoque, piedra encastrada. Ver fotos en `/assets/placas/`.
- **Promesa central:** trabajo terminado en 24 horas.
- **Zona de cobertura:** Montevideo y alrededores (CONFIRMAR con el cliente antes de publicar).
- **Canal de venta actual:** Instagram + boca a boca. La web debe integrarse con ambos.
- **Público objetivo:** dueños de casa 30-65 años con manchas de humedad visibles que les da vergüenza mostrar o que dañan sus muebles/salud. Buscan solución rápida, limpia y sin obra grande.

## Identidad de marca
- **Nombre:** Seco24 (siempre junto, la "24" es parte del nombre).
- **Tagline:** "Trabajo listo en 24 horas".
- **Colores:** azul institucional profundo (extraer el hex exacto del logo en `/assets/logo/logo.JPG`, es aproximadamente `#2B3990`) y blanco. Se pueden derivar tintes: un azul muy claro casi blanco para fondos de sección alternos, y el azul pleno para CTAs y titulares.
- **Logos disponibles:** `/assets/logo/logo.JPG` (azul sobre blanco) y `/assets/logo/logo_blanco.jpg` (blanco sobre azul). ⚠️ Ambos son JPG con fondo: antes de usarlos en el header, generar versiones PNG con fondo transparente (o recrear el logo en SVG, ideal).
- **Personalidad:** confiable, rápido, prolijo, cercano. Español rioplatense, tuteo/voseo natural ("Pedí tu presupuesto"), sin tecnicismos.

## Stack técnico (restricción: COSTO CERO)
- **Framework:** Astro (sitio estático, rápido, excelente SEO, ideal para aprender). Alternativa aceptable: HTML/CSS/JS vanilla. NO usar Next.js con backend ni nada que requiera servidor.
- **Estilos:** Tailwind CSS.
- **Hosting:** Cloudflare Pages o GitHub Pages o Vercel (todos gratis para sitios estáticos). Deploy automático desde la rama `main`.
- **Formulario de contacto:** SIN backend. El botón "Pedir presupuesto" arma un mensaje pre-cargado y abre WhatsApp con `https://wa.me/598XXXXXXXX?text=...` (número real: pedirlo al dueño, usar placeholder mientras tanto). Opcional futuro: Formspree free tier.
- **Analytics:** Cloudflare Web Analytics o Vercel Analytics (gratis) — nada de Google Analytics con cookies para evitar banner de consentimiento.
- **Dominio:** arrancar con el subdominio gratis del hosting. Dominio propio (~USD 12/año) queda como decisión futura del cliente.
- **Prohibido:** cualquier dependencia paga, CMS pago, librerías con licencia comercial.

## Estructura de la página (una sola página, secciones ancladas)
1. **Header fijo:** logo + navegación por anclas + botón WhatsApp siempre visible. En mobile, click-to-call/WhatsApp prominente.
2. **Hero:** la promesa. Titular sobre la humedad resuelta en 24 horas + foto de un "después" impactante + CTA "Pedí tu presupuesto por WhatsApp". El hero es la tesis de la página.
3. **Antes / Después (SECCIÓN ESTRELLA):** slider interactivo de comparación (arrastrar una barra vertical para revelar antes/después). Usar los pares de `/assets/trabajos/`. Este es el elemento firma de la web: invertir el esfuerzo de diseño acá.
4. **Cómo funciona:** 4 pasos — (1) Nos escribís por WhatsApp con una foto de tu pared, (2) Coordinamos visita y presupuesto, (3) Colocamos las placas, (4) En 24 horas tu pared queda seca y renovada.
5. **Diseños de placas:** galería con las texturas disponibles (ladrillo, madera, revoque, piedra). Fotos en `/assets/placas/`.
6. **Por qué placas de yeso:** beneficios cortos — chau manchas de humedad, sin obra húmeda ni escombros, resultado decorativo, rápido.
7. **Testimonios:** placeholder por ahora (el cliente va a conseguir 2-3 testimonios reales de clientes; NO inventar testimonios falsos).
8. **Zona de cobertura + contacto:** zona que cubren, link a Instagram, botón WhatsApp grande.
9. **Footer:** logo blanco sobre azul, Instagram, WhatsApp.
10. **Flotante:** botón de WhatsApp fijo abajo a la derecha, visible en toda la página.

## Dirección de diseño (para que no parezca template genérico)
- El **elemento firma** es el slider antes/después: grande, protagonista, con la barra de arrastre en el azul de marca. Todo lo demás, sobrio y prolijo.
- Paleta derivada de la marca: azul profundo (~#2B3990), blanco, un azul hielo muy claro para alternar fondos de sección, y un gris cálido para texto secundario. NO usar cremas/terracotas ni fondos negros con acentos ácidos.
- Tipografía: display sans geométrica y contundente que dialogue con el logo (p. ej. una sans bold condensada para titulares) + una sans legible y neutra para el cuerpo. Definir escala tipográfica clara.
- El motivo del "24" y el reloj del logo pueden aparecer como detalle sutil (p. ej. en la sección "cómo funciona"), sin sobrecargar.
- Mobile-first obligatorio: la mayoría del tráfico vendrá de Instagram en el celular.
- Accesibilidad de base: foco visible, contraste AA, `prefers-reduced-motion` respetado.

## SEO local (importa mucho)
- Title y meta description con las palabras que la gente busca: "humedad en paredes", "placas antihumedad", "tratamiento de humedad Montevideo".
- Una sola H1 en el hero. Jerarquía de headings correcta.
- Schema.org `LocalBusiness` en JSON-LD.
- Open Graph con una imagen de antes/después para que se vea bien al compartir por WhatsApp (crítico: la web se va a compartir por WhatsApp más que por cualquier otro canal).
- Textos con contenido real y sustancioso (apuntar a 600-800 palabras totales en la página).
- `alt` descriptivo en todas las imágenes ("pared con mancha de humedad antes del tratamiento", etc.).

## Assets
- `/assets/logo/` → logo.JPG (azul s/ blanco), logo_blanco.jpg (blanco s/ azul)
- `/assets/placas/` → placas_1.jpeg (símil madera), placas_2.jpeg (texturado revoque), placas_3.jpeg (piedra encastrada)
- `/assets/trabajos/` → pares antes/después: (antes_trabajo1.png, despues_trabajo1.jpg) y (puertaAntes_trabajo2.png, puertaDespues_trabajo2.jpg)
- ⚠️ Optimizar TODAS las imágenes antes de publicar: convertir a WebP/AVIF, redimensionar (máx ~1600px de ancho), lazy-loading salvo la del hero.
- Los textos de cada sección están redactados en `CONTENIDO.md` — usarlos, no inventar copy nuevo.

## Datos pendientes de confirmar con el dueño (usar placeholders visibles tipo [PENDIENTE] mientras tanto)
- Número de WhatsApp del negocio
- Zona exacta de cobertura
- Usuario exacto de Instagram
- Alcance real de la promesa "24 horas" (¿aplica a cualquier tamaño de pared?)
- 2-3 testimonios reales
