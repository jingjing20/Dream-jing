// 首先要知道 new 到底做了什么：
// (1) 在内存中创建一个新对象。
// (2) 这个新对象内部的 [[Prototype]] 特性被赋值为构造函数的 prototype 属性。
// (3) 构造函数内部的 this 被赋值为这个新对象(即 this 指向新对象)。
// (4) 执行构造函数内部的代码(给新对象添加属性)。
// (5) 如果构造函数返回非空对象，则返回该对象;否则，返回刚创建的新对象。

/**
 *
 * @param {Function} func
 * @param  {...any} args
 */
const myNew = function (func, ...args) {
	if (typeof func !== 'function') {
		return new TypeError('this is not a function');
	}
	// 创建一个空对象，指定原型为 func.prototype
	const obj = Object.create(func.prototype);
	// 绑定 this 并执行构造函数内部代码给新对象加上属性
	const result = func.apply(obj, args);
	// 如果构造函数返回非空对象，则返回该对象;否则，返回刚创建的新对象。
	return result && result instanceof Object ? result : obj;
};
// 测试
// function Person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

// 用来测试返回引用数据类型
function Person(name, age) {
	this.name = name;
	this.age = age;
	return function () {
		console.log('返回引用数据类型');
	};
}

console.log('myNew');
const jing = myNew(Person, 'jing', 22);
console.log(jing);
jing();
console.log('new');
const hao = new Person('hao', 23);
console.log(hao);
hao();
