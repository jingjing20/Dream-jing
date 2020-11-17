// ./webpack.config.js

/** @type {import('webpack').Configuration} */

const config = {
  entry: {
    main: './main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]]
          }
        }
      }
    ]
  },
  mode: "development",
  optimization: {
    minimize: false
  }
}

module.exports = config