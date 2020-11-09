// 自己的思路解法、、、

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  let result = [];
  let resultMap = new Map();
  let jing = [];
  const calculate = (arr) => {
    return Math.pow(arr[0], 2) + Math.pow(arr[1], 2);
  }
  points.forEach(item => {
    if (resultMap.get(calculate(item))) {
      jing.push(calculate(item) + 1);
      resultMap.set(calculate(item) + 1, item);
    } else {
      jing.push(calculate(item));
      resultMap.set(calculate(item), item);
    }
  })
  jing.sort((a, b) => a - b).splice(0, K).forEach(item => {
    result.push(resultMap.get(item));
  });
  return result;
};