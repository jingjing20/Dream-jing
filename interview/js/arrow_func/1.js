var New = function(fn, ...args) {
  // var obj = {};
  // obj.__proto__ = fn.prototype;
  const obj = Object.create(fn.prototype)
  fn.call(obj, ...args);
  return obj;
}

function Func(name, age, sex, boyfriend) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.boyfriend = boyfriend;
}

const jing = New(Func, 'jingjing','20','lv','haohao')
console.log(jing instanceof Func)
console.log(jing)