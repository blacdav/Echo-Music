/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ''
      },

      fontSize: {
        xs: '14px',
        sm: '18px',
        lg: '24px',
        xl: '28px'
      }
    },
  },
  plugins: [],
}