const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config.common');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  }
});
