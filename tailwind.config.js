module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'grid-auto-fit-songs': 'repeat(auto-fit, minmax(288px, 1fr))'
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
