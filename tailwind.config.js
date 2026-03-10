/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#0a3f88',
          sky: '#00b4d8',
          ocean: '#0077b6'
        }
      },
      boxShadow: {
        glow: '0 10px 40px rgba(0,180,216,0.3)'
      }
    },
  },
  plugins: [],
};
