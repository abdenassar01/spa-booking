const colors = require('./configs/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      colors,
      screens: {
        '2xl': '1700px',
        xl: '1440px',
        lg: { min: '1000px', max: '1250px' },
        md: { min: '767px', max: '1200px' },
        sm: { min: '20px', max: '767px' },
      },
      container: {
        center: true,
        screens: {
          '2xl': '2050px',
          xl: '1216px',
          lg: '950px',
          md: '650px',
          sm: '350px',
        },
      },
    },
  },
  plugins: [],
};
