/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // 存放累计次数的栈
  let countStack = [];
  // 存放累计字符串的栈
  let stringStack = [];
  // 用来累积的字符串 res
  let res = "";
  // 表示重复次数
  let multi = 0;
  // 开始循环
  for (let i = 0; i < s.length; i++) {
    let cur = s.charAt(i);
    if (cur === "[") {
      // 入栈保存当前所处的状态
      countStack.push(multi);
      stringStack.push(res);
      // 纷纷置空，准备下面的累积
      multi = 0;
      res = ""
    } else if (cur === "]") {
      // 遇到 ]，表示累积结束，要算账了。
      // 【当前的串出现多少次】还保存在栈中，把它取出来 定义一个临时变量计算res
      let count = countStack.pop();
      let temp = "";
      // 让 [ 和 ] 之间的字符串(就是累积字符串res)重复 count 次
      for (let i = 0; i < count; i++) {
        temp += res;
      }
      // 和前面已经求得的字符串进行拼接
      res = stringStack.pop() + temp;
    } else if (cur >= '0' && cur <= '9') {
      // multi累积
      multi = multi * 10 + (cur - '0')
    } else {
      // 字符累积
      res += cur;
    }
  }
  return res;
};

console.log(decodeString("3[a2[c]]"))
