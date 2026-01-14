/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'aeonik-medium': ['Aeonik-Medium', 'sans-serif'],
        'aeonik-regular': ['Aeonik-Regular', 'sans-serif'],
        'ppfragment-regular': ['PPFragment-SerifRegular', 'serif'],
        // 'serif': ['PPFragment-SerifRegular', 'serif'], // Adding a generic serif option
      },
    },
  },
  plugins: [],
}