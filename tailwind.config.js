/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        m: "600px",
        md: "728px",
        lg: "984px",
        xl: "1024px",
        "2xl": "1496px",
      },
    },
    extend: {
      colors: {
        primary: "#fdf4ff",
        secondary: "#c084fc",
        link: "#60a5fa",
        "secondary-500": "#a855f7",
        "secondary-600": "#9333ea",
        "secondary-700": "#7e22ce",
        "secondary-300": "#d8b4fe",
      },
      spacing: {
        offset_xl: "9rem",
      },
      fontSize: {
        responsive: " clamp(1rem, 2vw, 2rem)",
      },
    },
  },
  plugins: [],
};
