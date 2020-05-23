/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();
  for (let i in nums) {
    map.set(nums[i], i)
  }
  for (let j = 0; j < nums.length - 1; j++) {
    if (map.has(target - nums[j]) && map.get(target - nums[j]) != j) {
      return [j, parseInt(map.get(target - nums[j]))]
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 22))