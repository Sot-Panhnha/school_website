/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./src/pages/**/*.{js,jsx}",
    "./src/component/**/*.{js,jsx}",
    '.node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      Poppins: [ 'Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin'),],
}
