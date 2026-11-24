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
          red: '#e0373a',
          'red-hover': '#c92a2d',
        }
      },
      fontFamily: {
        display: ['"Bowlby One"', 'Anton', 'sans-serif'],
        headline: ['Anton', '"Bowlby One"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
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
