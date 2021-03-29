/**
 * @param {string} s
 * @return {string}
 * 时间复杂度 O(n^3)
 */
var longestPalindrome = function (s) {
	let n = s.length;
	if (n <= 1) return s;
	let res = '';
	let max = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j <= n; j++) {
			let str = s.substring(i, j);
			if (isPalindrome(str) && str.length > max) {
				res = s.substring(i, j);
				max = str.length;
			}
		}
	}
	return res;
};

// 判断一个字符串是否是回文串
function isPalindrome(str) {
	let left = 0;
	let right = str.length - 1;
	while (left < right) {
		if (str[left] !== str[right]) return false;
		left++;
		right--;
	}
	return true;
}
