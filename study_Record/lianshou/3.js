// function jing() {
//   console.log(this.a);
// }

// var obj1 = {
//   a: 10,
//   foo: jing
// };

// var obj2 = {
//   a: 20,
//   foo: jing
// };

// obj1.foo();   //10
// obj2.foo();   //20

// obj1.foo.call(obj2);   //20
// obj2.foo.call(obj1);   //10

// new 绑定 > 显式绑定
// function foo(a) {
//   this.a = a;
// }

// let obj1 = {};

// let bar = foo.bind(obj1);

// bar(2);

// console.log(obj1.a); // 输出 2

// let obj2 = new bar(3);
// console.log(obj1.a); // 输出 2
// console.log(obj2.a); // 输出 3 

function jing() {
  this.a = 'hao';
}

let obj = {
  a: 'jing'
};
// 1、bind
const Bar = jing.bind(obj);
// 2、new
const bar = new Bar();

console.log(obj.a, '--', bar.a) //jing -- hao