const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common');

const isDev = process.env.NODE_ENV === 'development';

const config = merge(common, {
  mode: 'development',
  entry: {
    app: path.join(__dirname, '../src/client/index.js')
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/client/index.html'),
      title: "SSR Demo"
    })
  ]
});

module.exports = config;
