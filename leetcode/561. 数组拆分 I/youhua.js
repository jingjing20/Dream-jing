/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
	let arr = new Array(20001).fill(0);
	for (let i = 0; i < nums.length; i++) {
		arr[nums[i] + 10000]++;
	}
	let flag = true;
	let sum = 0;
	for (let i = 0; i < 20001; i++) {
		while (arr[i] > 0) {
			if (flag) {
				sum += i - 10000;
			}
			flag = !flag;
			arr[i]--;
		}
	}
	return sum;
};
