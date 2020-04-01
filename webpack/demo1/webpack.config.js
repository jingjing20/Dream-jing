// console.log(process.env.NODE_ENV)
// 1. 开发的时， vue-cli , webpack 内存中编译
// 2. 上线时， 压缩， 优化， 代码分离
const path = require('path');
const rimraf = require('rimraf');
rimraf.sync('dist');  //在编译之前删除dist目录
module.exports = {
  entry: './src/index.js',    //入口文件
  mode: process.env.NODE_ENV,  //开发环境
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  }
}