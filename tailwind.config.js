module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-auto-fit-songs': 'repeat(auto-fill, 280px)'
      },
      screens: {
        smallDisplay: '350px'
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Inter'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
