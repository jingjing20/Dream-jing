/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	let i = 0;
	const n = nums.length;
	let res = [];
	while (i < n) {
		const low = i;
		i++;
		while (i < n && nums[i] === nums[i - 1] + 1) {
			i++;
		}
		const high = i - 1;
		let temp = ['' + nums[low]];
		if (low < high) {
			temp.push('->');
			temp.push(nums[high]);
		}
		res.push(temp.join(''));
	}
	return res;
};

// 输入：nums = [0,1,2,4,5,7]
// 输出：["0->2","4->5","7"]
// 解释：区间范围是：
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
