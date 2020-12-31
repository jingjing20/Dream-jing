// 解法一
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	sort(stones);
	while (stones.length > 1) {
		const x = stones.pop() - stones.pop();
		if (x) stones.push(x);
		sort(stones);
	}
	return stones.length === 1 ? stones[0] : 0;
};
const sort = (stones) => stones.sort((a, b) => a - b);
let arr = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(arr)); //jing-log

// 解法二
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	stones.sort((a, b) => a - b);
	if (stones.length > 1) {
		const x = stones.pop() - stones.pop();
		if (x) stones.push(x);
		return lastStoneWeight(stones);
	}
	return stones.length === 1 ? stones[0] : 0;
};
