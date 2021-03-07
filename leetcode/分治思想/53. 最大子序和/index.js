// 只需要保证在当前位置的最大值，然后遍历，前一位大于 0 就加上，小于 0 就加上 0。

/**
 * @param {number[]} nums
 * @return {number}
 */

function findMaxArray(nums) {
	let ans = nums[0];
	for (let i = 1; i < nums.length; i++) {
		nums[i] = nums[i] + Math.max(nums[i - 1], 0); // 修改了每一位的最大值
		ans = Math.max(nums[i], ans);
	}
	return ans;
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(findMaxArray(arr));
