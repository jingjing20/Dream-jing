/**
 * 
 * @param {Array} nums 
 */
var canJump = function (nums) {
    let max = 0, len = nums.length;
    for (let i = 0; i < len; i++) {
        if (max < i) {
            return false;
        }
        max = Math.max(max, nums[i] + i);
        if (max > len - 1) {
            return true;
        }
    }
    return true;
}

let nums = [2, 3, 1, 1, 4]
console.log(canJump(nums));