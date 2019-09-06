const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devServer:{
    hot: true,
    host: "0.0.0.0",
    port: 3333,
    compress: true,
    contentBase: path.resolve(__dirname, "../dist/"),
    overlay: {
      errors:true
    }
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            }
          },
          {
            loader: 'stylus-loader'
          }
          // {
          //   loader: 'postcss-loader'
          // }
        ]
      }
    ]
  }
})