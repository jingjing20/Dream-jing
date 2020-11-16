/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  const n = A.length;
  const ans = Array(n);
  let i = 0;
  for (let val of A) {
    if (!(val & 1)) {
      ans[i] = val;
      i += 2;
    }
  }
  i = 1;
  for (let val of A) {
    if (val & 1) {
      ans[i] = val;
      i += 2;
    }
  }
  return ans;
}


let arr = [3, 6, 5, 2, 4, 9];
console.log(sortArrayByParityII(arr))