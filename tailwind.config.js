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
        'pale-blue': '#C2D3FF',
        'light-red': '#FF5466',
        'gray': '#969696',
        'dark': '#15202A',
      },
    },
  },
  plugins: [],
}

