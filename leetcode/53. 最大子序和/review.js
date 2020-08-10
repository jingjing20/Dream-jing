/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxArray(nums) {
  let ans = nums[0]
  for(let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + Math.max(nums[i-1],0)
    ans = Math.max(nums[i],ans)
  }
  return ans
}

console.log(findMaxArray([-1,2,6,-3,5,-1]))