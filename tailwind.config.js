/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      Outfit: ["Outfit", "sans-serif"],
      Young: ["Young Serif", "sans-serif"],
    },
    screens: {
      sm: "375px",
      // => @media (min-width: 576px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
