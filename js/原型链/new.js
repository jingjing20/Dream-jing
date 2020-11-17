var A = function () { };
A.prototype.n = 1;
var b = new A();
A.prototype.n = 5;
A.prototype.m = 2;
// A.prototype = {
//   n: 2,
//   m: 3
// }
var c = new A();

console.log(b.n);
console.log(b.m);

console.log(c.n);
console.log(c.m);


