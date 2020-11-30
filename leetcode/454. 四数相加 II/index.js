/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
	let count = 0;
	let map = new Map();
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			map.set(A[i] + B[j], (map.get(A[i] + B[j]) || 0) + 1);
		}
	}
	for (let k = 0; k < C.length; k++) {
		for (let l = 0; l < D.length; l++) {
			let sumAB = -(C[k] + D[l]);
			if (map.get(sumAB)) count += map.get(sumAB);
		}
	}
	return count;
};
let A = [1, 2];
let B = [-2, -1];
let C = [-1, 2];
let D = [0, 2];
console.log(fourSumCount(A, B, C, D));
