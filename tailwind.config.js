const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
          primary: "#010A13",
          secondary: "#EEF5DB",
          accent: "#e77728",
          "brand-primary": "#5e747f",
          "brand-secondary": "#ac3931",
          "black-chocolate": "#0f1108",
          "cultured": "#eff1ed",
          "cadet": "#5e747f",
          "princeton-orange": "#e77728",
          "sweet-brown": "#ac3931"
      },
      backgroundImage: (theme) => ({
        "analytics-hero": "url('/public/analytics-mountain-hero.png') no-repeat center center",
      }),
    },
  },
  plugins: [],
});