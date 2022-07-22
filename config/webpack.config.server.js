const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  target: 'node',
  entry: {
    app: path.join(__dirname, '../src/server/App.js')
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
});
