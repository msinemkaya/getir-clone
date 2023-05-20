/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4C3398",
        "secondary": "#5D3EBC",
        "brand-yellow": "#ffd300"
      },
    },
  },
  plugins: [],
}

