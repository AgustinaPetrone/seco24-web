/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        seco: {
          // Azul institucional exacto extraído del logo (/assets/logo/logo.JPG)
          blue: '#13218C',
          'blue-dark': '#0D1868', // hover / profundidad
          'blue-ice': '#EEF1FB', // fondo de sección alterno (azul hielo)
          bg: '#FBFBFE', // fondo base (blanco con tinte azul sutil)
          navy: '#151735', // footer (azul muy oscuro)
          gray: '#5B5F6B', // texto secundario
          dark: '#1A1A1A', // texto principal
        },
      },
      fontFamily: {
        // Titulares: Archivo (900). Cuerpo: Inter.
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
