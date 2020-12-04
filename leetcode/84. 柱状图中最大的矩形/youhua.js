/**
 *
 * @param {Array} heights
 */
const largestRectangleArea = (heights) => {
	let maxArea = 0;
	let stack = [];
	heights = [0, ...heights, 0];
	for (let i = 0; i < heights.length; i++) {
		while (heights[i] < heights[stack[stack.length - 1]]) {
			const stackTopIndex = stack.pop(); // 将要计算面积的柱子的索引
			maxArea = Math.max(maxArea, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1));
		}
		stack.push(i);
	}
	return maxArea;
};
let arr = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(arr));
