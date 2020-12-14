/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let count = 0;
	for (let i = 1; i < height.length - 1; i++) {
		let max_left = 0,
			max_right = 0;
		for (let j = i; j < height.length; j++) {
			max_right = Math.max(max_right, height[j]);
		}
		for (let j = i; j >= 0; j--) {
			max_left = Math.max(max_left, height[j]);
		}
		count += Math.min(max_left, max_right) - height[i];
	}
	return count;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height)); //jing-log
