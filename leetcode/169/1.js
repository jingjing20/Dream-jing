var majorityElement = function(nums) {
  let count = 0, // 次数的计数
    majority = nums[0]; //假设第一个数是majority
  // 算法回归运算  
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) { //少数派
      majority = nums[i]; //派人了
    }
    if (nums[i] == majority) {
      count++;
    } else {
      count--; //少数投出去 
    }
  }
  return majority;
}

console.log(majorityElement([1,1,1,2,2,2,2,3]))