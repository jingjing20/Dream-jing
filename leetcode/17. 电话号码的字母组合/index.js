// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
// 给出数字到字母的映射如下（与电话按键相同）
// const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
/**
 * 
 * @param {Array} digits 
 */
const letterCombinations = (digits) => {
  if(digits.length === 0) return [];    //如果为空直接返回空数组
  const res = [];
  const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
  const dfs = (curStr, i) => {
    if(i > digits.length - 1) {
      res.push(curStr);
      return;
    }
    const letter = map[digits[i]];
    for(jing of letter) {
      dfs(curStr + jing, i + 1)
    }
  }
  dfs("", 0);
  return res;
}
console.log(letterCombinations("23"));

// const letterCombinations = (digits) => {
//   if (digits.length == 0) return [];
//   const res = [];
//   const map = { '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };

//   const dfs = (curStr, i) => {      // curStr是当前字符串，i是扫描的指针
//     if (i > digits.length - 1) {    // 指针越界，递归的出口
//       res.push(curStr);             // 将解推入res
//       return;                       // 结束当前递归分支，进入另一个递归分支
//     }
//     const letters = map[digits[i]]; // 当前数字对应有哪些字母
//     for (const l of letters) {      // 不同的字母选择代表不同的递归分支
//       dfs(curStr + l, i + 1);  // 生成新字符串，i指针右移，递归
//     }
//   };
//   dfs('', 0); // 递归的入口，初始字符串为''，指针为0
//   return res;
// };
