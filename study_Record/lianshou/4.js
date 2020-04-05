Function.prototype.myBind = function (thisObj, ...arg1) {
  // 1、这里 ...arg1 是第一次传的参数
  let fn = this;
  // 这里用 fn 记下调用对象
  function jingbind(...arg2) {
    // 2、这里 ...arg2 是下一次传的参数
    const args = arg1.concat(arg2);
    // 谁调用 bind，最终拼好的参数就传给谁
    return fn.apply(thisObj, args);
  }
  jingbind.prototype = fn.prototype;
  return jingbind;
  // bind() 返回一个未执行的函数
}

function Animal(name, color) {
  this.name = name;
  this.color = color;
}
Animal.prototype.say = function () {
  return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
console.log(cat.say())
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}