/**
 *
 * @param {Array} nums
 */
function rob(nums) {
	let len = nums.length;
	if (len === 0) return 0;
	if (len === 1) return nums[0];
	let a = 0,
		b = 0;
	for (let i = 0; i < len; i++) {
		c = Math.max(b, a + nums[i]);
		a = b;
		b = c;
	}
	return c;
}

let nums = [2, 7, 9, 3, 1];
console.log(rob(nums)); //jing-log  12
