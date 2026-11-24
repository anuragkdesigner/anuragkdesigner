/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#FBFBF9',
          subtle: '#F3F2ED',
          card: '#FFFFFF',
          elevated: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#17191C',
          secondary: '#4D535A',
          tertiary: '#767E87',
          faint: '#A2A9B2',
        },
        stroke: {
          subtle: '#E8E7E0',
          DEFAULT: '#DDDBD2',
          strong: '#C2BFB4',
        },
        studio: {
          rust: '#C0532E',
          ochre: '#B46C1E',
          petrol: '#1E4750',
          sage: '#3B6B55',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'],
        display: ['Newsreader', 'Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
