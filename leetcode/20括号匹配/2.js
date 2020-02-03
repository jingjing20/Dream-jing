var isValid = function(s) {
    var rightSymbols = []; //定义存放右括号的数组
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            rightSymbols.push(")");
        } else if (s[i] == "{") {
            rightSymbols.push("}");
        } else if (s[i] == "[") {
            rightSymbols.push("]");
        } else if (rightSymbols.pop() != s[i]) { //取出栈顶元素与当前遍历字符比较
            return false;
        }
    }
    return !rightSymbols.length; //如果还有未匹配的括号就返回false
};

console.log(isValid('()[]{}'));