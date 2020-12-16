/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
	let fiveCount = 0,
		tenCount = 0;
	for (let bill of bills) {
		if (bill == 5) {
			fiveCount++;
		} else if (bill === 10) {
			if (fiveCount === 0) {
				return false;
			}
			fiveCount--;
			tenCount++;
		} else {
			if (fiveCount >= 1 && tenCount > 0) {
				fiveCount--;
				tenCount--;
			} else if (fiveCount >= 3) {
				fiveCount -= 3;
			} else {
				return false;
			}
		}
	}
	return true;
};
