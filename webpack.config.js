module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    library: 'JsBarcode',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: './test',
    info: true,
    hot: true,
    inline: true,
    port: 3000
  }
}