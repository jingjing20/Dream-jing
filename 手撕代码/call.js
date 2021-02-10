Function.prototype.myCall = function (thisArg, ...args) {
	if (!thisArg) {
		// thisArg 为 null 或者是 undefined
		thisArg = typeof window === 'undefined' ? global : window;
	}
	// 保存this
	thisArg.fn = this;
	// 执行代码
	let res = thisArg.fn(...args); //重点代码，利用this指向，相当于context.caller(...args)
	// 删除变量 释放空间
	delete thisArg.fn;
	// 返回结果
	return res;
};

var foo = {
	name: 'Selina',
};
var name = 'Chirs';
function bar(job, age) {
	console.log(this.name);
	console.log(job, age);
}
bar.myCall(foo, 'programmer', 20);
// Selina programmer 20
bar.myCall(null, 'teacher', 25);
// 浏览器环境: Chirs teacher 25; node 环境: undefined teacher 25
