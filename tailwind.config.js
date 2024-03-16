/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/images/**/*.{jpg,png}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        title: ['"Source Serif 4", serif;'],
        text: ['"Source Sans 3", sans-serif;'],
      },
      colors: {
        "boni-blue-100": "#044678",
        "boni-blue-200": "#022b54",
        "boni-blue-300": "#011c36",
      },
      screens: {
        xs: "480px",
        "3xs": "320px",
        "2xs": "360px",
        "3xl": "1920px",
        "4xl": "2240px",
        "5xl": "2560px",
      },
    },
    plugins: [],
  },
};
