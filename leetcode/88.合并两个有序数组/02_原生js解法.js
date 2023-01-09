/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
	let index1 = m - 1;
	let index2 = n - 1;
	let tail = m + n - 1;
	// 从后往前排
	while (index1 >= 0 && index2 >= 0) {
		if (nums1[index1] > nums2[index2]) {
			nums1[tail] = nums1[index1];
			index1--;
		} else {
			nums1[tail] = nums2[index2];
			index2--;
		}
		tail--;
	}
	// 剩余的都一个一个插入到 nums1中
	while (index1 >= 0) {
		nums1[tail] = nums1[index1];
		index1--;
		tail--;
	}
	// 剩余的都一个一个插入到 nums1中
	while (index2 >= 0) {
		nums1[tail] = nums2[index2];
		index2--;
		tail--;
	}
	return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0],
	m = 3,
	nums2 = [2, 5, 6],
	n = 3;

console.log(merge(nums1, m, nums2, n));
