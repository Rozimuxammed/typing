/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'milk': '#9fa4b7',
      'black': '#000000',
      'white': '#FFFFFF'
    },
    screens: {
      'sm': '320px',
      'md': '559px',
      'lg': "768px",
      'xl': '1024px',
      '2xl':'1440px'
    }
  },
  plugins: [],
}