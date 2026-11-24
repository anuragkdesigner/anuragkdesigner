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
          DEFAULT: '#1f2430',
          dark: '#161922',
          surface: '#272d3d',
          border: '#353c50',
          muted: '#8e96a8',
        },
        cream: {
          DEFAULT: '#f3efe4',
          muted: '#b8b4a9',
          faint: '#737068',
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
