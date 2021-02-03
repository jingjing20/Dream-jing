// 思想：选择一个元素作为基数（通常是第一个元素）
// 把比基数小的元素放到它左边，比基数大的元素放到它右边（相当于二分）。再不断递归基数左右两边的序列。

/**
 *
 * @param {Array} arr
 */
const quickSort = (arr) => {
	if (arr.length <= 1) return arr;
	let len = arr.length;
	const left = [];
	const right = [];
	const mid = arr[0];
	for (let i = 1; i < len; i++) {
		if (arr[i] < mid) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), mid, ...quickSort(right)];
};

let arr = [4, 6, 2, 9, 1];
console.log(quickSort(arr)); //jing-log
