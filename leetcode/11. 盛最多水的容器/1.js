/**
 * @param {Array} height 
 */

var maxArea = function (height) {
  let jing = 0, max = 0;
  let i = 0, j = height.length - 1;
  while (j > i) {
    if (height[j] > height[i]) {
      jing = height[i] * (j - i);
      i++;
    } else {
      jing = height[j] * (j - i);
      j--;
    }
    max = Math.max(max, jing)   //每次更新最大值
  }
  return max;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
// 49