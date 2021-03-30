/**
 *
 * @param {Array} arr
 */
function spin(arr) {
	let res = arr.splice(0, 1)[0];
	res = [...res];
	while (arr.length !== 0) {
		arr = reverArr(arr);
		console.log('arr-----', arr); //jing-log
		res.concat(arr.slice(arr.length - 2, arr.length - 1));
		arr = arr.splice(0, arr.length - 1);
	}
	return res;
}

/**
 *
 * @param {Array} arr
 */
function reverArr(arr) {
	let n = arr.length;
	let m = arr[0].length;
	let res = new Array(m).fill(0).map(() => new Array(n).fill(0));
	// console.log(res); //jing-log
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			res[i][j] = arr[j][i];
		}
	}
	return res;
}

let arr = [
	[1, 2, 3],
	[10, 11, 4],
	[9, 12, 5],
	[8, 7, 6],
];

console.log(spin(arr)); //jing-log
