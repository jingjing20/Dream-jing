// 给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对.
// 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
// 返回该最大总和。
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
	let res = 0;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < nums.length; i += 2) {
		res += nums[i];
	}
	return res;
};
