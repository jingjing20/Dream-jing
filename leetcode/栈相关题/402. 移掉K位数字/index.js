// 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

// 输入: num = "1432219", k = 3
// 输出: "1219"
// 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-k-digits
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
	let stack = [];
	for (let i = 0; i < num.length; i++) {
		const c = num[i];
		while (k > 0 && stack.length && stack[stack.length - 1] > c) {
			stack.pop();
			k--;
		}
		if (c != '0' || stack.length > 0) {
			stack.push(c);
		}
	}
	while (k > 0) {
		stack.pop();
		k--;
	}
	return stack.length === 0 ? '0' : stack.join('');
};

let num = '1432219',
	k = 3;
console.log(removeKdigits(num, k));
