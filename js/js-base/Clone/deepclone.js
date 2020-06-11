/**
 * 手写一个深拷贝
 */
function deepClone(obj = {}) {
  // 如果obj不是对象和数组 或者是null 直接返回
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }

  let result;   //初始化返回结果

  // 判断是对象还是数组
  if (Array.isArray(obj)) {
    result = [];
  } else {
    result = {}
  }

  for (let key in obj) {
    // 判断是否是自己的属性和方法
    if (obj.hasOwnProperty(key)) {
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }
  return result;  //返回结果
}

// const obj1 = {
//   age: 20,
//   name: 'xxx',
//   address: {
//     city: 'beijing',
//     jing: {
//       love: 'hao',
//       age: 20,
//       address: '永新县'
//     }
//   },
//   arr: ['a', 'b', 'c'],
// }

// const obj2 = deepClone(obj1)
// obj2.arr[0] = 'a1'          //改变属性值
// obj2.address.city = 'shanghai'  //改变属性值
// console.log(obj1.address.city)    //测试
// console.log(obj1.arr[0])
// console.log(obj2.address.jing)

var a = { a: '1', b: [1, 2, 3, 4, { t: 'test' }], [Symbol()]: 'symbol', d: new Date(), r: RegExp('^\\d$') };
console.log(deepClone(a))