/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF002E",
        secondary: "#110000",
        gradient: {
          start: "#000000",
          end: "#3C000B",
        },
      },
      borderWidth: {
        3: "3px",
        5: "5px",
      },
    },
  },
  plugins: [],
};
