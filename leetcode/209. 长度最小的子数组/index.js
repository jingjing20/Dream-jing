// 滑动窗口问题
// 扩张窗口：找可行解的过程，找到了就不再扩张
// 收缩窗口：在长度上优化该可行解，直到条件被破坏
// 然后寻找下一个可行解，然后再优化……
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let i = 0,
		j = 0,
		minLen = Infinity,
		sum = 0;
	while (j < nums.length) {
		//扩张找可行解
		sum += nums[j];
		while (sum >= target) {
			//收缩找最优解
			minLen = Math.min(minLen, j - i + 1);
			sum -= nums[i];
			i++;
		}
		j++;
	}
	return minLen === Infinity ? 0 : minLen;
};

let target = 7,
	nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
