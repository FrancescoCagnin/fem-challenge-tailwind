/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        "mob": "375px",
        "desk": "1440px"
      },
      colors: {
        "primary-orange-1": "hsl(31, 77%, 52%)",
        "primary-cyan-1": "hsl(184, 100%, 22%)",
        "primary-cyan-2": "hsl(179, 100%, 13%)",
        "primary-bg": "hsl(0, 0%, 95%)" 
      },
      fontFamily: {
        "font-custom-1": ['Big Shoulders Display', 'cursive'],
        "font-custom-2": ['Lexend Deca', 'sans-serif']
      },

      fontSize: {
        "custom-h1": "2.5rem"
      }
    },
  },
  plugins: [],
}
