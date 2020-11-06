/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let left = 0;
  let right = A.length - 1;
  while (left < A.length - 1 && A[left] < A[left + 1]) {
    left++;
  }
  while (right > 1 && A[right] < A[right - 1]) {
    right++;
  }
  if (left !== 0 && left == right && right !== A.length - 1) {
    return true;
  }
  return false;
}