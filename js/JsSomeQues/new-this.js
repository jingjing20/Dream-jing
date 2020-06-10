var name = 'hao'

function Person(name) {
  this.name = name
}

var p = Person('jing');
console.log(name)
console.log(p.name)   //TypeError: Cannot read property 'name' of undefined

var name = 'hao'

function Person(name) {
  this.name = name
}

var p = new Person('jing');
console.log(name)
console.log(p.name)   //正常输出 new绑定的 this