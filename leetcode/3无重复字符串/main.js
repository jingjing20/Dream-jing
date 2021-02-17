/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let res = 0;
	let start = 0;
	for (let end = 0; end < s.length; end++) {
		let position = s.indexOf(s[end], start);
		if (position < end) {
			start = position + 1;
		}
		res = Math.max(res, end - start + 1);
	}
	return res;
};

let s = 'abcabcbb';
console.log(lengthOfLongestSubstring(s)); //jing-log
