// var a = {
//   value: 100,
//   valueOf: function () {
//     this.value++;
//     return this.value;
//   }
// };
// console.log(a == 101 && a == 102);//true

// var a = 1;
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a);
//   }
//   bar(baz);
// }
// function bar(fn) {
//   // 这就是闭包
//   fn();
// }
// // 输出2，而不是1
// foo();
// var a = { n: 1 };
// var b = a;
// a.x = a = { n: 2 };
// console.log(a.x);
// console.log(b.x);

console.log(__dirname);