/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let num = 1;
  while (k > 0) {
    if (arr.indexOf(num) === -1) k--;   // 从1开始 每缺失一个数字将k-1
    if (k > 0) num++;
  }
  return num;
};

console.log(findKthPositive([2, 4, 6, 8], 2));