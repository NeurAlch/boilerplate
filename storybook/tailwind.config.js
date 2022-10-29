// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['../client/shared/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
};
