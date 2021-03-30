// let res = [
// 	[0, 0],
// 	[0, 0],
// 	[0, 0],
// ];
// let jing = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// ];
// for (let i = 0; i < jing[0].length; i++) {
// 	for (let j = 0; j < jing.length; j++) {
// 		res[i][j] = jing[j][i];
// 	}
// }
// console.log(res); //jing-log

// 1、二维数组的翻转
// 2、寻找数字
// 题目描述：
// 小美过冬之前将很多数藏进一个仅包含小写英文字母的字符串。在冬天她想将所有数找回来，请帮帮她。
// 给定一个字符串s，仅包含小写英文字母和数字，找出其中所有数。一个数是指其中一段无法延伸的连续数字串。如a1254b中仅包含1254这一个数，125则不是，因为125还可以向右延伸成1254。如果该字符串包含前导零，则抹掉前导零。
// 例如a0125b1c0d00中包含四个数0125，1，0，00，按照规则抹掉前导零后，最终这个字符串包含的四个数为125，1，0，0。即，0125->125，00->0，其中1和0无前导零，无需变更。
// try {
// 	new Promise((resolve, reject) => {
// 		reject('hao');
// 		resolve();
// 	})
// 		.then(() => {
// 			console.log('jing'); //jing-log
// 		})
// 		.catch((err) => {
// 			console.log(err); //jing-log
// 		})
// 		.then(() => {
// 			console.log('2'); //jing-log
// 		})
// 		.catch((err) => {
// 			console.log(err); //jing-log
// 		});
// } catch (error) {
// 	console.log(error, '---'); //jing-log
// }

// const a = { x: 1, y: 2 };
// // 补充 code
// let b = Object.assign(a);
// b.y = 3;
// console.log(a); // 输出 { x: 1, y: 2 }
// console.log(b); // 输出 { x: 1, y: 3 }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let left = 0,
	right = arr.length - 1;

while (left < right) {
	[arr[left], arr[right]] = [arr[right], arr[left]];
	left++;
	right--;
}

console.log(arr); //jing-log
