//这一版没有重复计算
function climbStairs(n) {
	if (n === 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}
	if (n === 2) {
		return 2;
	}
	let beforeValue = 1,
		afterValue = 2;
	let result;
	for (let i = 3; i <= n; i++) {
		result = beforeValue + afterValue;
		beforeValue = afterValue;
		afterValue = result;
	}
	return result;
}

console.log(climbStairs(5));
