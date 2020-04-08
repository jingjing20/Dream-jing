Function.prototype.myBind = function (thisObj, ...arg1) {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }
  // 第一次调用传参
  let fn = this;
  function jingbind(...arg2) {
    const arg = arg1.concat(arg2);
    let isjing = this instanceof jingbind;
    return fn.apply(isjing ? this : thisObj, arg);
  }
  jingbind.prototype = fn.prototype;
  return jingbind;
}

function sum(a, b, c) {
  return a + b + c;
}

const sum10 = sum.myBind(null, 10);
let jing = sum10.myBind(null, 20);
let hao = jing(30)
console.log(hao)

function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
console.log(cat, cat.say())
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}