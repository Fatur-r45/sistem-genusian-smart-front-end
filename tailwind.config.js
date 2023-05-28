/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A80063",
        neutral: "#FFFFFF",
        neutral2: "#B2B2B2",
        danger: "#FF0000",
      },
    },
  },
  plugins: [],
};
