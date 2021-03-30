// 1、结算时间
// function getJing(arr) {
// 	let curTime = arr[0][0] + arr[0][1];
// 	let res = arr[0][1];
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i][0] >= curTime) {
// 			res += arr[i][1];
// 			curTime = arr[i][0] + arr[i][1];
// 		} else {
// 			res = res + curTime - arr[i][0] + arr[i][1];
// 			curTime += arr[i][1];
// 		}
// 	}
// 	return res;
// }

// let arr = [
// 	[1, 4],
// 	[4, 5],
// 	[10, 3],
// ];

// console.log(getJing(arr)); //jing-log

// 最短距离
// function getMinLen(arr) {
//     let count = 1;
//     let row = arr.length - 1, cols = arr[0].length;
// 	const dfs = (arr, i , j, row, cols, count) => {
//         if (i < 0 || j < 0 || i > row || j > cols) return;
//         if (arr[i+1,j] === 1) {
//             dfs()
//         }
//     };
//     dfs(arr, 0 , 0, row, cols, count);
// }

// let arr = [
// 	[1, 1, 1, 1],
// 	[1, 1, 0, 1],
// 	[1, 0, 0, 1],
// ];

// console.log(getMinLen(arr)); //jing-log

abc = 1234;
abcd = 2345;
console.log(abc); //jing-log
console.log(abcd); //jing-log
// let jing = delete abc;
// console.log(jing); //jing-log
// let hao = delete abcd;
// console.log(hao); //jing-log
