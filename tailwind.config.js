/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../src/images/hero.jpeg')",
      },
    },
    fontFamily: {
      cursive: ["Karumbi", "sans-serif"],
      design: ["Lexend Deca", "sans-serif"],
      cursive: ["Bell MT", "sans-serif"],
      standard: ["Satoshi", "sans-serif"],
      professional: ["Calibri, sans-serif"],
    },
  },
}
