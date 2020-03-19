/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsObj[nums[i]]) delete numsObj[nums[i]];
    else numsObj[nums[i]] = 1;
  }
  return parseInt(Object.keys(numsObj)[0]);
};

console.log(singleNumber([1,2,3,3,2]))
