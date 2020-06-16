// let vm = {
//   user: 'jingjing',
//   password: 666666
// }

// let keys = Object.keys(vm)    //获取对象的 key
// keys.forEach(key => {
//   let value = vm[key]
//   Object.defineProperty(vm, key, {
//     get() {
//       console.log('get')
//       return value
//     },
//     set(newValue) {
//       if (newValue != value) {
//         value = newValue
//       }
//       console.log('set')
//     }
//   })
// })

// vm.password = 520520
// console.log(vm.password)


let curry = function (fn) {
  let len = fn.length;
  let args = [];
  return function () {
    Array.prototype.push.apply(args, arguments)
    let argsLen = args.length
    if (argsLen < len) {
      return arguments.callee
    } else {
      return fn.apply(fn, args)
    }
  }
}

let sum = function add(a, b, c) {
  return a + b + c;
}

let sumCurry = curry(sum)
console.log(sumCurry(1)(2)(3))