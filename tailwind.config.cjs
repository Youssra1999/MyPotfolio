/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: { 
      colors: {
        primary: "#1A000E",
        secondary: "#ffffff",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#B6CEC7",
        "white-100": "#86A3C3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
