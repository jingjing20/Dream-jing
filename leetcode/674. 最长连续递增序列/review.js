/**
 * @return {number}
 * @param {Array} nums
 */
function findLongSonArray(nums) {
	let res = 0;
	let start = 0;
	const len = nums.length;
	for (let i = 0; i < len; i++) {
		if (i > 0 && nums[i] <= nums[i - 1]) {
			start = i;
		}
		res = Math.max(res, i - start + 1);
	}
	return res;
}

let nums = [1, 3, 5, 4, 7];
console.log(findLongSonArray(nums)); //jing-log
