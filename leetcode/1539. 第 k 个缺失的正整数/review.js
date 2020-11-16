/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

var findKthPositive = function (arr, k) {
  let num = 1;
  while (k > 0) {
    if (arr.indexOf(num) === -1) k--;
    if (k > 0) num++;
  }
  return num;
};

console.log(findKthPositive([2, 4, 6, 8], 4));

