//函数表达式
let moveZero;
moveZero = (nums) =>{
     let notZeroArr = [],
         zeroArr = [];
    let index = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0){
             zeroArr.push(0);
        }else{
            notZeroArr.push(nums[i]);
        }
    }
    return notZeroArr.concat(zeroArr);
}
console.log(moveZero([0,1,0,3,12]));
//moveZero([0,1,0,3,12]);
//console.log('jdhfdj');
