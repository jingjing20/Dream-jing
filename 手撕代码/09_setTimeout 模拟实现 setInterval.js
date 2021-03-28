function mySetInterval(func, timeOut) {
	let intervalId = 0; // 全局的id
	return {
		start() {
			intervalId = setTimeout(() => {
				func(); // 执行函数
				this.start(); // 递归调用
			}, timeOut);
		},
		stop() {
			clearTimeout(intervalId);
		},
	};
}

const jing = mySetInterval(() => {
	console.log('jing bao bei');
}, 1000);

jing.start();

setTimeout(() => {
	jing.stop();
}, 5500);
