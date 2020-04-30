/**
 * 深拷贝复习2020/4/29 23:35
 * @param {Object} obj 
 */
function deepClone(obj = {}) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }

  let result
  if (obj instanceof Array) {
    result = []
  } else {
    result = {}
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }

  return result
}

const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing',
    jing: {
      love: 'hao',
      age: 20,
      address: '永新县'
    }
  },
  arr: ['a', 'b', 'c'],
}

const obj2 = deepClone(obj1)
obj2.arr[0] = 'a1'          //改变属性值
obj2.address.city = 'shanghai'  //改变属性值
console.log(obj1.address.city)    //测试
console.log(obj1.arr[0])
console.log(obj2.address.jing)