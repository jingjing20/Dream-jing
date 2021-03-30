// /* 1.  */
// var a = {};
// var b = { key: '123' };
// var c = { key: '456' };
// a[b] = 'b';
// a[c] = 'c';
// console.log(a); //jing-log
// console.log(a[b]);
// console.log(Object.keys(a));
// undefined (x)
// [] (x)

// /* 2.  */
// var a = {};
// var b = Symbol('123');
// var c = Symbol('123');
// console.log(b); //jing-log
// a[b] = 'b';
// a[c] = 'c';
// console.log(a[b]);
// console.log(a[c]);
// console.log(Object.keys(a));

// /* 3.  */
// let arr = [1, 4, 6];
// console.log(arr['1']); // undefined (x)
// console.log(arr[1]); // 4

// /* 4. */
// var num = 4;
// function fn() {
// 	console.log(num); // undefined
// 	console.log(this.num); // 4
// 	var num = num - 1;
// 	console.log(num); // 3 (x)
// 	this.num = this.num--;
// 	console.log(this.num); // 3 (x)
// }

// fn();

// /* 5. */
// function fn() {};
// let o = new fn();

// o.__proto__ === fn.prototype;

// o.__proto__.__proto__ === Function.prototype; // (x)

// fn.__proto__ === Function.prototype;

// fn.__proto__.__proto__ === Object.prototype;

// Function.__proto__ === Object.prototype; // (x)
// Object.__proto__ === Function.prototype;

// Object.prototype.__proto__ === null;

// /* 6 */
function Foo() {
	console.log(this, '+++++++++++'); //jing-log
	try {
		console.log(this.a());
	} catch (error) {
		console.log(error, '-----');
	}
	// Foo.a = function () {
	// 	console.log(1);
	// };
	this.a = function () {
		console.log(2);
	};
}
// Foo.prototype.a = function () {
// 	console.log(3);
// };
Foo.a = function () {
	console.log(4);
};

let obj = new Foo(); // error
// obj.a(); // 2
// Foo.a(); // 4

// return undefined; => obj.a();
// 2
// return false; => obj.a();
// 2
// return {}; => obj.a();
// Error:
// return []; => obj.a();
// Error:
// return Foo; => obj.a();
// 4
// return null; => obj.a();

// /* 7.  */
// setTimeout(function () {
// 	console.log('5');
// 	Promise.resolve().then(function () {
// 		console.log('6');
// 	});
// 	console.log('11');
// }, 0);
// console.log('12');
// setTimeout(function () {
// 	console.log('7');
// 	Promise.resolve().then(function () {
// 		console.log('8');
// 	});
// 	console.log('13');
// }, 0);
// console.log('14');
// 12 14 5 11 7 13 6 8 => 12 14 5 11 6 7 13 8

// /* 8. */
// /* 使用 setTimeout 模拟实现 setInterval */
// function mySetInterval() {
// }

// /* 9. */
// 编写一个能将给定非负整数数组中的数字排列成最大数字的函数。
// 例如，给定[50, 2, 5, 9]，最大数字为 "95502"。
// 505,50,5 =>

// /* 10. 介绍 header */
// -- request
// connection
// if-modify-since
// accept-encoding
// cookie
// if-none-match
// origin-

// -- response
// last-modify
// ETag
// content-length
// content-type
// set-cookie
// 跨域

// let arr = [
// 	['a', 'b'],
// 	['n', 'm'],
// 	['0', '1'],
// ];
// let res = arr.reduce((prev, cur) => {
// 	let list = [];
// 	for (let i = 0; i < prev.length; i++) {
// 		for (let j = 0; j < cur.length; j++) {
// 			list.push(prev[i] + cur[j]);
// 		}
// 	}
// 	return list;
// });

// console.log(res); //jing-log
