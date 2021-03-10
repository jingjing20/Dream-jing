/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;
var merge = function (nums1, m, nums2, n) {
	nums1.splice(m);
	let newArr = nums1.concat(nums2);
	return newArr.sort((a, b) => a - b);
};

console.log(merge(nums1, m, nums2, n));
