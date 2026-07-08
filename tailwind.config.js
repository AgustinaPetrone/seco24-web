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
          'blue-ice': '#EEF1FB', // fondos de sección alternos (azul hielo casi blanco)
          gray: '#5B5F6B', // texto secundario (gris cálido)
          dark: '#1A1A1A', // texto principal
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
