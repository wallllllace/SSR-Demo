const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: [
          path.join(__dirname, '../node_modules')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
        
      },
    ]
  }
}
