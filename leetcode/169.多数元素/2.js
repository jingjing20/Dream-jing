var majorityElement = function(nums) {
  let array = nums.sort()
  if(array.length % 2 == 0) {
    return array[(array.length)/2 - 1]
  }else {
    return array[(array.length + 1)/2 -1]
  }
}

console.log(majorityElement([3,2,3]))