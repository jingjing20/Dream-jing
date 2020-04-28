/**
 * @param {Array[]} nums
 * @return {Array[]}
 */
var singleNumbers = function (arr1, arr2) {
  let obj = {};
  let arr = arr1.concat(arr2);
  let result = [], len = arr.length;
  for (let i = 0; i < len; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
      result.push(arr[i])
    } else {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === arr[i]) result.splice(j, 1)
      }
    }
  }
  return result;
};

console.log(singleNumbers([1, 2, 3, 4, 5], [2, 5, 7]))