/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//双指针法思路：
// 1 判断数组是否为空 或 length 小于3
// 2 对数组排序
// 3 开始循环 判断nums[i]是否大于0 是就break 如果nums[i]大于0，则三数之和一定大于0，结束循环（因为数组已经排序）
// 4 如果 nums[i] == nums[i-1] continue 去重
// 5 定义左右两个指针 当左指针索引小于右指针时 判断是否有符合要求的结果
// 。。。。。
var threeSum = function (nums) {
	let len = nums.length;
	let jing = [];
	if (len < 3 || nums == null) return jing;
	nums.sort((a, b) => a - b);
	for (let i = 0; i < len; i++) {
		if (nums[i] > 0) break;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		let L = i + 1;
		let R = len - 1;
		while (L < R) {
			const sum = nums[i] + nums[L] + nums[R];
			if (sum === 0) {
				jing.push([nums[i], nums[L], nums[R]]);
				while (L < R && nums[L + 1] === nums[L]) L++;
				while (L < R && nums[R] === nums[R - 1]) R--;
				L++;
				R--;
			} else if (sum > 0) R--;
			else if (sum < 0) L++;
		}
	}
	return jing;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
