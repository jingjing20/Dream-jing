/**
 * 
 * @param {String} s 
 */

var reverseWords = function (s) {
  let str = s.trim();
  let i = j = str.length - 1;
  let jing = [];
  while (i >= 0) {
    while (str[i] != ' ' && i >= 0) {
      i--;
    }
    jing.push(str.substring(i + 1, j + 1))
    while (str[i] == ' ') {
      i = i - 1;
    }
    j = i;
  }
  return jing.join(' ')
};


console.log(reverseWords("  hello   world!  "))