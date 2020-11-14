/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

// 1、用一个记数数组 bucket 把 arr1 中的值作为 bucket 数组中的索引， arr1 值出现的次数作为 bucket 数组的值
// 2、遍历 arr2，把 bucket 数组中存在的 arr2的值依次放到结果数组 result 中去。
// 3、最后再把 bucket 数组中剩下的值放到结果数组 result 中去。

var relativeSortArray = function (arr1, arr2) {
  let maxVal = Math.max(...arr1);
  let result = []    // 结果数组
  let bucket = new Array(maxVal + 1).fill(0);    // 记数数组
  for (let i = 0; i < arr1.length; i++) {
    bucket[arr1[i]]++;
  }
  for (let j = 0; j < arr2.length; j++) {
    while (bucket[arr2[j]] > 0) {
      result.push(arr2[j])
      bucket[arr2[j]]--;
    }
  }
  for (let k = 0; k <= maxVal; k++) {
    while (bucket[k] > 0) {
      result.push(k);
      bucket[k]--;
    }
  }
  return result;
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]

console.log(relativeSortArray(arr1,arr2))