/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 贪心思想
var canJump = function (nums) {
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        if(max < i) {                               // 如果能跳跃的最远位置还没到下次循环位置的下标 说明跳不到最后了
            return false;
        }
        max = Math.max(max, nums[i] + i);           // 求每一步能跳跃到的最远位置
    }
    return true;
};

let nums = [2, 3, 1, 1, 4]
console.log(canJump(nums));