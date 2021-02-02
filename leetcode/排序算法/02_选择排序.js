// 思想：和冒泡排序相似，区别在于选择排序是将每一个元素和它后面的所有元素进行比较和交换。

/**
 *
 * @param {Array} arr
 */
const selectionSort = (arr) => {
	let len = arr.length;
	for (let i = 0; i < len - 1; i++) {
		let indexMin = i;
		// 找最小值的下标
		for (let j = i; j < len; j++) {
			if (arr[j] < arr[indexMin]) {
				indexMin = j;
			}
		}
		// 优化本身就是最小值 不需要交换
		if (indexMin !== i) {
			let temp = arr[i];
			arr[i] = arr[indexMin];
			arr[indexMin] = temp;
		}
	}
	return arr;
};

function selectSort(nums) {
	let len = nums.length;
	for (let i = 0; i < len; i++) {
		for (let j = i + 1; j < len; j++) {
			// 将 nums[i] 和它后面的元素进行比较，使 nums[i] 一直维持最小
			if (nums[i] > nums[j]) {
				[nums[i], nums[j]] = [nums[j], nums[i]];
			}
		}
	}
	return nums;
}

let arr = [5, 4, 3, 2, 1];
console.log(selectionSort(arr)); //jing-log
