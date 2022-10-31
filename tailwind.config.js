const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '90': '22.5rem',
        '100': '25rem',
        '108': '27rem',
        '120': '30rem',
        '128': '32rem',
        '144': '36rem',
        '150': '37.5rem',
        '160': '40rem',
        '192': '48rem',
      }
    },
    fontFamily: {
      'montserrat': ['montserrat', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}