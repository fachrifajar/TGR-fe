/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      // container: {
      //   padding: "2rem",
      //   center: true,
      // },
    },
  },
  plugins: [],
};
