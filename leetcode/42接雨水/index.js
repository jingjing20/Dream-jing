/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let res = 0;
	let length = height.length;
	for (let i = 1; i < length - 1; i++) {
		let max_left = 0,
			max_right = 0;
		for (let j = i; j >= 0; j--) {
			max_left = Math.max(max_left, height[j]);
		}
		for (let j = i; j < length; j++) {
			max_right = Math.max(max_right, height[j]);
		}
		res += Math.min(max_left, max_right) - height[i];
	}
	return res;
};
