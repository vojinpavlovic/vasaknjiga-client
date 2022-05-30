module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white' : '#ffffff',
      'primary' : '#413ef7',
      'dark': {
        50  : 'rgba(0, 0, 0, 1.0)',
        100 : 'rgba(0, 0, 0, 0.9)',
        150 : 'rgba(0, 0, 0, 0.8)',
        200 : 'rgba(0, 0, 0, 0.7)',
        250 : 'rgba(0, 0, 0, 0.6)',
        300 : 'rgba(0, 0, 0, 0.5)',
        350 : 'rgba(0, 0, 0, 0.4)',
        400 : 'rgba(0, 0, 0, 0.3)',
        450 : 'rgba(0, 0, 0, 0.2)',
        500 : 'rgba(0, 0, 0, 0.1)',
      },
      'gray': '#a1a1a1',
      'light-red' : '#f65a5a',
    },
  },
  dropShadow: {
    'blue': '0 0.5em 1em rgba(65, 62, 247, 0.18);'
  },
  plugins: [],
}
