var jingjing = function(nums) {
    let index = 0;
    for(var i = 0;i < nums.length; i++){
        let num = nums[i];
        if(num != 0){
            nums[index] = num;
            index++;
        }
    }
    for(let i = index; i < nums.length; i++){
        nums[i]=0;
    }
}
const nums = [2,0,6,0,8,9,0,12,0,34,0,6,0];     
jingjing(nums);
console.log(nums);