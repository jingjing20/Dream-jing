// 暴力法 双重循环
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const len = nums.length;
  const result = [];
  for (let i = 0; i < len; i++) {
    let time = 0;
    for (let j = 0; j < len; j++) {
      if (nums[j] < nums[i]) {
        time++;
      }
    }
    result.push(time);
  }
  return result;
};