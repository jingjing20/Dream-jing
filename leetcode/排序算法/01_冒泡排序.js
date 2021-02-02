// 思想：通过相邻元素的比较和交换，使得每一趟循环都能找到未有序数组的最大值或最小值。

/**
 *
 * @param {Array} arr
 */
const bubbleSort = (arr) => {
	let len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
};

// 优化版
// const bubbleSort = (arr) => {
// 	let len = arr.length;
// 	let flag = false; // 用于标志数组是否已经排好序
// 	for (let i = 0; i < len - 1; i++) {
// 		flag = true; // 每一趟比较前都认为已经排好序
// 		for (let j = 0; j < len - 1 - i; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
// 				flag = false; // 进行交换了说明还没拍好
// 			}
// 		}
// 		if (flag) break;
// 	}
// 	return arr;
// };

let arr = [4, 6, 2, 9, 1];
console.log(bubbleSort(arr)); //jing-log
