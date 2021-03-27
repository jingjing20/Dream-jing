function mySetInterval(handler, timeout) {
	var tid;
	return {
		start() {
			tid = setTimeout(() => {
				handler();
				this.start();
			}, timeout);
		},
		stop() {
			return clearTimeout(tid);
		},
	};
}

var timer = mySetInterval(() => console.log('setTimeout handler running'), 1000);

timer.start();

// 2.5s后清除定时器
setTimeout(() => {
	timer.stop();
}, 2500);
