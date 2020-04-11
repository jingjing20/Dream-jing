const chalk = require('chalk');
// webpack-chain 曾经有一次自己写过工作流程
module.exports = (config, resolve) => {
  // babel 的 js化
  // webpack 使用 module 生产模块单元
  // ts - js 

  const baseRule = config.module.rule('js').test(/.js|.ts$/);
  const babelPath = resolve('babel.js') //.babelrc的意义
  const babelConf = require(babelPath);
  // console.log(babelConf, '-------------');
  const version = require(resolve('node_modules/@babel/core/package.json')).version;
  console.log(chalk.red(version))
  return () => {
    baseRule
      .use('babel')
      .loader(require.resolve('babel-loader'))
      .options(babelConf({
        version
      }))
  }
}