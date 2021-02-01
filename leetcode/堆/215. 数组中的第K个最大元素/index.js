// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
const MinHeap = require('../minHeap');
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	const h = new MinHeap();
	nums.forEach((item) => {
		h.insert(item);
		if (h.size() > k) {
			h.pop();
		}
	});
	return h.peek();
};

let arr = [3, 2, 1, 5, 6, 4],
	k = 2;
console.log(findKthLargest(arr, k)); //jing-log
