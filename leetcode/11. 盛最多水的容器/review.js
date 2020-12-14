/**
 * @param {Array} height
 * @author wzh
 */
// 暴力
var maxArea = function (height) {
	let res = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			res = Math.max(res, (j - i) * Math.min(height[i], height[j]));
		}
	}
	return res;
};

// 时间复杂度：O(n^2)

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49

// 优化
console.time();
var maxArea = function (height) {
	let res = 0;
	for (let i = 0, j = height.length - 1; i < j; ) {
		let minHeight = height[i] < height[j] ? height[i++] : height[j--];
		res = Math.max(res, (j - i + 1) * minHeight);
	}
	return res;
};

// 时间复杂度：O(n)

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.timeEnd();
