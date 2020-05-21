/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || s.length < 2) {
    return s;
  }
  let res = '';
  let n = s.length;
  // 中心扩展法
  let centerExpend = (left, right) => {
    while (left >= 0 && right < n && s[left] == s[right]) {
      left--;
      right++;
    }
    return s.substring(left, right - left - 1);
  }
  for (let i = 0; i < n; i++) {
    let str1 = centerExpend(i, i);
    let str2 = centerExpend(i, i + 1);
    // 两种组合取最大回文串的长度
    if (str1.length > str2.length) {
      res = str1
    } else {
      res = str2
    }
  }
  return res
};

console.log(longestPalindrome("babad"));

