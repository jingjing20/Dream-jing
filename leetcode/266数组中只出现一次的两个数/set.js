/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let set = new Set();
  let i = 0, j = nums.length - 1;
  while (i < j) {
    set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
    set.has(nums[j]) ? set.delete(nums[j]) : set.add(nums[j]);
    i++;
    j--;
  }
  return [...set]
};

console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]))
