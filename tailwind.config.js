/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      container:{
        center: true,
        padding:{
          DEFAULT:'1rem',
          sm:'4rem',
         
        }
      },
    },
  },
  plugins: [],
}

