module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-gray': {
          100: '#414141',
          200: '#2E2E2E',
          300: '#777777',
        },
        'yellow': {
          100: '#FFCC21'
        }
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    }
  },
  plugins: [],
}