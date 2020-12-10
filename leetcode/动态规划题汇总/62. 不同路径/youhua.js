/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	const dp = new Array(m).fill(1);
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[j] = dp[j] + dp[j - 1];
		}
		console.log(dp); //jing-log
	}
	return dp[n - 1];
};

console.log(uniquePaths(7, 3)); //jing-log      28
