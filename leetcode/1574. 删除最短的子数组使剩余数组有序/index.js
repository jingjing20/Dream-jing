/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
	let n = arr.length;
	let left = 0;
	// 找到左边有序的最长序列
	while (left + 1 < n && arr[left] <= arr[left + 1]) {
		left++;
	}
	if (left === n - 1) {
		return 0;
	}
	// 找到右边有序的最长序列
	let right = n - 1;
	while (right > 0 && arr[right - 1] <= arr[right]) {
		right--;
	}
	// 最小值
	let result = Math.min(n - left - 1, right);

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
