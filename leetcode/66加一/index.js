/**
 * 
 * @param {Array} nums 
 */
function jing(nums) {
  let len = nums.length
  for (let i = len - 1; i >= 0; i--) {
    nums[i]++
    nums[i] %= 10
    if (nums[i] != 0) return nums
  }
  return [1, ...nums]
}

console.log(jing([9, 9]))

// 解法：
// 从最后一位开始加一，加完后对 10 求余。
// 判断求余结果是否为 0 
// 不是的话说明没有进位 直接返回对最后一位加一后的结果。
// 遍历完后还没 return 说明需要在原数组最前面拼接一个 1 

