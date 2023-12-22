/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 1px -1px rgba(255, 255, 255, 0.2), 0 1px 1px 0 rgba(255, 255, 255, 0.14), 0 1px 3px 0 rgba(255, 255, 255, 0.12)',
      },
      gridTemplateColumns: {
        'products': 'repeat(auto-fill, minmax(23rem, 1fr))'
      }
    },
  },
  plugins: [],
}

