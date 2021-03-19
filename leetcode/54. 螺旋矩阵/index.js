/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let row = matrix.length,
		cols = matrix[0].length;
	let t = 0,
		r = cols - 1,
		b = row - 1,
		l = 0,
		size = row * cols;
	let res = [];
	while (res.length !== size) {
		for (let i = l; i <= r; i++) res.push(matrix[t][i]);
		t++;
		for (let i = t; i <= b; i++) res.push(matrix[i][r]);
		r--;
		if (res.length === size) break;
		for (let i = r; i >= l; i--) res.push(matrix[b][i]);
		b--;
		for (let i = b; i >= t; i--) res.push(matrix[i][l]);
		l++;
	}
	return res;
};
