/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	let set = new Set();
	let i = 0,
		j = nums.length;
	while (i < j) {
		set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
		i++;
	}
	return [...set];
};

let nums = [1, 2, 1, 3, 2, 5];
console.log(singleNumber(nums)); //jing-log

// 时间复杂度是O(n)、空间复杂度也是O(n)。
