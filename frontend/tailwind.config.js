/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'txtCol':'#7A7A7A',
        'txtCol2' : '#272626'
      }
    },
  },
  plugins: [],
}