Object.prototype.objCustom = function () { };
Array.prototype.arrCustom = function () { };

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}

// for in 语句 以任意顺序迭代对象的可枚举属性。
// for of 语句遍历可迭代对象定义要迭代的数据
