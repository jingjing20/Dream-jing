/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.lastIndexOf(nums[i]) === nums.indexOf(nums[i])) return nums[i];
  }
};

console.log(singleNumber([1,2,3,3,2]))

// const jing = [1,5,9,3,6,4,7,1,5,6];
// console.log(jing.indexOf(1)) 0
// console.log(jing.lastIndexOf(1)) 7
//第一次出现的索引和最后一次出现的索引相等 即为单一数字