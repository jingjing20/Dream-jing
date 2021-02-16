// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const res = [];
	const backtrack = (path) => {
		if (path.length === nums.length) {
			res.push(path);
		}
		nums.forEach((n) => {
			if (path.includes(n)) {
				return;
			}
			backtrack(path.concat(n));
		});
	};
	backtrack([]);
	return res;
};

let nums = [1, 2, 3];
console.log(permute(nums)); //jing-log
// 时间复杂度 O(n!)、空间复杂度为 O(n)
