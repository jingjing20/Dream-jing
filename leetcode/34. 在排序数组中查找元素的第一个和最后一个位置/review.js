/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let mid, midL, midR;
	const searchR = (left, right, target) => {
		while (left <= right) {
			mid = (left + right) >> 1;
			if (nums[mid] > target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
		return right;
	};
	midR = searchR(0, nums.length - 1, target);
	if (midR < 0 || nums[midR] !== target) return [-1, -1];
	midL = searchR(0, midR - 1, target - 1);
	return [midL + 1, midR];
};
