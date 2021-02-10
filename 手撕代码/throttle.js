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
			fn.apply(this);
			prevTime = curTime;
		}
	};
}
