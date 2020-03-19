/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++)
    temp = temp ^ nums[i];
  return temp;
};

console.log(singleNumber([1,2,3,3,2]))

//异或运算有以下几个特点：
// 一个数和 0 做 XOR 运算等于本身：a⊕0 = a
// 一个数和其本身做 XOR 运算等于 0：a⊕a = 0
// XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b
// 故而在以上的基础条件上，将所有数字按照顺序做抑或运算，最后剩下的结果即为唯一的数字
// 时间复杂度：O(n)O(n)，空间复杂度：O(1)O(1)