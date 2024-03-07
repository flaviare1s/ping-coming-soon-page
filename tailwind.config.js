/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Libre': ['Libre Franklin', 'sans-serif'],
      },
      colors: {
        'blue': 'hsl(223, 87%, 63%)',
        'pale-blue': 'hsl(223, 100%, 88%)',
        'light-red': 'hsl(354, 100%, 66%)',
        'gray': 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
}

