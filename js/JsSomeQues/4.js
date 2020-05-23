// 利用数组原型对象上的includes方法。
/**
 * @param {array} arr 
 */
function unique(arr) {
	var newArr = []
	arr.forEach(item => {
		if (!newArr.includes(item)) {
			newArr.push(item)
		}
	})
	return newArr
}
console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));