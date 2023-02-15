/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
    colors: {
      black: "#000",
      white: "#FFF",

      "zinc-900": "#282C33",
      "zinc-800": "#3A3E44",
      "zinc-400": "#898989",
      "zinc-200": "#A7A7A7",

      green: "#00F397",
      yellow: "#FFE713",
    },
    fontFamily: {
      sans: ["Fira Code", "Arial"],
    },
  },
  plugins: [],
};
