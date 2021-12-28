module.exports = {
  content: ['./src/**/*.{html,js}', './public/*.{html,js}'],
  theme: {
    extend: {
      fontSize: {
        mammoth: ['12rem', { lineHeight: '1' }]
      },
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        // Because it has a space character so we have to wrap it in double quotes
        titillium: ['"Titillium Web"']
      }
    }
  },
  plugins: []
};
