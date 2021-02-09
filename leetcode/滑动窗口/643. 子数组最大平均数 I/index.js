// 给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。

// 输入：[1,12,-5,-6,50,3], k = 4
// 输出：12.75
// 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
	const n = nums.length;
	let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
	let maxSum = sum;
	for (let i = k; i < n; i++) {
		sum = sum - nums[i - k] + nums[i];
		maxSum = Math.max(maxSum, sum);
	}
	return maxSum / k;
};
