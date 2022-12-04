/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background1: "url('./assets/images/background1.svg')",
        background2: "url('./assets/images/background2.svg')",
      },
    },
  },
  plugins: [],
};
