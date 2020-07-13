var a = { a: '1', b: [1, 2, 3, 4, { t: 'test' }], [Symbol()]: 'symbol', d: new Date(), r: RegExp('^\\d$') };


function deepCopy(obj) {
  var cobj;
  if (obj === null) { // null 
    return obj;
  }

  let t = typeof obj;
  switch (t) {
    case 'string':
    case 'number':
    case 'boolean':
    case 'undefined':
      return obj;
  }


  if (Array.isArray(obj)) {
    cobj = [];
    obj.forEach((c, i) => {
      cobj.push(deepCopy(obj[i]))
    })
  } else {
    cobj = {}
    if (Object.prototype.toString.call(obj) == "[object Object]") {
      // weakSet weakMap
      Object.getOwnPropertyNames(obj)
        .concat(Object.getOwnPropertySymbols(obj))
        .forEach(c => {
          cobj[c] = deepCopy(obj[c]);
        })
    } else {
      cobj = obj;
    }
  }
  // 简单数据类型
  // 复杂数据类型
  return cobj;
}

console.log(deepCopy(a))