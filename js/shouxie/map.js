Array.prototype.MyMap = function(fn, context){
  var arr = Array.prototype.slice.call(this);//由于是ES5所以就不用...展开符了
  console.log(fn,context)
  var mappedArr = [];
  for (var i = 0; i < arr.length; i++ ){
    mappedArr.push(fn.call(context, arr[i], i, this));
  }
  return mappedArr;
}

// let arr = [[1, 2, 4], [1, 2, 3], [1, 3, 4], [1, 3, 2]]

// for(let i = 0; i < arr.length; i++){
//   arr[i] = arr[i].join('')
// }
// // console.log(arr)
// arr.sort((a,b)=>a-b)
// // console.log(arr)
// for(let i = 0; i < arr.length; i++){
//   arr[i] = arr[i].split('').MyMap(item =>{
//     return parseInt(item)
//   })
// }
// console.log(arr)

let test = [1,2,3]
let jing = test.MyMap(item => {
  return item*2
})

console.log(jing)
console.log(test)