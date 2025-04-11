/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#131313',
        'custom-light': '#C2C2C0',
        'custom-gray': '#7C8481',
        'custom-slate': '#7C7C84',
      },
    },
  },
  plugins: [],
}