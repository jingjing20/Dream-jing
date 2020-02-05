/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var max = 0; //最大长度
    if (s.length < 1) return max; //没得匹配
    var stack = [] //使用栈来实现匹配 空间复杂度为O(n)
        //采用嵌套循环 比较一下
    for (var i = 0; i <= s.length; i++) {
        var tmpMax = 0; //当前位置括号的匹配长度 每次循环前重新计算
        for (var j = i; j < s.length; j++) {
            if (s[j] == '(') { //如果是左括号
                stack.push('('); //入栈
                tmpMax++;
            } else if (s[j] == ')') {
                //右括号
                if (stack.length < 1) {
                    //栈是空的 当前位置括号有效匹配结束了
                    max = max < tmpMax ? tmpMax : max;
                    break;
                } else {
                    tmpMax++;
                    stack.pop(); //出栈
                }
            }
        }
        if (stack.length == 0) { //从当前位置到最后一个位置都匹配是有效括号
            max = max < tmpMax ? tmpMax : max;
        }
        stack = [] //清空本次括号匹配
    }
    return max;
};

console.log(longestValidParentheses('(((()))('));
console.log(longestValidParentheses('((())('));