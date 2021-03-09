/**
 * 用栈来操作 和括号匹配差不多一样的做法
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
	let stack = [];
	for (const char of S) {
		if (stack.length && stack[stack.length - 1] === char) {
			stack.pop();
		} else {
			stack.push(char);
		}
	}
	return stack.join('');
};
