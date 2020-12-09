/**
 * @param {String} string       // 需要转换的字符串
 * @param {Number | String} x   // 目标进制
 */
function convertStringToNumber(string, x) {
	if (arguments.length < 2) x = 10; // 默认使用10进制
	let chars = string.split('');
	let number = 0;
	let i = 0;
	while (i < chars.length && chars[i] !== '.') {
		number = number * x;
		number += chars[i].codePointAt() - '0'.codePointAt();
		i++;
	}

	if (chars[i] === '.') i++;
	let fraction = 1;
	while (i < chars.length) {
		fraction = fraction / x;
		number += (chars[i].codePointAt() - '0'.codePointAt()) * fraction;
		i++;
	}

	return number;
}
console.log(convertStringToNumber('1.0889')); //jing-log
