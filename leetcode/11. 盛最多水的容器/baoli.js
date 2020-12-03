/**
 * @param {Array} height
 * @author wzh
 */
console.time();
var maxArea = function (height) {
	let max = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let area = (j - i) * Math.min(height[i], height[j]);
			max = Math.max(max, area);
		}
	}
	return max;
};

// 时间复杂度：O(n^2)

console.timeEnd(); // 5.8ms
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
