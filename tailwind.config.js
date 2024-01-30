/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter","semi-bold"],
        poppins: ["Poppins","bold"],
      },

      colors: {
        txtfont: '#1EA5FC',
      },
    },
  },
  plugins: [],
}

