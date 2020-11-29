/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
	let table = Array(26).fill(0);
	for (let char of s) {
		table[char.codePointAt() - 'a'.codePointAt()]++;
	}
	let res = '';
	while (res.length < s.length) {
		for (let i = 0; i < 26; i++) {
			if (table[i]) {
				res += String.fromCodePoint(i + 97);
				table[i]--;
			}
		}
		for (let i = 25; i >= 0; i--) {
			if (table[i]) {
				res += String.fromCodePoint(i + 97);
				table[i]--;
			}
		}
	}
	return res;
};

// 输入：s = "leetcode"
// 输出："cdelotee"

let s = 'leetcode';
console.log(sortString(s));
