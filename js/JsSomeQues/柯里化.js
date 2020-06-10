function add() {
  let _outer = [...arguments];
  let fn = function () {
    let _inner = [...arguments];
    return add.apply(null, _outer.concat(_inner));
  }

  fn.toString = function () {
    return _outer.reduce((a, b) => a + b);
  }
  return fn;
}

console.log(add(1))
console.log(add(1)(2)(3))
console.log(add(1)(2)(7))

