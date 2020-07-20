// Function.prototype.myBind = function (objThis, ...params) { // 先传一部分参数
//   const thisFn = this; //  存储源函数的this
//   let fToBind = function (...secondParams) { //  最后还是要执行的
//     const isNew = this instanceof fToBind // new 调用
//     const context = isNew ? this : Object(objThis); // this 覆盖为上下文对象
//     return thisFn.call(context, ...params, ...secondParams); // 
//   }


//   if (thisFn.prototype) {
//     fToBind.prototype = Object.create(thisFn.prototype);
//   }

//   return fToBind;
// }

Function.prototype.myBind = function(thisObj,...arg1){
  if(typeof(this) !== 'function'){
    return new TypeError("not a function!")
  }
  let fn = this;
  function jingbind(...arg2){
    const arg = arg1.concat(arg2)
    let isNew = this instanceof jingbind;
    return fn.apply(isNew ? this : thisObj,arg)
  }
  jingbind.prototype = Object.create(fn.prototype)
  return jingbind;
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
if (cat.say() === 'I\'m a white cat' &&
  cat instanceof Cat && cat instanceof Animal) {
  console.log('success');
}

Cat.prototype.jing = "haoxiangni"
console.log(Animal.prototype);

