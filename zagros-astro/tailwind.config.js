/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1a202c',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
