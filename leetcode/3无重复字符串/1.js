/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = s => {
  let len = s.length
  if (len <= 1) {
    return len
  }
  let max = 1
  let recode = 0
  for (let i = 0; i < len; i++) {
    let index = s.indexOf(s[i], recode)
    if (index < i) {
      recode = index + 1
    }
    max = Math.max(max, i - recode + 1)
  }
  return max
};

console.log(lengthOfLongestSubstring("abcabcbb"))