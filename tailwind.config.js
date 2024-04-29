/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "c-maroon": "#5d001e",
        "c-white": "#e3e2df",
        "c-light-pink": "#e3afbc",
        "c-dark-pink": "#9a1750",
        "c-pink": "#ee4c7c",
        "c-maroon-dark": "#480017",
      },
      boxShadow: {
        "c-light": "20px 20px 60px #c195a0,-20px -20px 60px #ffc9d8",
        "c-dark": "20px 20px 60px #3d0014,-20px -20px 60px #53001a",
      },
    },
  },
  plugins: [],
};
