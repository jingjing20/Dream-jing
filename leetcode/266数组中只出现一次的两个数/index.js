/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function (nums) {
  let obj = {}, jing = []
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1
      jing.push(nums[i])
    } else {
      for (let j = 0; j < jing.length; j++) {
        if (jing[j] === nums[i])
          jing.splice(j, 1)
      }
    }
  }
  return jing
};

console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]))