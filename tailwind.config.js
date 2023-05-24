/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-color": "#4C3398",
        "secondary-brand-color": "#5D3EBC",
        "brand-yellow": "#FFD300"
      },
      fontFamily: {
        "open-sans": "'Open Sans', sans-serif"
      },
      backgroundImage: {
        "mobile-app": "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')"
      }
    },
  },
  plugins: [],
}

