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
      keyframes: {
        'hue-rotate': {
          '0%': {
            filter: 'hue-rotate(360deg)'
          },
          '50%': {
            filter: 'hue-rotate(180deg)'
          },
          '100%': {
            filter: 'hue-rotate(0deg)'
          }
        }
      },
      animation: {
        'hue-rotate': 'hue-rotate 8s ease infinite'
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
};
