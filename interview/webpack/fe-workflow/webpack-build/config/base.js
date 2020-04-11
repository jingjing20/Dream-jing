// 所有 webpack 配置 config 目录
module.exports = (config, resolve) => {
  return () => {
    config
      .entry('app')
      .add(resolve('src/main.js'))
      .end()
      .set('mode', process.env.NODE_ENV)
      .output.path(resolve('dist'))
      .filename('[name].bundle.js');
  }
}
