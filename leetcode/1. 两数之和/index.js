/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var twoSum = function (nums, target) {
	let jing = false;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				jing = true;
			}
		}
	}
	return jing;
};
console.log(twoSum([2, 7, 11, 15], 22));
