// Datos de contacto y negocio — fuente única de verdad (ver CONTENIDO.md)

export const WHATSAPP_NUMBER = '59899451655';
export const WHATSAPP_MESSAGE =
  'Hola Seco24! Vi la página web y tengo una pared con humedad. ¿Me pasan un presupuesto?';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const INSTAGRAM_USER = 'seco24horas';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_USER}`;

export const ZONA = 'Montevideo y Canelones';

// Meta / SEO (CONTENIDO.md)
export const SITE_TITLE =
  'Seco24 — Tratamiento de humedad en paredes con placas de yeso | Montevideo';
export const SITE_DESCRIPTION =
  'Eliminá las manchas de humedad de tu pared con placas de yeso decorativas. Sin obra, sin escombros y con el trabajo listo en 24 horas. Pedí tu presupuesto por WhatsApp.';

// PostHog (analytics). La project API key va en el cliente y es pública (no es secreta).
export const POSTHOG_KEY = 'phc_ydFKC3rqJ7uibSESdFGD2QgVFXT2jhpUEZebCAuNmvaY';
export const POSTHOG_HOST = 'https://us.i.posthog.com';
