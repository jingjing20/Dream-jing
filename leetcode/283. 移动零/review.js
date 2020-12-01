var moveZeroes = function (nums) {
	let j = 0;
	for (let i = 0; i < nums.length; i++) {
		// 非 0 元素往前放
		if (nums[i] !== 0) {
			nums[j] = nums[i];
			j++;
			if (i !== j) {
				nums[i] = 0;
			}
		}
	}
	return nums;
};

let arr = [0, 9, 6, 0, 2, 4, 0, 5, 0, 1];
console.log(moveZeroes(arr));
