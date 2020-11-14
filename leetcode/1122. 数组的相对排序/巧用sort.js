/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

var relativeSortArray = function (arr1, arr2) {
  return arr1.sort((a, b) => {
    let ai = arr2.indexOf(a);
    let bi = arr2.indexOf(b);
    if (ai === -1 && bi === -1) {
      return a - b;
    } else if (ai === -1) {
      return 1;
    } else if (bi === -1) {
      return -1
    } else {
      return ai - bi;
    }
  })
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]

console.log(relativeSortArray(arr1, arr2))