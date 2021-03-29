let arr = ['1p', '2a', '4b', '3a', '2c'];
function getKey(arr) {
	let obj = {};
	let key = '';
	let max = 0;
	arr.forEach((val) => {
		let str = val.slice(-1);
		if (!obj[str]) {
			obj[str] = 1;
		} else {
			obj[str]++;
		}
		if (max < obj[str]) {
			max = obj[str];
			key = str;
		}
	});
	return key;
}

function getSum(arr, key) {
	let arrWithKey = arr.filter((val) => val.includes(key));
	let res = arrWithKey
		.map((val) => val.slice(0, -1))
		.reduce((pre, cur) => {
			return pre + parseInt(cur);
		}, 0);

	// reduce() 方法对数组中的每个元素执行一个由自己提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
	// 可以提供初始值，不提供的话 reduce() 会以数组第一个元素作为初始值

	return res;
}
let key = getKey(arr);
console.log(key);
let res = getSum(arr, key);
console.log(res);
