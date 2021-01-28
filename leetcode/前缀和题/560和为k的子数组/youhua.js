// 采用前缀和的方法优化时间复杂度 时间复杂度 O(n) 、空间复杂度 O(n)。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
	let map = new Map();
	map.set(0, 1);
	let preSum = 0;
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		preSum += nums[i];
		if (map.get(preSum - k)) {
			count += map.get(preSum - k);
		}

		if (map.get(preSum)) {
			map.set(preSum, map.get(preSum) + 1);
		} else {
			map.set(preSum, 1);
		}
	}
	return count;
};

console.log(subarraySum([1, 2, 2, 2, 1, 1], 3));
