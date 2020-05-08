const rimraf = require('rimraf')
const path = require('path')
rimraf.sync(path.join(process.cwd(), 'dist'));
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    promotion: './src/promotion/index.js',
    pay: './src/pay/index.js',
    jing: './src/jingjing/index.js',
  },  // 
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
        }
      }
    }
  },

  plugins: [
    // new 一次
    new HtmlWebpackPlugin({
      template: './src/pay/index.html',
      filename: 'pay.html',
      chunks: ['commons', 'pay']  // 当前 html 引入的 js 文件 有哪些
    }),
    new HtmlWebpackPlugin({
      template: './src/promotion/index.html',
      filename: 'promotion.html',
      chunks: ['commons', 'promotion']
    }),
    new HtmlWebpackPlugin({
      template: './src/jingjing/index.html',
      filename: 'jingjing.html',
      chunks: ['commons', 'jingjing']
    })
  ]
}