/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function (R, C, r0, c0) {
  let hash = new Map();
  let result = [];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const res = getD(i, j, r0, c0);
      if (!hash[res]) {
        hash[res] = [[i, j]];
      } else {
        hash[res].push([i, j]);
      }
    }
  }

  for (let k = 0; k <= R + C - 2; k++) {
    if(!hash[k]) continue;
    for (let val of hash[k]) {
      result.push(val);
    }
  }

  return result;

};

const getD = (R, C, r0, c0) => {
  return Math.abs(R - r0) + Math.abs(C - c0);
}

console.log(allCellsDistOrder(1, 2, 0, 0));