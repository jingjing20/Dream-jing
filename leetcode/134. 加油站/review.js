/**
 *
 * @param {Array} gas
 * @param {Array} cost
 */
const canCompleteCircuit = (gas, cost) => {
	let start = 0,
		left = 0,
		tolNumGas = 0,
		tolNumCost;
	for (let i = 0; i < gas.length; i++) {
		tolNumCost += cost[i];
		tolNumGas += gas[i];
		left += gas[i] - cost[i];
		if (left < 0) {
			start = i + 1;
			left = 0;
		}
	}

	if (tolNumGas < tolNumCost) {
		return -1;
	}

	return start;
};

let gas = [1, 2, 3, 4, 5],
	cost = [3, 4, 5, 1, 2];

console.log(canCompleteCircuit(gas, cost));
// 输入:
// gas = [1, 2, 3, 4, 5]
// cost = [3, 4, 5, 1, 2]
