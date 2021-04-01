var num = 100;
function fn() {
	var num = num + 1;
	return num;
}

console.log(fn()); // NaN

// 执行上下文的知识
// 当js引擎拿到一段脚本的时候，首先有一个编译的阶段
// 函数里面的 var num 在执行上下文的创建阶段时会给变量赋初始值 undefined, undefined + 1 = NaN
