/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	cost.push(0);
	let n = cost.length;
	let prev = cost[0];
	let curr = cost[1];
	for (let i = 2; i < n; i++) {
		let next = Math.min(prev, curr) + cost[i];
		prev = curr;
		curr = next;
	}
	return curr;
};

// 滚动数组优化空间
let cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost)); //jing-log
