/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let low = 0;
	let high = nums.length - 1;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		if (nums[mid] > target) {
			high = mid - 1;
		} else if (nums[mid] < target) {
			low = mid + 1;
		} else {
			return mid;
		}
	}
	return -1;
};
