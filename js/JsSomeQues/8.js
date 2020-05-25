// let jing = [3, 15, 8, 29, 102, 22]
// console.log(jing.sort((a, b) => a - b))

let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// let newArr = [...(new Set(arr.flat(Infinity)))].sort((a, b) => { return a - b })
// console.log(newArr) //[1,  2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13, 14]


// var arr = [1, 2, [3, 4], [4, 8, 9], [4, 3, 4, 2, 6, 9]];
// let newArr = arr.reduce((acc, cur) => {
//   return acc.concat(cur)
// }, [])
// console.log(newArr)

// 使用 reduce、concat 和递归展开无限多层嵌套的数组
// var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

// function flatDeep(arr, d = 1) {
//   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
//     : arr.slice();
// };

const eachFlat = (arr = [], depth = 1) => {
  const result = []; // 缓存递归结果
  // 开始递归
  (function flat(arr, depth) {
    // forEach 会自动去除数组空位
    arr.forEach((item) => {
      // 控制递归深度
      if (Array.isArray(item) && depth > 0) {
        // 递归数组
        flat(item, depth - 1)
      } else {
        // 缓存元素
        result.push(item)
      }
    })
  })(arr, depth)
  // 返回递归结果
  return result;
}

console.log(eachFlat(arr, Infinity));
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]