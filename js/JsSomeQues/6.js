/**
 * 两个数组去重
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
// function difference(arr1, arr2) {
//   let jing = new Set()
//   for (let i = 0; i < arr1.length; i++) {
//     jing.add(arr1[i])
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     jing.add(arr2[i])
//   }
//   return [...jing]
// }

function difference(arr1, arr2) {
  let arr3 = arr1.concat(arr2)
  return [...new Set(arr3)]
}
console.log(difference([1, 2, 3, 5, 2], [2, 5, 7]))