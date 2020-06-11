// // 定长参数
// function add(a, b, c, d) {
//   return [
//     ...arguments
//   ].reduce((a, b) => a + b)
// }

// function currying(fn) {
//   let len = fn.length
//   console.log(len)
//   let args = []
//   return function _c(...newArgs) {
//     // 合并参数
//     args = [
//       ...args,
//       ...newArgs
//     ]
//     // 判断当前参数集合args的长度是否 < 目标函数fn的需求参数长度
//     if (args.length < len) {
//       // 继续返回函数
//       return _c
//     } else {
//       // 返回执行结果
//       return fn.apply(this, args.slice(0, len))
//     }
//   }
// }
// let addCurry = currying(add)
// let total = addCurry(1)(2)(3)(4) // 同时支持addCurry(1)(2, 3)(4)该方式调用
// console.log(total) // 10

let curry = function (fn) {
  let len = fn.length;
  let args = [];
  return function () {
    Array.prototype.push.apply(args, arguments)
    if (args.length < len) {
      return arguments.callee
    } else {
      return fn.apply(fn, args)
    }
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
