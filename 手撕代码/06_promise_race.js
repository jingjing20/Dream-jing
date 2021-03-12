/**
 *
 * @param {Array} promises
 */
function myPromiseRace(promises) {
	// 参数校验
	if (promises.length === 0) return;
	for (const promise of promises) {
		if (!promise instanceof Promise) return;
	}
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i])
				.then((res) => {
					resolve(res);
				})
				.catch((err) => {
					reject(err);
				});
		}
	});
}

let promise1 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 500, 'one');
});

let promise2 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 100, 'two');
});

myPromiseRace([promise1, promise2]).then(function (value) {
	console.log(value);
	// Both resolve, but promise2 is faster
});
