// // 让 2s 输出 ‘hello world’ 完成 test。
function test(callback) {
  setTimeout(() => {
    callback('jing')
  }, 2000)
}

test(function (str) {
  console.log(str)
})

const arr1 = [1, 2, 3, 4, 5]
// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
let sum = arr1.reduce((acc, cur) => {
  // 0 + 10 => 10
  // 10 + 20 => 30
  // => 30
  console.log(acc, cur)
  return acc + cur
}, 0)
// 回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：
// 如果调用reduce()时提供了initialValue
// accumulator取值为initialValue，currentValue取数组中的第一个值；
// 如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。
console.log(sum);


const arr = [{ age: 10 }, { age: 20 }]

// Array.prototype.myMap = function (cb) {
//   let t = [];
//   for (let i = 0; i < this.length; i++) {
//     t.push(cb(this[i]));
//     console.log(this[i])
//   }
//   console.log(t, '------')
//   return t;
// }
Array.prototype.myMap = function (cb) {
  return this.reduce((acc, current) => {
    // [] {age: 20} 
    let res = cb(current);
    return acc.concat(res);
  }, []);
}
// // 先定义一个 
// // 在返回
// // 写成 reduce

const newArr = arr.myMap(e => {
  return {
    ...e,
    age: e.age * 2
  }
});
console.log(newArr);