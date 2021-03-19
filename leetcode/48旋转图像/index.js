/**
 *
 * @param {Array} hao
 */

function jing(hao) {
	let length = hao.length;
	for (let i = 0; i < length; i++) {
		for (let j = i; j < length; j++) {
			[hao[i][j], hao[j][i]] = [hao[j][i], hao[i][j]];
		}
	}
	hao.forEach((row) => row.reverse());
	return hao;
}

console.log(
	jing([
		[5, 1, 9, 11],
		[2, 4, 8, 10],
		[13, 3, 6, 7],
		[15, 14, 12, 16],
	])
);
