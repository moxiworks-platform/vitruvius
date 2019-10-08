const path = require('path');
const entry = require('./webpack.entry.js');
var sys = require('util')
var exec = require('child_process').exec;

/*
 * Responsible for restarting the webpack devserver when a file is added or deleted
 * from src/components
 */
const PathWatcher = require('pathwatcher');
PathWatcher.watch('src/components', function(event, path) {

  dir = exec("./restart-dev-server.sh", function(err, stdout, stderr) {
    if (err) {
      console.log(err)
    }
  });

})

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
