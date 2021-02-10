/**
 * 防抖
 * @param {Function} fn
 * @param {Number} time
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
