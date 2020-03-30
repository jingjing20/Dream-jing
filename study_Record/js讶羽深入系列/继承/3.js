function Foo() {
  getName = function() { console.log(1); }
  return this;
}
Foo.getName = function() { console.log(2); }
Foo.prototype.getName = function() { console.log(3); }
getName = function() { console.log(4); }
function getName() { console.log(5); }

Foo.getName();
getName();
Foo().getName();     //window全局对象 会报错 浏览器可以运行
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();

