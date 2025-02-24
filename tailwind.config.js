/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundSize: {
        '200': '200% auto',
      },
      backgroundPosition: {
        'pos-100': '100% center',
      }
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ]
}