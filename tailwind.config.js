/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#404040',
          400: '#525252',
          500: '#666666',
        }
      },
      animation: {
        'wave': 'wave 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient': 'gradient 6s ease infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(20deg)' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      }
    },
  },
  plugins: [],
} 