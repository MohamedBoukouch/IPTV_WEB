/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        titel:["Oswald","sans-serif"], 
      },
      colors: {
        primary: "#ff8033",
        secondary: "#050505",
      },
      container: {
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
        }
      }
    },
  },
  plugins: [],
}

