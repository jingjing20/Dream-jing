/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    nums[i] += Math.max(nums[i-1],0);
    ans = Math.max(ans, nums[i]);
  }
  return ans;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr));  // 6