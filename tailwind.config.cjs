const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bitter: ["Bitter", "serif"],
      },
      colors: {
        darkest: "#0d1e1c",
        lightgreen: "#EDFCD9",
        white: "#ffffff",
        dartmouth: "#245650",
        athena: "#A5D75F",
      },
      fontSize: {
        "10xl": "8.5rem",
      },
      borderRadius: {
        "4xl": "3rem",
      },
      backgroundImage: {
        "hero-image": "url('/hero_background.png')",
      },
    },
  },
  plugins: [],
};
