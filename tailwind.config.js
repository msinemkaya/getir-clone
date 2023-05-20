/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-brand-color": "#4C3398",
        "brand-color": "#5D3EBC",
        "brand-yellow": "#ffd300"
      },
    },
  },
  plugins: [],
}

