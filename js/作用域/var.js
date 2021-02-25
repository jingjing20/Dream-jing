// var x = 0;
function foo() {
	x = 2;
	return function () {
		console.log(x); //jing-log
	};
	var x = 8;
}
foo()();
// function add(num1, num2) {
// 	var sum = num1 + num2;
// 	return sum;
// }
// add(10, 20);
// console.log(sum); //jing-log
