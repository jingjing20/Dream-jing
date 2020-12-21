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
			i = -1;
		}
	}
	return parseInt(s.join(''));
};

console.log(monotoneIncreasingDigits(10)); //jing-log
