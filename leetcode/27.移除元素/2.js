/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

// 方法1 直接覆盖
// 遇到不同于 val 的项，就将它直接覆盖到 nums 数组中，从第一项开始覆盖
// 遍历完数组，不同于 val 的项都安排到了 nums 数组的前头
