module.exports = function (babelTypes) {
  return {
    visitor: {
      ImportDeclaration(path, { opts }) {
        console.log(path, opts)
      }
    }
  }
}
