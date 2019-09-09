const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MimiCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: '#source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        // vendors: {
        //   name: 'chunk-vendors',
        //   test: /[\\\/]node_modules[\\\/]/,
        //   priority: -10,
        //   chunks: 'initial'
        // },
        // common: {
        //   name: 'chunk-common',
        //   minChunks: 2,
        //   priority: -20,
        //   chunks: 'initial',
        //   reuseExistingChunk: true
        // }
      }
    }
  },
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
            loader: 'postcss-loader'
          },
          {
            loader: 'stylus-loader'
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
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
})