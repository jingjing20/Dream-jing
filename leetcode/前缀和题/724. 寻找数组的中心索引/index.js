/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	const totleSum = nums.reduce((a, b) => a + b, 0);
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (2 * sum + nums[i] === totleSum) {
			return i;
		}
		sum += nums[i];
	}
	return -1;
};

let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); //jing-log
