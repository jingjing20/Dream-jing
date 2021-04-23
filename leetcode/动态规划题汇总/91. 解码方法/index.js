/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	if (s[0] === '0') return 0;
	const len = s.length,
		dp = [1, 1, ...new Array(len - 1).fill(0)];
	for (let i = 2; i <= len; i++) {
		let one = s.slice(i - 1, i);
		let two = s.slice(i - 2, i);
		if (one > 0 && one < 10) dp[i] += dp[i - 1];
		if (two >= 10 && two <= 26) dp[i] += dp[i - 2];
	}
	return dp[len];
};

// 输入：s = "226"
// 输出：3
// 解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。

let s = '226';
console.log(numDecodings(s)); //jing-log
