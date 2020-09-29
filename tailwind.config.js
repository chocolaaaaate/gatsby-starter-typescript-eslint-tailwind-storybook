// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js', './src/**/*.ts', './src/**/*.jsx', './src/**/*.tsx'],
  theme: {
    extend: {
      // custom theme goes here
      colors: {
        'custom-green': '#143a3c',
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
