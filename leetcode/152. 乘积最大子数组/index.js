/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxOne = Math.max(...nums)
  let len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      let max = Math.max(nums[j], nums[j] * nums[j + 1])
    }
  }
  // return max
};

console.log(maxProduct([1, 8, 4, 3]))