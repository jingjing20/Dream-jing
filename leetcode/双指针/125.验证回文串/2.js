/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let l = 0, r = newStr.length - 1;

  while (l < r) {
    if (newStr[l] != newStr[r]) {
      return false
    }
    l++
    r--
  }
  return true
};


console.log(isPalindrome("A man, a plan, a canal: Panama"))