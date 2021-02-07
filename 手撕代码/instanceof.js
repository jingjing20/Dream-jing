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

console.log(myInstanceof(2, Number)); //jing-log
console.log(myInstanceof([], Number)); //jing-log
console.log(myInstanceof([], Object)); //jing-log
