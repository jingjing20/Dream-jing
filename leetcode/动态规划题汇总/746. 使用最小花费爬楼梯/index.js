/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	cost.push(0);
	let n = cost.length;
	let dp = [];
	dp[0] = cost[0];
	dp[1] = cost[1];
	for (let i = 2; i < n; i++) {
		dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
	}
	return dp[n - 1];
};

let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost)); //jing-log
