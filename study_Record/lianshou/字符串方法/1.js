// var reverseWords = function (s) {
//   return s.split(' ').filter(item => item).reverse().join(' ')
// };
/**
 * 
 * @param {string} s 
 */
var reverseWords = function (s) {
  let str = s.trim();
  let i = j = str.length;
  let hao = [];
  while (i >= 0) {
    while (str[i] != ' ' && i >= 0) {
      i--;
    }
    hao.push(str.substring(i + 1, j + 1));
    while (str[i] == ' ') {
      i--;
    }
    j = i;
  }
  return hao.join(' ');
};

console.log(reverseWords("     hello    world!  "))
let jing = new Date()
console.log(jing)   //2020-04-11T16:20:27.868Z