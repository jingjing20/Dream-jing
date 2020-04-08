var a;
console.log(a); // undefined
a = "a";
var foo = () => {
  // var a; // 全局变量会被局部作用域中的同名变量覆盖
  console.log(a); // undefined
  a = "a1";
}
foo();
console.log(a)
