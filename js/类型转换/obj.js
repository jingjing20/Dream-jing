let obj = {
	valueOf() {
		console.log('valueOf');
		return [];
	},
	toString() {
		console.log('toString');
		return 'toString';
	},
};

console.log('-------------');
console.log(obj == 'toString');
console.log('-------------');
console.log(obj + 'toString');
console.log('-------------');
console.log(obj + 1);
console.log('-------------');
console.log(obj - 1);
console.log('-------------');
console.log(obj > 1);
console.log('-------------');
console.log(obj > 'jing');

// * 红宝书上关于类型转换规则的描述
// 在转换操作数的类型时，相等和不相等操作符遵循如下规则。
// 1、如果任一操作数是布尔值，则将其转换为数值再比较是否相等。false 转换为 0，true 转换为 1。
// 2、如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串转换为数值，再比较是否相等。
// 3、如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再根据前面的规则进行比较。

// ? 上面第三步描述上好像有点缺陷 如果对象的 value() 方法返回的不是一个原始值怎么操作?
// 如果valueOf() 返回的不是原始类型而是一个引用类型的值 就会继续走对象上的 toString() 方法
