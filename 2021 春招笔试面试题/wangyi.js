// function getMaxString(nums) {
// 	let map = new Map();
// 	let arr = [];
// 	let res = [];
// 	nums.forEach((item) => {
// 		let jing = getFirstNum(item);
// 		if (map.has(jing)) {
// 			let temp = jing + 0.5;
// 			arr.push(temp);
// 			map.set(temp, item);
// 		} else {
// 			arr.push(jing);
// 			map.set(jing, item);
// 		}
// 	});
// 	arr.sort((a, b) => b - a).forEach((item) => {
// 		res.push(map.get(item));
// 	});
// 	return res.join('');
// }

// function getFirstNum(num) {
// 	return parseInt(num.toString().substring(0, 1));
// }

// function getNums(num) {
// 	var nums = [];
// 	while (num != 0) {
// 		var temp = num % 2;
// 		nums.push(temp);
// 		num = parseInt(num / 2);
// 	}
// 	return parseInt(nums.reverse().join(''));
// }

// console.log(getNums(-32)); //jing-log;
