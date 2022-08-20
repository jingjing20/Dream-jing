// 利用位运算
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let res = [0, 0],
        flag = 1;
    let mask = 0; //任何数和 0 异或都等于自身
    // 得到不同的两个数
    for (let i = 0; i < nums.length; i++) {
        mask ^= nums[i];
    }
	while ((mask & flag) === 0) flag = flag << 1;
    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] & flag) === 0) {
            res[0] ^= nums[i];
        } else {
            res[1] ^= nums[i];
        }
    }
    return res;
};

let nums = [1, 2, 1, 3, 2, 5];
console.log(singleNumber(nums)); //jing-log

// 异或操作法则： 两个数相同为0、不同才为1。
// 所以任何数和 0 异或都等于自身。两个相等的数异或一定等于0。
// 时间复杂度是O(n)、空间复杂度是O(1)。
