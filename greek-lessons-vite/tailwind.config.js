/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3f51b5',
          dark: '#303f9f',
          light: '#c5cae9',
        },
        secondary: {
          DEFAULT: '#4caf50',
          dark: '#388e3c',
        },
        accent: '#ff9800',
      }
    },
  },
  plugins: [],
}
