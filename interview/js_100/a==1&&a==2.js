// 方法一：利用对象属性隐式类型转换自动调用 toString() 方法
// let a = {
//   val: 1,
//   toString() {
//     return a.val++
//   }
// }

// 方法二：Generator函数

// let a = {
//   gn: (function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   })(),
//   valueOf() {
//     return this.gn.next().value;
//   }
// }

// 方法三： 利用ES6 defineProperty() 方法
Object.defineProperty(globalThis, 'a', {
  get: function () {
    if (this.value) {
      return this.value += 1;
    } else {
      return this.value = 1;
    }
  }
})

if (a == 1 && a == 2 && a == 3) {
  console.log(666)
}