const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3001',
      '/albums': 'http://localhost:3001',
      '/songs': 'http://localhost:3001',
      '/images': 'http://localhost:3001',
      '/music': 'http://localhost:3001'
    }
  }
}