/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
	let n = arr.length;
	let left = 0;
	// 找到左边最长的有序序列
	while (left + 1 <= n && arr[left] <= arr[left + 1]) {
		left++;
	}

	if (left === n - 1) return 0;

	// 找到右边最长的有序序列
	let right = n - 1;
	while (right >= 0 && arr[right - 1] <= arr[right]) {
		right--;
	}

	let result = Math.min(right, n - left - 1);

	// 考虑两边都取一部分元素
	let i = 0,
		j = right;
	while (i <= left && j <= n - 1) {
		if (arr[i] <= arr[j]) {
			result = Math.min(result, j - i - 1);
			i++;
		} else {
			j++;
		}
	}
	return result;
};

let arr = [1, 2, 3, 10, 4, 2, 3, 5];
console.log(findLengthOfShortestSubarray(arr)); //jing-log
