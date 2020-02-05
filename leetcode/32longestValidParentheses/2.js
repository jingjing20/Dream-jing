/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    // 时间复杂度O(n)
    var max = 0; //最大长度初始化0
    if (s.length == 0 || s.length == 1) return max;
    //下标减法就是长度
    var stack = [-1]; //数组模拟栈用于括号匹配    初始化为-1方便于后面计算
    for (var i = 0; i < s.length; i++) {
        // 下标法 只要一次遍历 时间复杂度为O(n)
        if (s[i] == '(') { //左括号 下标入栈
            stack.push(i); //i就是下标
        } else if (s[i] == ')') {
            stack.pop(); //右括号 下标出栈
            // 栈顶元素没了 那么前面的有效匹配结束了 后面的开始 那就要减去当前的下标 所以push当前下标
            if (stack.length < 1) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]) //有效的括号匹配
            }
        }
    }
    return max;
}

console.log(longestValidParentheses(')()())'));
console.log(longestValidParentheses('(((()))('));