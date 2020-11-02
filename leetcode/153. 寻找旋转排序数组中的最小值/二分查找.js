/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left]
}

console.log(findMin([3, 4, 5, 1, 2]))
console.log(findMin([0, 1, 2, 3, 4, 5]))