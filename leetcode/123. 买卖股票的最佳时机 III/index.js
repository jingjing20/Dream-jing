/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let flag = 0;
	let jing = [];
	for (let i = 0; i < prices.length; i++) {
		if (prices[i + 1] < prices[i]) {
			jing.push(prices[i] - prices[flag]);
			flag = i + 1;
		}
	}
	console.log(jing);
	jing.sort((a, b) => a - b);
	return jing[0] + jing[1];
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]));
