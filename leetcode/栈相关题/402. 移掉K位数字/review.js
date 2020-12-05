// 给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

// 输入: num = "1432219", k = 3
// 输出: "1219"
// 解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 思路如下：
 * 1、数组模拟栈，在遍历过程中维护一个单调栈，这里是想要留下的数字最小，所以当栈顶元素大于当前元素的时候把栈顶元素 pop() 掉，同时 k-1。
 * 2、当遍历完成后 如果 k > 0，就继续从数组里面 pop() 元素，直到 k = 0。
 */
var removeKdigits = function (num, k) {
	let stack = [];
	for (let i = 0; i < num.length; i++) {
		const c = num[i];
		while (k > 0 && stack.length && stack[stack.length - 1] > c) {
			stack.pop();
			k--;
		}
		stack.push(c);
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
