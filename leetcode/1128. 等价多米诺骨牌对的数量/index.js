// 思路：直接将每个二元组做处理，让等价的骨牌对计算出来的值是一样的。处理方法即下面这句代码
// const val = domino[0] < domino[1] ? domino[1] * 10 + domino[0] : domino[0] * 10 + domino[1];
// 因为题目规定了二元组里面的值都是 1 <= dominoes[i][j] <= 9，所以定义一个长度为100的数组下标就可以存下所有计算后的值。
// 之后计算出来的值作为数组下标累加，然后结果 res 也累加得到结果。

/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
	let arr = new Array(100).fill(0);
	let res = 0;
	for (let domino of dominoes) {
		const val = domino[0] < domino[1] ? domino[1] * 10 + domino[0] : domino[0] * 10 + domino[1];
		res += arr[val];
		arr[val]++;
	}
	return res;
};
