/**
 * new操作符
 * @param {Function} func
 * @param  {...any} args
 */
function myNew(func, ...args) {
	if (typeof func !== 'function') {
		throw new Error('not a function');
	}
	// 基于构造函数的原型对象创建一个新的空对象
	let obj = Object.create(func.prototype);
	// 基于新创建的对象的 this 执行构造函数
	let result = func.apply(obj, args);
	// 如果构造函数返回的是非空对象就返回这个对象，否则返回新创建的对象
	return result && result instanceof Object ? result : obj;
}

// 实现 apply 只需要把下面这行代码的 ...args 换成 args 就可以了
Function.prototype.myCall = function (thisArg, ...args) {
	if (!thisArg) {
		thisArg = typeof window === 'undefined' ? global : window;
	}
	// 保存 this
	thisArg.fn = this;
	// 执行代码
	let res = thisArg.fn(...args);
	// 删除变量 释放空间
	delete thisArg.fn;
	// 返回结果
	return res;
};

// 实现 bind
Function.prototype.myBind = function (thisArg) {
	// 保存 this
	const fn = this;
	// 得到第一次传的参数
	const oneArgs = [...arguments].slice(1);
	// 返回一个待执行函数
	function result() {
		// 得到第二次传的参数
		const twoArgs = [...arguments];
		// 判断是否是 new 调用
		const isNew = this instanceof result;
		// 返回结果
		return fn.apply(isNew ? this : thisArg, oneArgs.concat(twoArgs));
	}
	result.prototype = Object.create(this.prototype);
	result.prototype.constructor = result;
	return result;
};

/**
 * 实现防抖函数		2021/3/11
 * @param {Function} fn
 * @param {Number} time
 * @returns
 */
function debounce(fn, time) {
	let timeout = null;
	return (...args) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fn.apply(this, args);
		}, time);
	};
}

/**
 * 实现节流函数		2021/3/11
 * @param {Function} fn
 * @param {Number} time
 * @returns
 */
function throttle(fn, time) {
	let prevTime = new Date();
	return (...args) => {
		let curTime = new Date();
		if (curTime - prevTime > time) {
			fn.apply(this, args);
			prevTime = curTime;
		}
	};
}

/**
 * 实现 Promise.all		2021/3/11
 * @param {Array} promises
 */
function myPromiseAll(promises) {
	promises.forEach((promise) => {
		if (!promise instanceof Promise) {
			throw new Error('not a Promise');
		}
	});
	return new Promise((resolve, reject) => {
		let count = 0;
		let result = [];
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i])
				.then((res) => {
					result[i] = res;
					count++;
					if (count === promises.length) {
						resolve(result);
					}
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
}
// 测试
let promise01 = Promise.resolve('jingjing');
let promise02 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('haohao');
	}, 520);
});
let promise03 = 999;

let res = myPromiseAll([promise01, promise02, promise03]).then((res) => {
	console.log(res); //jing-log
});
