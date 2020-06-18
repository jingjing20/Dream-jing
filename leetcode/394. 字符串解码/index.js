var decodeString = function (s) {
  // 存放 【重复次数】 的栈
  let countStack = [];
  // 存放 【累积字符串】 的栈
  let resStack = [];
  // 用来累积的字符串 res
  let res = "";
  // 表示重复次数
  let multi = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = s.charAt(i);
    if (cur == '[') {
      // 双双压栈，保存了当前的状态
      countStack.push(multi);
      resStack.push(res);
      // 纷纷置空，准备下面的累积
      multi = 0;
      res = "";
    } else if (cur == ']') {
      // 遇到 ]，表示累积结束，要算账了。
      // 【当前的串出现多少次】还保存在栈中，把它取出来
      let count = countStack.pop();
      let temp = "";
      // 让 [ 和 ] 之间的字符串(就是累积字符串res)重复 count 次
      for (let i = 0; i < count; i++) {
        temp += res;
      }
      // 和前面已经求得的字符串进行拼接
      res = resStack.pop() + temp;
    } else if (cur >= '0' && cur <= '9') {
      // multi累积
      multi = multi * 10 + (cur - '0');
    } else {
      // 字符累积
      res += cur;
      console.log(cur)
    }
  }
  return res;
};

console.log(decodeString("3[a2[c]]"))