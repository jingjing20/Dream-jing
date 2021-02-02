// 思想：从第二个元素开始，与前面的元素比较大小，把小的往前放。

/**
 *
 * @param {Array} arr
 */
const insertionSort = (arr) => {
	let len = arr.length;
	for (let i = 1; i < len; i++) {
		const temp = arr[i];
		let j = i;
		while (j > 0 && arr[j - 1] > temp) {
			arr[j] = arr[j - 1];
			j -= 1;
		}
		arr[j] = temp;
	}
	return arr;
};

let arr = [4, 6, 2, 9, 1];
console.log(insertionSort(arr)); //jing-log
