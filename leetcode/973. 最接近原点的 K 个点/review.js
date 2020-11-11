// 自己的思路解法、、、

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  return points.sort((a, b) => 
    Math.pow(a[0], 2) + Math.pow(a[1], 2) - Math.pow(b[0], 2) - Math.pow(b[1], 2)
  ).slice(0, K);
};

let points = [[3, 3], [5, -1], [-2, 4]], K = 2;

console.log(kClosest(points, K))