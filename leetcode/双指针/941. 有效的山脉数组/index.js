// 给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。
// 让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

// A.length >= 3
// 在 0 < i < A.length - 1 条件下，存在 i 使得：
// A[0] < A[1] < ... A[i-1] < A[i]
// A[i] > A[i+1] > ... > A[A.length - 1]

/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function (A) {
  let i = 0, j = A.length - 1;
  while (i < A.length - 1 && A[i] < A[i + 1]) {
    i++;
  }
  while (j >= 1 && A[j] < A[j - 1]) {
    j--;
  }
  if (i !== 0 && i === j && j !== A.length - 1) {
    return true;
  }
  return false;
};