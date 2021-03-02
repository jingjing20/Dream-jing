/**
 * 手撸一个简单的 Promise
 */
function CutePromise(exector) {
	// 定义一个成功状态的返回值 value
	this.value = null;

	// 定义一个失败状态的失败原因 reason
	this.reason = null;

	// 定义 promise 的初始状态
	this.status = 'pending';

	// 保存当前 this
	var self = this;

	// 定义 resolve 函数
	function resolve(value) {
		// 异步任务成功，把结果赋值给 value
		self.value = value;
		// 当前状态切换为 fulfilled
		self.status = 'fulfilled';
	}

	// 定义 reject 函数
	function reject(reason) {
		// 异步任务失败，把原因记录下来赋值给 reason
		self.reason = reason;
		// 当前状态切换为 rejected
		self.status = 'rejected';
	}
	exector(resolve, reject);
}

// then 方法接收两个函数作为入参（可选）
CutePromise.prototype.then = function (onResolved, onRejected) {
	// onResolved 和 onRejected 必须是函数，如果不是我们就要给个透传来兜底
	if (typeof onResolved !== 'function') {
		onResolved = function (x) {
			return x;
		};
	}
	if (typeof onRejected !== 'function') {
		onRejected = function (e) {
			throw e;
		};
	}

	// 保存 this
	var self = this;

	// 根据当前 promise 的状态来进行不同的操作
	if (self.status === 'fulfilled') {
		onResolved(self.value);
	} else if (self.status === 'rejected') {
		onRejected(self.reason);
	}
};

new CutePromise(function (resolve, reject) {
	resolve('成了！');
}).then(
	function (value) {
		console.log(value);
	},
	function (reason) {
		console.log(reason);
	}
);

// 输出 “成了！”

new CutePromise(function (resolve, reject) {
	reject('错了！');
}).then(
	function (value) {
		console.log(value);
	},
	function (reason) {
		console.log(reason);
	}
);
// 输出“错了！”
