const curry = (fn, ...args) => {
	// 函数的参数个数可以直接通过函数的.length属性来访问
	return args.length >= fn.length // 这个判断很关键！！！
		? // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
		  fn(...args)
		: /**
		   * 传入的参数小于原始函数fn的参数个数时
		   * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
		   */
		  (..._args) => curry(fn, ...args, ..._args);
};

function curry(func, ...args) {
	return args.length >= func.length ? func.apply(null, ...args) : (..._args) => curry(func, ...args, ..._args);
}

function add1(x, y, z) {
	return x + y + z;
}
const add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));

/**
 * 柯里化
 * 把接受多个参数的函数变换成接受一个单一参数的函数
 * 并返回接受余下的参数且返回结果的新函数
 */
//  function curry() {
// 	const args = [...arguments];

// 	const fn = function () {
// 		args.push(...arguments);
// 		return fn;
// 	};

// 	fn.toString = () => {
// 		return args.reduce((pre, current) => pre + current);
// 	};
// 	return fn;
// }
// // ------------------------------ 测试 ------------------------------

// // curry
// console.log('curry()');

// console.log(curry(1)(2)(3)); // 6
// console.log(curry(1, 2, 3)(4)); // 10
// console.log(curry(1)(2)(3)(4)(5)); // 15
// console.log(curry(2, 6)(1)); // 9
