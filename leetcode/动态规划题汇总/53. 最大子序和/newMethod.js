/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let ans = nums[0];
	for (let i = 1; i < nums.length; i++) {
		nums[i] = nums[i] + Math.max(nums[i - 1], 0);
		console.log(nums[i]); //jing-log
		ans = Math.max(ans, nums[i]);
	}
	return ans;
};

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log(maxSubArray(arr)); // 6
