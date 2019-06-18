const webpack = require('webpack');
const path = require('path');
const entry = require('./webpack.entry.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: entry,
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  resolve: {
    extensions: [".css", ".js"]
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CopyPlugin([
      { from: './dist/vitruvius.css', to: 'styles/vitruvius.css' },
      { from: './dist/vitruvius-icons.css', to: 'styles/vitruvius-icons.css' },
      { from: './dist/fonts', to: 'styles/fonts' },
    ]),
  ],
  stats: {
    warnings: false
  }
};
