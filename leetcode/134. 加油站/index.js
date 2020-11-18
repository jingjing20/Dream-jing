/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0, left = 0, tolsumGas = 0, tolsumCost = 0;
  const n = gas.length;
  for (let i = 0; i < n; i++) {
    tolsumGas += gas[i];
    tolsumCost += cost[i];
    left += gas[i] - cost[i];
    if (left < 0) {
      start = i + 1;
      left = 0;
    }
  }
  if (tolsumGas < tolsumCost) {
    return -1;
  }
  return start;
};

let gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
// 输入:
// gas = [1, 2, 3, 4, 5]
// cost = [3, 4, 5, 1, 2]
