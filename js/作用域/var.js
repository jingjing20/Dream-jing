// var x = 0;
// function foo() {
// 	var x = 2;
// 	return function () {
// 		console.log(x); //jing-log
// 	};
// 	var x = 8;
// }
// // 闭包
// foo()();

var name = 'a';
var obj = {
	name: 'b',
	getName: () => {
		return this.name;
	},
};

var getName = obj.getName;
console.log(obj.getName(), getName()); //jing-log
