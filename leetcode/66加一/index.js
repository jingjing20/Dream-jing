/**
 * 
 * @param {Array} nums 
 */
function jing(nums) {
  let len = nums.length
  for (let i = len - 1; i >= 0; i--) {
    nums[i]++
    nums[i] %= 10
    if (nums[i] != 0) return nums
  }
  return [1, ...nums]
}

console.log(jing([9, 9]))
