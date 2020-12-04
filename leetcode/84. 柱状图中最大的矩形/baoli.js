/**
 * @param {number[]} heights
 * @return {number}
 */

// 暴力解法 时间复杂度：O(n^2) 空间复杂度：O(1)

var largestRectangleArea = function (heights) {
	let maxArea = 0;
	for (let i = 0; i < heights.length; i++) {
		let minHeight = Number.MAX_SAFE_INTEGER;
		for (let j = i; j < heights.length; j++) {
			minHeight = Math.min(minHeight, heights[j]);
			maxArea = Math.max(maxArea, minHeight * (j - i + 1));
		}
	}
	return maxArea;
};

let arr = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(arr));
