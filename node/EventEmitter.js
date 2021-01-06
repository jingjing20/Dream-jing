class EventEmitter {
	constructor() {
		this.events = {};
	}
	/**
	 *
	 * @param {监听事件名称} type
	 * @param {事件处理函数} handle
	 */
	on(type, handle) {
		if (!this.events[type]) {
			this.events[type] = [];
		}
		this.events[type].push(handle);
	}
	off(type, handle) {
		if (!this.events[type]) {
			return;
		}
		this.events[type] = this.events[type].filter((item) => item !== handle);
	}
	emit(type, ...args) {
		this.events[type].forEach((item) => {
			item(...args);
		});
	}
}

const emitter = new EventEmitter();
const listerClick1 = (...args) => {
	console.log(...args, 'listerClick1'); //jing-log
};
const listerClick2 = (...args) => {
	console.log(...args, 'listerClick2'); //jing-log
};
emitter.on('click', listerClick1);
emitter.on('click', listerClick2);
emitter.emit('click', 'jingjing', 'haohao');
emitter.off('click', listerClick2);
emitter.emit('click', 'jingjing', 'haohao');
