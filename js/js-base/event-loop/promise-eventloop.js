// async function afoo() {
//   console.log("-2");

//   await new Promise((resolve) => resolve());
//   console.log("-1");
// }

// new Promise((resolve) => (console.log("0"), resolve())).then(
//   () => (
//     console.log("1"),
//     new Promise((resolve) => resolve()).then(() => console.log("1.5"))
//   )
// );

// setTimeout(function () {
//   console.log("2");
//   new Promise((resolve) =>   resolve()).then(console.log("3"))
// }, 0);
// console.log("4");
// console.log("5");
// afoo();

// 0
// 4
// 5
// -2
// 1
// -1
// 1.5
// 2
// 3
// let p1 = new Promise((resolve, reject) => {
// 	reject(1);
// });

// p1.catch((reson) => {
// 	console.log(reson, '====');
// }).catch((reson) => console.log(reson, '-----'));

// let p1 = new Promise((resolve, reject) => {
// 	reject(1);
// });

// p1.catch(() => {
// 	console.log(2);

// }).catch(() => {
// 	console.log(3);
// });
// const someAsyncThing = async function () {
// 	return new Promise(function (resolve, reject) {
// 		// 下面一行会报错，因为x没有声明
// 		resolve(x + 2);
// 	});
// };

// someAsyncThing()
// 	.catch((err) => {
// 		console.log(err); //jing-log
// 	})
// 	.then((res) => {
// 		console.log(res); //jing-log
// 	});

const promise = new Promise(function (resolve, reject) {
	resolve('ok');

	setTimeout(() => {
		throw new Error('test');
	}, 0);
});
promise
	.then(function (value) {
		console.log(value);
	})
	.catch(function (error) {
		console.log(error);
	});
// ok
