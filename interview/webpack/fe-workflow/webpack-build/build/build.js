const rimraf = require('rimraf');
const path = require('path');
const ora = require('ora');   //加载指示器
const chalk = require('chalk'); //粉笔加颜色
// webpack 最基本的配置  entry output mode  我们不用这种方式
// webpack-chain  编程的方法来配置 webpack

// 模块化 base.js 服务于 dev.js build.js  是一个函数 立即执行
const config = require('./base')();
// console.log(config)
const webpack = require('webpack')

// console.log(path.join(process.cwd()))
rimraf.sync(path.join(process.cwd(), 'dist'));

const spinner = ora('开始构建项目...');
spinner.start();

// 进行编译
webpack(config.toConfig(), function (err, stats) {
  spinner.stop();
  if (err) throw err
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })
  )
  console.log(chalk.cyan('\n build完成！\n'));
})