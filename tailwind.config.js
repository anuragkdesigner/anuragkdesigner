/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: {
          DEFAULT: '#7F011F',
          dark: '#630018',
          light: '#960226',
        },
        sand: {
          DEFAULT: '#F5EBD0',
          dark: '#ebe0c2',
          light: '#fbf5e6',
        },
        charcoal: {
          DEFAULT: '#F5EBD0',
          dark: '#ebe0c2',
          surface: '#ffffff',
          border: '#e6dac0',
          muted: '#806e60',
        },
        cream: {
          DEFAULT: '#7F011F',
          muted: '#806e60',
          faint: '#a8988a',
        },
        accent: {
          red: '#7F011F',
          'red-hover': '#630018',
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
