const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const webpackBaseConfig = {
  entry: path.resolve(__dirname,'../src/main.js'),
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[hash:8].js",
    publicPath: "",
  },
  //模块
  module: {
    rules: [
      {
        test: /\.vue$/,
        use:{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            },
          }
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  //解析模块请求选项
  resolve: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ]
}

module.exports = webpackBaseConfig
console.log(process.env.NODE_ENV + '哈哈')
