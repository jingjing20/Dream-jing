/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	let newStr = s
		.replace(/[^0-9a-zA-Z]/g, '')
		.toLowerCase()
		.split('');
	return newStr.join('') == newStr.reverse().join('');
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
