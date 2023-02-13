const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  mode: 'development',
  output: {
    path: path.resolve(DIST_DIR),
    filename: 'bundle.js',
  },
  target: 'web',
  devServer: {
    port: '3000',
    static: {
      directory: path.join(DIST_DIR)
},
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(DIST_DIR, 'index.html')
    })
  ]
};