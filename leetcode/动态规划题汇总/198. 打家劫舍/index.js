/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	let len = nums.length;
	if (len === 0) return 0;
	const dp = [0, nums[0]];
	for (let i = 2; i <= nums.length; i++) {
		dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1]);
	}
	return dp[len];
};
