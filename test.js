/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let low = 0,
        high = nums.length - 1,
        time = 0;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (nums[mid] > target) high = mid - 1;
        else if (nums[mid] < target) low = mid + 1;
        else {
            time = 1;
            let i = mid + 1;
            let j = mid - 1;
            while (nums[i] === target) {
                time++;
                i++;
            }
            while (nums[j] === target) {
                time++;
                j--;
            }
            return time;
        }
    }
    return time;
};

let nums = [5, 7, 7, 7, 7, 8, 8, 10],
    target = 8;
console.log(search(nums, 4));