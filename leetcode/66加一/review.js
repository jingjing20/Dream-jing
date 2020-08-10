/**
 * 
 * @param {Array} nums 
 */

function hao(nums) {
  let len = nums.length;
  for(let i = len - 1; i >= 0; i--) {
    nums[i]++;
    nums[i] = nums[i] % 10
    if(nums[i] !== 0) return nums
  }
  return [1,...nums]
}

console.log(hao([9,9,9]))