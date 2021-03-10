/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
	let len = m + n - 1;
	while (m > 0 && n > 0) {
		nums1[len--] = nums1[m - 1] < nums2[n - 1] ? nums2[--n] : nums1[--m];
	}
	if (n > 0) {
		nums1.splice(0, n, ...nums2.slice(0, n));
	}
	return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;

console.log(merge(nums1, m, nums2, n));
