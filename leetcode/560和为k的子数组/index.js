/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    for (let end = start; end >= 0; end--) {
      sum = sum + nums[end];
      if (sum == k) {
        count++;
      }
    }
  }
  return count;
};

console.log(subarraySum([1, 2, 2,2, 1,1], 3))