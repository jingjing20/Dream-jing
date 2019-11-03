//数组去重
/**
 * @param {array} arr
 * @return {Array}
 */
// function unique(arr){    es5
// function 关键字没有了 代替的是es6箭头函数 (参数) => {}

let fn;
console.log(typeof fn);     //类型未定义的
fn =null;
console.log(typeof fn);
fn = () => {}; 
console.log(typeof fn);
const unique = (arr) =>{
    let res = [];   //数组

    for(var i = 0,arrLen =arr.length; i < arrLen; i++){
        var current = arr[i];   //基地 局部变量 缓存
        if(res.indexOf(arr[i]) == -1){          //== -1 意思是没有
            res.push(current);
        }
    }
    // for(var i = 0; i < arr.length; i++){
    //     let isIn = false;
    //     for(var j =0; j < res.length; j++){
    //         if(arr[i] === res[j]){
    //             isIn = true;
    //             break;
    //         }
    //     }
    //     if(!isIn){1
    //     res.push(arr[i]);
    //     }
    // }
    return res;
}

var arr = ['1',2,3,2,4,1];
console.log(unique(arr));
console.log(typeof unique == 'function' && unique(arr));
