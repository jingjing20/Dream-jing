/**
 * @param {Object} obj 
 * @param {String} str 
 */


function func(obj, str) {
  let strjing = str.split('.')
  strjing.reduce((acc, cur) => {
    obj = obj[cur]
  }, obj)
  return obj
}

// 最佳方法
// function func(obj, str) {
//   return str.split('.').reduce((acc, cur) => acc && acc[cur], obj)
// }

let x = {
  a: {
    b: {
      c: 1
    }
  }
}

let y = 'a.b.c'

console.log(func(x, y))