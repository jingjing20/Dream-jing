// let
(function () {
	var a = 999;
	console.log(a); // 999
})();
console.log(a); // ReferenceError: a is not defined

// const
var my_const = function (data, value) {
	// 把变量赋值到全局环境下
	this[data] = value;
	Object.defineProperty(this, data, {
		enumerable: false,
		configurable: false,
		get: () => {
			return value;
		},
		set: (val) => {
			if (val !== value) {
				throw new Error('Assignment to constant variable.');
			} else {
				return value;
			}
		},
	});
};

my_const('a', 999);
console.log(a); // 999
a = 888; // Assignment to constant variable.
