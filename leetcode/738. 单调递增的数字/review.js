/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function (N) {
	let s = N.toString().split('');
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] > s[i + 1]) {
			s[i]--;
			for (let j = i + 1; j < s.length; j++) s[j] = '9';
			// 为什么要让 i = -1 ？ 因为可能会有前面连续好几位相同的数字都比后面某位数字大。 比如 332
			i = -1;
		}
	}
	return parseInt(s.join(''));
};

console.log(monotoneIncreasingDigits(10)); //jing-log
