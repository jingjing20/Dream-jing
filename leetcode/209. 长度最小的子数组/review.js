//思路：
// 定义一个存放最小值的变量 min 初始化最大利润 profit = 0
// 开始遍历数组，如果当前遍历元素的值小于 min 更新 min。
// 否则用当前遍历元素的值减去 min 得到 profit 和当前 profit 取最大值

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let i = 0,
    j = 0,
    sum = 0;
  let minLen = Infinity;
  while (j < nums.length) {
    sum += nums[j];
    while (sum >= s) {
      minLen = Math.min(minLen, j - i + 1);
      sum -= nums[i];
      i++;
    }
    j++;
  }
  return minLen === Infinity ? 0 : minLen;
};

let s = 7,
  nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(s, nums));
