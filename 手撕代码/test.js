// var x = 10;
// function a(y) {
// 	var x = 20;
// 	return b(y);
// }
// function b(y) {
// 	console.log(x + y);
// }
// a(20);

// Promise.resolve(1)
// 	.then((x) => x + 1)
// 	.then((x) => {
// 		throw new Error('My Error');
// 	})
// 	.catch(() => 1)
// 	.then((x) => x + 1)
// 	.then((x) => console.log(x)) // 2
// 	.catch(console.error);

function getNum(arr) {
	let res = [];
	let sum = numSum(arr);
	for (let i = 1; i < arr.length; i++) {
		let temp = numSum(arr.slice(0, i));
		if (temp === (sum - arr[i]) / 2) {
			res.push(arr[i]);
		}
	}
	return res;
}

function numSum(arr) {
	return arr.reduce((a, b) => a + b, 0);
}

let numbers = [1, 3, 5, 7, 8, 25, 4, 20];

console.log(getNum(numbers)); //jing-log
