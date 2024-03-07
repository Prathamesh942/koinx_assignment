/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "639px" }, // Define a custom breakpoint for screens smaller than or equal to 639px
      },
    },
  },
  plugins: [],
};
