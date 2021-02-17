Function.prototype.Call = function (thisObj, ...arg) {
	if (!thisObj) {
		//thisObj为null或者是undefined
		thisObj = typeof window === 'undefined' ? global : window;
	}
	thisObj.fn = this;
	// let rest = [...arguments].slice(1);//获取除了this指向对象以外的参数, 空数组slice后返回的仍然是空数组
	return thisObj.fn(...arg); // 隐式绑定,当前函数的this指向了context.
};
var foo = {
	name: 'Selina',
};
var name = 'Chirs';
name = 'jingjing';
function bar(job, age) {
	console.log(this.name);
	console.log(job, age);
}
bar.Call(foo, 'programmer', 20);
// Selina programmer 20
bar.Call(null, 'teacher', 25);
// 浏览器环境: Chirs teacher 25; node 环境: undefined teacher 25
