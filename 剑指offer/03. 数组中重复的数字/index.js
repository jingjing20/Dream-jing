/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let jing = new Set();     // 利用Set数据结构
  for (let item of nums) {
    let size = jing.size;   // 记录当前size
    jing.add(item);
    if (jing.size === size) { // 如果size没变 说明重复
      return item;
    }
  }
};

console.log(findRepeatNumber([1,3,6,4,3]));