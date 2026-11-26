/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#f9f9f8',
          dark: '#f2f1ed',
          surface: '#ffffff',
          border: '#e2dfd7',
          muted: '#525866',
        },
        cream: {
          DEFAULT: '#0d0e12',
          muted: '#525866',
          faint: '#858c9b',
        },
        accent: {
          red: '#0d0e12',
          'red-hover': '#242833',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        script: ['Caveat', 'cursive'],
        mono: ['monospace'],
      },
      maxWidth: {
        site: '1400px',
      }
    },
  },
  plugins: [],
}
