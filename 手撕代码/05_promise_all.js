/**
 *
 * @param {Array} promises
 */
function myPromiseAll(promises) {
	// 参数校验
	if (promises.length === 0) return;
	for (const promise of promises) {
		if (!promise instanceof Promise) return;
	}
	// 定义存放 promise 执行结果的数组
	let result = [];
	// 定义记录成功执行的 promise 数量
	let count = 0;
	return new Promise((resolve, reject) => {
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i])
				.then((res) => {
					result[i] = res;
					count++;
					if (count === promises.length) {
						resolve(result);
					}
				})
				.catch((e) => {
					reject(e);
				});
		}
	});
}

var promise1 = Promise.resolve(3);
var promise2 = new Promise(function (resolve, reject) {
	setTimeout(resolve, 3000, 'jing'); // setTimeout的第三个往后参数都是用来作为第一个参数也就是函数的参数,也就是其实是setTimeout(resolve('jing'), 3000)
});
var promise3 = 42;

myPromiseAll([promise1, promise2, promise3]).then(function (values) {
	console.log(values);
});
