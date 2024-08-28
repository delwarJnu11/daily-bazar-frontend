/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#64b496",
        secondary: "#f7f7f8",
        heading: "#2b2b2d",
        content: "#7a7a7a",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
