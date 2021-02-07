Function.prototype.myApply = function (thisArg, args) {
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

const numbers = [5, 6, 2, 3, 7];

// Function.prototype.myApply()
console.log('Function.prototype.myApply()');

const max = Math.max.myApply(null, numbers);
console.log(max); // 7

// Function.prototype.apply()
console.log('Function.prototype.apply()');
const min = Math.min.apply(null, numbers);
console.log(min); // 2
