// let num = 6,
// 	arr = 212425;
// /**
//  *
//  * @param {Number} num
//  * @param {Array} arr
//  */
// function getMinCount(num, arr) {
// 	let count = 1;
// 	i = 0;
// 	arr = arr
// 		.toString()
// 		.split('')
// 		.map((item) => parseInt(item));
// 	// for (let i = 0; i < num - 1; i++) {
// 	// 	if (arr.lastIndexOf(arr[i]) === num - 1) {
// 	// 		return count;
// 	// 	} else if (arr.lastIndexOf(arr[i]) === -1) {
// 	// 		count++;
// 	// 	} else {
// 	// 		count++;
// 	// 		i = arr.lastIndexOf(arr[i]);
// 	// 		console.log(i); //jing-log
// 	// 	}
// 	// }
// 	while (i < num - 1) {
// 		if (arr.lastIndexOf(arr[i]) === arr.length - 1) {
// 			return count;
// 		} else if (arr.lastIndexOf(arr[i]) === -1) {
// 			count++;
// 			i++;
// 		} else {
// 			count++;
// 			i = arr.lastIndexOf(arr[i]);
// 			arr.splice(0, i);
// 		}
// 	}
// 	return count;
// }

// console.log(getMinCount(num, arr)); //jing-log
// // console.log(arr.toString().split('')); //jing-log

Object.prototype.a = 1;
Function.prototype.a = 2;
function jing() {}
let hao = new jing();
console.log(hao.a); //jing-log
console.log(hao.__proto__.__proto__.constructor); //jing-log
