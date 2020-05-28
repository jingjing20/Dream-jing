//函数表达式
moveZero = (nums) => {
    //定义一个慢指针
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num != 0) {
            nums[index++] = num;
        }
        // return nums;
    }
    for (let i = index; i < nums.length; i++) {
        nums[index++] = 0;
    }
}
const nums = [0, 1, 0, 3, 12];
moveZero(nums);
console.log(nums);
