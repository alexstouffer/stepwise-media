/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#ff00ff',
          secondary: '#00ffff',
          "black-chocolate": "#0f1108",
          "cultured": "#eff1ed",
          "cadet": "#5e747f",
          "princeton-orange": "#e77728",
          "sweet-brown": "#ac3931"
        },
      },
    },
  },
  plugins: [],
}
