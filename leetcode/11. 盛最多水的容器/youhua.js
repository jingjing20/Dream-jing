/**
 * @param {Array} height
 * @author wzh
 */
console.time();
var maxArea = function (height) {
	let max = 0;
	for (let i = 0, j = height.length - 1; i < j; ) {
		let minHeigth = height[i] < height[j] ? height[i++] : height[j--];
		max = Math.max(max, (j - i + 1) * minHeigth);
	}
	return max;
};

// 时间复杂度：O(n)

console.timeEnd(); // 0.104ms
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
