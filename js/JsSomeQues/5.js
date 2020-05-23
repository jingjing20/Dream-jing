
// item 当前数组元素
// index 当前数组元素下表
// array 调用数组本身
function unique(array) {
	let res = array.filter((item, index, array) => {
		return array.indexOf(item) === index;
	});
	return res;
}

console.log(unique([1, 5, 6, 8, 4, 3, 5, 9, 8]));

