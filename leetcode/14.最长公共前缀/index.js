/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return '';
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;    //用于后面截取字符串的长度
    for (; j <= ans.length && j <= strs[i].length; j++) {
      if (ans[j] != strs[i][j]) {
        break
      }
    }
    ans = ans.substring(0, j);
    if (ans.length === 0) return '';
  }
  return ans
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))