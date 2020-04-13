const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = __dirname;

module.exports = {
  context: path.join(basePath, 'src'),    //设置默认上下文环境 src
  resolve: {    //帮处理哪些静态文件
    extensions: ['.js', '.ts', '.tsx'],   //以后缀名的文件
  },
  entry: {    //webpack 打包入口可以有多个
    app: './index.ts',   //入口文件
    vendorStyles: [      //bootstrap css框架 业务代码在变 
      '../node_modules/bootstrap/dist/css/bootstrap.css',
    ],
  },
  output: {
    path: path.join(basePath, 'dist'),  //打包后的文件夹
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,    //找文件规则
        exclude: /node_modules/,    //排除目录
        loader: 'awesome-typescript-loader',    //
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],   //打包压缩
      },
      // {
      //   test: /\.(png|jpg|gif|svg)$/,   //压缩但不会影响图片质量
      //   loader: 'file-loader',
      //   options: {
      //     name: 'assets/img/[name].[ext]?[hash]',
      //   },
      // },
    ],
  },
  // For development https://webpack.js.org/configuration/devtool/#for-development
  devtool: 'inline-source-map',
  devServer: {      //webpack-dev-server
    port: 8080,
    noInfo: true,
  },
  plugins: [
    // Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html', // Name of file in ./dist/
      template: 'index.html', // Name of template in ./src
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};