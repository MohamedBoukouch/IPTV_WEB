/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        titel: ["Oswald", "sans-serif"], // Exemple de police personnalisée
      },
      colors: {
        primary: "#ff8033", // Couleur principale
        secondary: "#050505", // Couleur secondaire
      },
    },
  },
  plugins: [],
}
