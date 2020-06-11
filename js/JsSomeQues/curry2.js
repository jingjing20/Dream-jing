// 柯里化求和函数
var add = function () {
  var _args = [];
  return function () {
    if (arguments.length === 0) {
      return _args.reduce(function (a, b) {
        return a + b;
      })
    }
    [].push.apply(_args, arguments);
    return arguments.callee;
  }
}
var sum = add();
sum(100, 200)(300);
sum(400)
console.log(sum(500)(5000)()); // 1000

//通用柯里化函数

var curry = function (fn) {
  var len = fn.length,
    args = [];
  return function () {
    Array.prototype.push.apply(args, arguments)
    var argsLen = args.length;
    if (argsLen < len) {
      return arguments.callee;
    }
    return fn.apply(fn, args);
  }
}

var add = function (a, b, c) {
  return a + b + c;
}

var mult = function (a, b, c) {
  return a * b * c;
}

var adder = curry(add)
console.log(adder(1)(2)(3))
var multer = curry(mult)
console.log(multer(2)(5)(10))

