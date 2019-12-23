function Person(name, age) {
    this.name = name;
    this.age = age;
}

//覆盖了Object上原有的toString方法
Person.prototype.toString = function() {
    return 'I am a Person, my name is ' + this.name;
}

function Man(name, age) {
    console.log(arguments, '------')
        // Person 构造函数 Man要成为Person的子类 只要执行一下Person构造函数
    Person.apply(this, arguments); //arguments 参数集合
}

Man.prototype = Object.create(Person.prototype);

Man.prototype.toString = function() {
    return 'I am a 008, my name is ' + this.name;
}
var cxc = new Man('haohao', 20);
console.log(cxc + "");

// var person = new Person('jingjing', 20);
// console.log(person + ""); //类型转化
// const arr = ['haohao', 'jingjing', ];
// console.log(Object.prototype.toString.call(arr));