module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ruby: {
          DEFAULT: '#E0115F',
          600: '#c81054',
          700: '#a60d45',
        },
        emerald: {
          DEFAULT: '#50C878',
          600: '#3fb067',
          700: '#34955a',
        },
        turquoise: {
          DEFAULT: '#40E0D0',
          600: '#36cabe',
          700: '#2fa9a0',
        },
        gold: '#FFD700',
        silver: '#C0C0C0',
      }
    },
  },
  plugins: [],
};