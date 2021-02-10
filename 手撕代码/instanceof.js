// 基于原型链一直向上查找，知道达到 object 还未找到返回 false

const myInstanceof = (left, right) => {
	while (left) {
		if (left === right.prototype) {
			return true;
		}
		left = left.__proto__;
	}
	return false;
};

console.log(myInstanceof(2, Number)); // true
console.log(myInstanceof([], Number)); // false
console.log(myInstanceof([], Object)); // true
