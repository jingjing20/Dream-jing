// 输入：nums = [1,3,5,4,7]
// 输出：3
// 解释：最长连续递增序列是 [1,3,5], 长度为3。
// 尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为 5 和 7 在原数组里被 4 隔开。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
	let res = 0;
	const n = nums.length;
	let start = 0;
	for (let i = 0; i < n; i++) {
		if (i > 0 && nums[i] <= nums[i - 1]) {
			start = i;
		}
		res = Math.max(res, i - start + 1);
	}
	return res;
};

let nums = [1, 3, 5, 4, 7];
console.log(findLengthOfLCIS(nums)); //jing-log
