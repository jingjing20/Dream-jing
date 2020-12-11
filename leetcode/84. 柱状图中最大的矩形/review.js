/**
 * @param {number[]} heights
 * @return {number}
 */

var largestRectangleArea = function (heights) {
	let maxArea = 0;
	let stack = [];
	heights = [0, ...heights, 0];
	for (let i = 0; i < heights.length; i++) {
		while (heights[i] < heights[stack[stack.length - 1]]) {
			const stackTopIndex = stack.pop();
			maxArea = Math.max(maxArea, heights[stackTopIndex] * (i - stack[stack.length - 1] - 1)); // 因为前面从 stack 中 pop() 了要操作的柱子，所以stack的length减小了1，所以需要多减一个1才能准确的计算出底边的长（两个柱子索引之差）
		}
		stack.push(i);
	}
	return maxArea;
};

let arr = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(arr));
