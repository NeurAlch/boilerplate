// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

// IMPORTANT: Need to update also on storybook-sandbox/tailwind.config.js
module.exports = {
  content: ['admin/**/*.{ts,tsx}', 'shared/**/*.{ts,tsx}'],
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
