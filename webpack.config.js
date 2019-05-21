const path = require('path');
const entry = require('./webpack.entry.js');

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: [".css", ".js"]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};