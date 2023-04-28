/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 0 },
          '40%': { opacity: 0 },
          '60%': { opacity: 1 },
          '80%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      },
      colors: {
        fellas: '#5b5e4b'
      }
    },

    screens: {
      tablet: '640px',
      desktop: '1024px'
    }
  },

  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
