/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let mid, midL, midR;
	// 定义一个查右边界的函数
	const serachRight = (left, right, target) => {
		while (left <= right) {
			mid = (left + right) >> 1;
			// 特别注意边界问题 这里只能用 nums[mid] > target 或者 nums[mid] <= target
			// 因为查找的是右边界 如果当 nums[mid] = target的时候 right = mid - 1，右边界就找错了。
			if (nums[mid] > target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
		return right;
	};

	midR = serachRight(0, nums.length - 1, target);
	if (midR < 0 || nums[midR] !== target) return [-1, -1];
	midL = serachRight(0, midR - 1, target - 1);
	return [midL + 1, midR];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
