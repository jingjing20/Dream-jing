/**
 * 节流
 * 高频事件触发，间隔 delay 时间执行一次回调
 * @param {*} fn
 * @param {*} delay
 */
function throttle(fn, delay) {
	let prevTime = Date.now();
	return (...args) => {
		let curTime = Date.now();
		if (curTime - prevTime > delay) {
			fn.apply(this, args);
			prevTime = curTime;
		}
	};
}

function throttle(fn) {
	let canRun = true; // 通过闭包保存一个标记
	return function () {
		if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
		canRun = false; // 立即设置为false
		setTimeout(() => {
			// 将外部传入的函数的执行放在setTimeout中
			fn.apply(this, arguments);
			// 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
			canRun = true;
		}, 500);
	};
}
