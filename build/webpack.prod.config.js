const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MimiCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(css|styl(us))$/,
        use: [
          {
            loader: MimiCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: 'stylus-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new MimiCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new CleanWebpackPlugin()
  ]
})