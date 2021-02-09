/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function (nums, k) {
// 	let n = nums.length;
// 	if (n == 0) return [];
// 	let res = [];
// 	for (let i = 0; i < n - k + 1; i++) {
// 		let max = Number.MIN_SAFE_INTEGER;
// 		for (let j = i; j < i + k; j++) {
// 			max = Math.max(max, nums[j]);
// 		}
// 		res.push(max);
// 	}
// 	return res;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
	if (k <= 1) return nums;
	const res = [];
	for (let i = 0; i < nums.length - k + 1; i++) {
		let arr = nums.slice(i, i + k);
		res.push(Math.max(...arr));
	}
	return res;
};
console.time();
let arr = [-3, 2, 7, -9, 4, 6, 7];
console.log(maxSlidingWindow(arr, 3));
console.timeEnd();
