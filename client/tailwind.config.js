/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199 || #f056c7
        primaryDark: "#58E6D9", // 80,230,217 || #50e6d9
      },
    },
  },
  plugins: [],
}

