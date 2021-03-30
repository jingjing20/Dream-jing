/**
 *
 * @param {String} str
 */
function getMinSort(str) {
	let count = 1;
	let strArr = str.split('');
	for (let i = 1; i < strArr.length; i++) {
		if (strArr[i] > strArr[i - 1] && count > 0) {
			strArr = swap(strArr.slice(), i);
			count--;
		}
	}
	return strArr.join('');
}

function swap(strArr, i) {
	let index = 0;
	let temp = strArr[i];
	for (let j = i; j < strArr.length - 1; j++) {
		if (strArr[j + 1] < temp) {
			temp = strArr[j + 1];
			index = j + 1;
		}
	}
	let jing = strArr[i];
	strArr[i] = strArr[index];
	strArr[index] = jing;
	return strArr.slice();
}

let str = 'aaazbcdeadcd';
// aaaabcdezdcd
// aaaacdezdcd
console.log(getMinSort(str)); //jing-log

// let str = ['c', 'e', 'a'];
// let res = str.sort((a, b) => {
// 	return a.codePointAt() - b.codePointAt();
// });
// console.log(res); //jing-log
