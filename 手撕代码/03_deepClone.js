/**
 * 手写一个简单版的深拷贝 symbol Date 等这些特殊的类型不能克隆
 */
function deepClone(obj = {}) {
	// 如果是基本数据类型，则直接返回，即添加到 result 中去
	if (typeof obj !== 'object' || obj == null) {
		return obj;
	}

	// 定义返回值
	let result = Array.isArray(obj) ? [] : {};

	// forin 循环遍历 obj 的 key 递归处理 obj[key]，最终都会在函数第二行代码处理完成。
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			result[key] = deepClone(obj[key]);
		}
	}
	return result;
}

var a = { a: '1', b: [1, 2, 3, 4, { t: 'test' }], [Symbol()]: 'symbol', d: new Date(), r: RegExp('^\\d$') };
console.log(deepClone(a));

/**
 * 手写一个优化版的深拷贝 symbol Date 等这些特殊的类型都能克隆
 */
