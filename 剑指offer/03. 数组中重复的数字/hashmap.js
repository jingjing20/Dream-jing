/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let jing = new Map();
  for (let item of nums) {
    if (!jing.has(item)) {
      jing.set(item, true);
    } else {
      return item;
    }
  }
};

console.log(findRepeatNumber([1,3,6,4,3]));