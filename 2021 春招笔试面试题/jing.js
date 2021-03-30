// function New(func, ...arg) {
// 	let thisObj = Object.create(func.prototype);

// 	let result = func.apply(thisObj, arg);

// 	return result instanceof thisObj ? result : thisObj;
// }

// function reduce(func, initValue) {}

// function promiseAll(...promise) {
// 	promise.forEach((promise) => {});
// }

// class EventEmitter {
// 	constructor() {
// 		this.events = {};
// 	}

// 	on(type, handler) {
// 		if (!this.events[type]) {
// 			this.events[type] = [];
// 		}
// 		this.events[type].push(handler);
// 	}

// 	emit(type, ...args) {
// 		this.events[type].forEach((func) => {
// 			func(...args);
// 		});
// 	}

// 	off(type, handler) {
// 		this.events[type] = this.events[type].filter((item) => item != handler);
// 	}

// 	once(type, handler) {
// 		if (!this.events[type]) {
// 			this.events[type] = [];
// 		}
// 		let _this = this;
// 		const fn = function () {
// 			handler.apply(_this, ...arguments);
// 			_this.off(type, fn);
// 		};
// 		this.events[type].push(fn);
// 	}
// }

// const emitter = new EventEmitter();

// const lister01 = () => {
// 	console.log('lister01'); //jing-log
// };
// const lister02 = () => {
// 	console.log('lister02'); //jing-log
// };

// emitter.on('click', lister01);
// emitter.once('click', lister02);

// emitter.emit('click');
// emitter.off('click', lister01);
// emitter.emit('click');

// 实现一个抽奖的小算法
// let buffer = ['一等奖', '二等奖', '三等奖', '四等奖']; // 奖池
// let buff_probability = [0.1, 0.15, 0.25, 0.5]; // 概率

// function randomProbability(arr1, arr2) {
// 	let sum = 0,
// 		factor = 0,
// 		random = Math.random();
// 	for (let i = arr2.length - 1; i >= 0; i--) {
// 		sum += arr2[i]; // 统计概率总和
// 	}
// 	random *= sum; // 生成概率随机数
// 	for (let i = arr2.length - 1; i >= 0; i--) {
// 		factor += arr2[i];
// 		if (random <= factor) return arr1[i];
// 	}
// }
// for (let i = 0; i < 10; i++) {
// 	console.log(randomProbability(buffer, buff_probability));
// }
