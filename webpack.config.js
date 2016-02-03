'use strict'
let webpack = require('webpack')
const env = process.env.NODE_ENV || 'development'

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': env
  })
]

if (env === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  )
}

module.exports = {
  devtool: env === 'development' && 'inline-source-map',
  output: {
    library: 'ioBarcode',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: plugins,
  devServer: {
    contentBase: './test',
    port: 3000
  }
}
