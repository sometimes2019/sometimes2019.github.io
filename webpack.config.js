const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './tool/index.js'
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'tool/dist')
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: [path.resolve(__dirname, 'tool')]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'my tool',
      inject: 'head',
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
