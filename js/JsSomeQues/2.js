// 利用数组的 indexOf 下标属性来查询
/**
 * @param {Array} arr
 */
function unique(arr) {
	let newArr = [];
	arr.forEach((item) => {
		//indexOf求数组中元素的索引
		if (newArr.indexOf(item) === -1) {
			newArr.push(item);
		}
	});
	return newArr;
}

console.log(unique([1, 2, 2, 3, 3, 4, 5, 5, 9, 9, 8]));
