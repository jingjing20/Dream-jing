/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const result = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let time = 0;
    for (let j = 0; j < len; j++) {
      if (nums[i] > nums[j]) {
        time++;
      }
    }
    result.push(time);
  }
  return result;
}

const arr = [3, 6, 1, 9, 7, 10, 5];
console.log(smallerNumbersThanCurrent(arr));