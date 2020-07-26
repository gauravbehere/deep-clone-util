const webpack = require('webpack')

const rules = [
  {
    test: /\.(js)?$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env'
      ]
    }
  }
]

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    libraryTarget: 'umd'
  },
  module: {
      rules
  }
}
