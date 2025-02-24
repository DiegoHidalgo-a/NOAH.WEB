/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize: {
        '200': '200% auto',
      },
      backgroundPosition: {
        'pos-100': '100% center',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
