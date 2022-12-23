/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        Red: '#e31837',
        lightBlue: '#f2f9fd'
      }
    },
    fontFamily:{
      Nunito: ["Nunito, sans-serif"]
    },
    container:{
      center: true,
    },
    screens:{
      sm: "640px",
      md: "768px",
      lg: "1124px",
      xl: "1124px",
      "2xl": "1124px"
    }
    
  },
  plugins: [],
}
