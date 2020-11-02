/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  for(let i = 1; i < nums.length; i++) {
    if(nums[i-1] > nums[i]) {
      return nums[i]
    }
  }
  return nums[0]
}

console.log(findMin([3,4,5,1,2]))
console.log(findMin([0,1,2,3,4,5]))