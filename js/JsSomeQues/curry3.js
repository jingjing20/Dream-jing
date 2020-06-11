// var curry = function (fn) {
//   let len = fn.length;   //获取操作函数参数的个数
//   let args = [];
//   return function () {
//     Array.prototype.push.apply(args, arguments)
//     let arglen = args.length;
//     if (arglen < len) {
//       return arguments.callee;
//     } else {
//       return fn.apply(fn, args);
//     }
//   }
// }

// var add = function (a, b, c) {
//   return a + b + c;
// }

// var mult = function (a, b, c) {
//   return a * b * c;
// }

// var adder = curry(add);
// console.log(adder(1)(2)(3));
// var multer = curry(mult);
// console.log(multer(2)(5)(10));

var curry = function (fn) {
  var func = function () {
    var _args = [].slice.call(arguments, 0);
    var func1 = function () {
      [].push.apply(_args, arguments)
      return func1;
    }
    func1.toString = func1.valueOf = function () {
      return fn.apply(fn, _args);
    }
    return func1;
  }
  return func;
}
var add = function () {
  return [].reduce.call(arguments, function (a, b) {
    return a + b;
  })
}

var adder = curry(add)

console.log(adder(1)(2)(3))