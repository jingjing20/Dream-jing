// 简单动态规划题
// 爬第n阶楼梯的方法数量，等于下面 2 部分之和
// 爬上 n−1 阶楼梯的方法数量。因为再爬 1 阶就能到第 n阶
// 爬上 n−2 阶楼梯的方法数量，因为再爬 2 阶就能到第 n阶
// 所以我们得到公式 dp[n] = dp[n-1] + dp[n-2]dp[n]=dp[n−1]+dp[n−2]
// 同时需要初始化 dp[0]=1 和 dp[1]=1
// 时间复杂度：O(n)

var climbStairs = function (n) {
	let dp = [];
	dp[0] = 1;
	dp[1] = 1;
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
};

console.log(climbStairs(3));
