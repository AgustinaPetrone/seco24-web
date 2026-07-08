/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        seco: {
          blue: '#2B3990',
          'blue-light': '#F0F2F8',
          dark: '#1a1a1a',
        },
      },
      fontFamily: {
        display: ['InterDisplay', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
