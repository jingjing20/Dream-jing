// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const map = new Map();
	nums.forEach((n) => {
		map.set(n, map.has(n) ? map.get(n) + 1 : 1);
	});
	const list = Array.from(map).sort((a, b) => b[1] - a[1]);
	return list.slice(0, k).map((n) => n[0]);
};
