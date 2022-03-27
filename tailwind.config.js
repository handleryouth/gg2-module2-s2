module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            fontFamily: "Inter",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
