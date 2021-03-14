const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3002',
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin('./public/favicon.ico'),
  ],
})
