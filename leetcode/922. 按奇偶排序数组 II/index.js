/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  const n = A.length;
  const res = Array(n);
  let i = 0;
  for (const val of A) {
    if (!val & 1) {
      res[i] = val;
      i += 2;
    }
  }
  i = 1;
  for (const val of A) {
    if (val & 1) {
      res[i] = val;
      i += 2;
    }
  }
  return res;
};
