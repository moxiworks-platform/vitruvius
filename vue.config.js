let webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        riot: 'riot/riot'
      })
    ]
  }
}