// 给定一个非负整数 N，找出小于或等于 N 的最大的整数，同时这个整数需要满足其各个位数上的数字是单调递增。
// （当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。）

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
	let s = N.toString().split('');
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] > s[i + 1]) {
			s[i]--;
			for (let j = i + 1; j < s.length; j++) {
				s[j] = '9';
			}
			i = -1;
		}
	}
	return parseInt(s.join(''));
};

console.log(monotoneIncreasingDigits(329)); //jing-log
