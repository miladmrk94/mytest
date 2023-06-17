
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      sm: '501px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xs: { 'max': '500px' },


    },
    extend: {
      colors: {
        "primary": "rgba(111, 192, 155, 1)",
        "primary-tint": " rgba(111, 192, 155, 0.2)",
        "accent": " rgba(213, 101, 56, 1)",
        "accent-tint": "rgba(213, 101, 56, 0.2)",
        "primary-2": "rgba(49, 47, 47, 1)",
        "primary-2-tint": " rgba(49, 47, 47, 0.2)",
        "accent-2": "rgba(237, 139, 32, 1)",
        "accent-2-tint": "rgba(237, 139, 32, 0.2)",
        "blue-primary": "rgb(89, 65, 205)",
        "blue-tint": "rgb(213, 206, 242)",
        "error": " #dc2626",
      },

    },
  },
  plugins: [],
}
