Function.prototype.myBind = function (thisArg) {
	// 设置 fn 为调用 myBind 的函数
	const fn = this;
	// 得到调用 myBind 函数时传递的参数
	const otherArgs = [...arguments].slice(1);
	// 定义一个返回的函数
	const result = function () {
		// 得到执行该函数时的参数
		const resultArgs = [...arguments];
		const isNew = this instanceof result;
		return fn.apply(isNew ? this : thisArg, otherArgs.concat(resultArgs));
	};
	// 绑定原型，保证原函数的原型对象的属性不丢失，result 是调用 myBind 要返回的函数，下面的 this 是调用 myBind 的函数。把 this 上的原型绑定到返回的函数上面。
	result.prototype = this.prototype;
	// 返回结果
	return result;
};

function Animal(name, color) {
	this.name = name;
	this.color = color;
}
Animal.prototype.say = function () {
	return `I'm a ${this.color} ${this.name}`;
};
const Cat = Animal.myBind(null, 'cat');
const cat = new Cat('white');
console.log(cat, cat.say());
if (cat.say() === "I'm a white cat" && cat instanceof Cat && cat instanceof Animal) {
	console.log('success');
}

// Animal { name: 'cat', color: 'white' } I'm a white cat
// success
