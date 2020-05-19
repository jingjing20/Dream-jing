/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0, right = s.length - 1;   //定义双指针
  while (left < right) {
    if (s[left] !== s[right]) {
      return isHuiWen(s, left, right - 1) || isHuiWen(s, left + 1, right)
    }
    left++
    right--
  }
  return true
};

function isHuiWen(s, l, r) {
  while (l < r) {
    if (s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}

