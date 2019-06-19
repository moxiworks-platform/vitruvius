const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    require('tailwindcss')('./src/styles/tailwind.js'),
    require('autoprefixer')()
  ]
}
