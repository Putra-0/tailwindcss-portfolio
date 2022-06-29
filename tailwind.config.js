/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#64748b',
        third:'#cbd5e1',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      transitionProperty: {
        'width': 'width',
      },
    },
  },
  plugins: [],
};
