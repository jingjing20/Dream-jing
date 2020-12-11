/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let res = [];
	for (let i = 0; i < numRows; i++) {
		const row = new Array(i + 1).fill(1);
		for (let j = 1; j < row.length - 1; j++) {
			row[j] = res[i - 1][j] + res[i - 1][j - 1];
		}
		res.push(row);
	}
	return res;
};

console.log(generate(5));
