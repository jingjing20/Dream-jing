const MySetInterval = (func, timeOut) => {
	let intervalId;
	return {
		start() {
			intervalId = setTimeout(() => {
				func();
				this.start();
			}, timeOut);
		},
		stop() {
			clearTimeout(intervalId);
		},
	};
};

const jing = MySetInterval(() => {
	console.log('test');
}, 1000);

jing.start;

setTimeout(() => {
	jing.stop();
}, 5100);
