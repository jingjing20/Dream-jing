const { findSync } = require('../lib');
const Config = require('webpack-chain');    //配置
const config = new Config();  //启动一个配置实例
const path = require('path');
// 抽取获取文件路径的函数
const resolve = src => {
  return path.join(process.cwd(), src)
}
const files = findSync('config')
console.log(files, '++++++')

module.exports = () => {
  // console.log('jingjing')
  const map = new Map();  //es6的Map 和 json 的区别 key不限类型
  files.map(file => {
    const name = file.split('/').pop().replace('.js', '');
    // console.log(name, '------')
    return map.set(name, require(file)(config, resolve));
  })
  // webpack  modules 
  // 分模块的配置就上去了
  map.forEach(v => v()) // 运行了配置

  return config;
}