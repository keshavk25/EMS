/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        '#2C3E50' : '#2C3E50',
        '#4CA1AF' : '#4CA1AF',
        '#e96443' : '#e96443',
        '#904e95' : '#904e95',
        '#F6416C': '#F6416C',
        '#F56217' : '#F56217',
      }
    },
  },
  plugins: [],
}