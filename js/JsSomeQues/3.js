// 利用对象属性存在的特性，如果没有该属性则存入新数组。
/**
 * @param {array} arr 
 */
function unique(arr) {
	var newArr = []
	var obj = {} //对象字面量
	arr.forEach((item) => {
		if (!obj[item]) {
			obj[item] = 1
			newArr.push(item)
		}
	})
	return newArr
}

console.log(unique([1, 3, 5, 5, 6, 8, 8, 9]))