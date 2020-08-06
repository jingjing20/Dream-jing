/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, add = 0,result = [];
  while(i >= 0 || j >= 0 || add != 0) {
    const x = i >= 0 ? num1.charAt(i) - '0' : 0;
    const y = j >= 0 ? num2.charAt(j) - '0' : 0;
    const jing = x + y + add;
    result.push(jing % 10);
    add = Math.floor(jing / 10);
    i -= 1;
    j -= 1;
  }
  return result.reverse().join('');
};