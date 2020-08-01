/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  if(n === 2) return 1;
  if(n === 3) return 2;
  let jing = Math.floor(n / 3);
  let hao = n % 3;
  if(hao === 0) return Math.pow(3,jing);
  if(hao === 1) return Math.pow(3,jing -1) * 4;
  if(hao === 2) return Math.pow(3,jing) * 2;
}

console.log(integerBreak(5));