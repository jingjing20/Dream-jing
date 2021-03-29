/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	let hash = {};
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		if (hash[nums[i]] !== undefined) {
			hash[nums[i]]++;
		} else {
			hash[nums[i]] = 1;
		}
	}
	Object.keys(hash).map((item) => {
		if (hash[item] === 1) res.push(parseInt(item));
	});
	return res;
};

let nums = [1, 2, 1, 3, 2, 5];
console.log(singleNumber(nums)); //jing-log

// 时间复杂度是O(n)、空间复杂度也是O(n)。
