/**
 * 
 * @param {String} s 
 * @return {boolean}
 */
var valid = function(s) {
    if (!s || s.length < 1) return true; //字符串为空
    var n = s.length; //字符串长度
    var stack = []; //js没有栈数据结构 用数组模拟栈
    //栈 FILO用数组的 push() pop()方法模拟栈 分别数组尾部插入 删除
    for (var i = 0; i < n; i++) { //时间复杂度O(n)
        var c = s[i];
        // console.log(c)
        if (c == '(') {
            stack.push(c)
        } else {
            if (stack.length < 1) { //无效
                return false
            }
            stack.pop() //出栈
        }
    }
    return stack.length > 0 ? false : true
}

console.log(valid('())'))