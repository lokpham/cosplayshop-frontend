/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fdf4ff",
        secondary: "#c084fc",
        "secondary-500": "#a855f7",
        "secondary-600": "#9333ea",
        "secondary-700": "#7e22ce",
        "secondary-300": "#d8b4fe",
      },
      spacing: {
        offset_xl: "9rem",
      },
    },
  },
  plugins: [],
};
