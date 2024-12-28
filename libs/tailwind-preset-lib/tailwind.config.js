/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      container: (theme) => ({
        center: true,
        padding: theme('spacing.4'),
      }),
    },
  },
  plugins: [require('tailwindcss-primeui')],
};
