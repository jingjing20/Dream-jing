/**
 * @param {number[]} nums
 * @return {number}
 */

// 核心思想是：先跳再算max最远的位置
var jump = function (nums) {
	let max = 0;
	let count = 0;
	let cur = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		max = Math.max(max, nums[i] + i);
		if (cur >= nums.length - 1) break;
		if (cur === i) {
			count++;
			cur = max;
		}
	}
	return count;
};

let nums = [2, 3, 1, 1, 4];
console.log(jump(nums));
