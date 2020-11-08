Function.prototype.myBind = function(ObjThis, ...params) {
  let fn = this;
  function jingBind(...paramsTwo) {
    const arg = params.concat(paramsTwo);
    let isNew = this instanceof jingBind;
    return fn.apply(isNew ? this : ObjThis, arg);
  }

  jingBind.prototype = Object.create(fn.prototype);
  return jingBind;
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
console.log(cat, cat.say())
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}