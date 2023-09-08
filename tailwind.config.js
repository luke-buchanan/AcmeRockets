/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        papayawhip: {
          light: '#fef4e4',
          DEFAULT: '#ffefd5',
          dark: '#fee5bc'
        }
      },
      screens: {
        'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
      }
    },
  },
  plugins: [],
}

