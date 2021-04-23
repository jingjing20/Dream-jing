/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	if (!s || s.length < 1) return 0; //如果为空
	var left = (right = max = 0); //用两个变量代替模拟栈的意义
	// 用 left 记录 '(' 的数量 用 right 记录 ')' 的数量
	for (var i = 0; i < s.length; i++) {
		//时间复杂度O(n)
		if (s[i] == '(') {
			left++;
		} else {
			right++;
		}
		if (left == right) {
			max = Math.max(max, 2 * right); //2*right 就是有效匹配的长度
		} else if (right > left) {
			left = right = 0; //重新开始
		}
	}

	left = right = 0;
	for (var i = s.length - 1; i >= 0; i--) {
		if (s[i] == '(') {
			left++;
		} else {
			right++;
		}
		if (left == right) {
			max = Math.max(max, 2 * left);
		} else if (left > right) {
			left = right = 0;
		}
	}
	return max;
};

console.log(longestValidParentheses(')))())'));
console.log(longestValidParentheses('(((()))('));
