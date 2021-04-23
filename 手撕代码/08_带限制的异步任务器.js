/** 创建任务 */
function createTask(t) {
	return () =>
		new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(t);
			}, t);
		});
}

/** promise.all */
function limitTask(tasks, limit) {
	return new Promise((resolve, reject) => {
		let total = 0; // 记录任务总数
		let i = 0;
		let running = 0; // 正在运行的任务
		let res = []; // 任务结果
		function run() {
			if (total == tasks.length) {
				resolve(res);
			}
			if (running >= limit || i > tasks.length - 1) {
				return;
			}
			let task = tasks[i]();
			let currentI = i; // 避免被后续的i++影响
			console.log(currentI, '运行');
			task.then((r) => {
				running--;
				res[currentI] = r;
				total++;
				run();
			});
			running++; // 运行任务数+1
			i++;
			run();
		}
		run();
	});
}

function limitTask1(tasks, limit) {
	return new Promise((resolve, reject) => {
		let res = [];
		let running = 0;
		let total = 0;
		let i = 0;
		function run() {
			if (total == tasks.length) {
				resolve(res);
			}
			if (running >= limit || i > tasks.length - 1) {
				return;
			}
			let task = tasks[i]();
			let currentI = i;
			console.log(currentI, 'run');
			task.then((r) => {
				res[currentI] = r;
				total++;
				running--;
				run();
			});
			i++;
			running++;
			run();
		}
		run();
	});
}
console.time('1');
limitTask([createTask(2000), createTask(2000), createTask(1000), createTask(2000), createTask(2000)], 2).then((res) => {
	console.timeEnd('1');
	console.log(res);
});
