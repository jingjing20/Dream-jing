/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const map = new Map();
	nums.forEach((n) => {
		map.set(n, map.has(n) ? map.get(n) + 1 : 1);
	});
	const h = new MinHeap();
	map.forEach((value, key) => {
		h.insert({ value, key });
		if (h.size() > k) {
			h.pop();
		}
	});
	return h.heap.map((a) => a.key);
};

class MinHeap {
	constructor() {
		this.heap = [];
	}
	// 交换元素
	swap(i1, i2) {
		let temp = this.heap[i1];
		this.heap[i1] = this.heap[i2];
		this.heap[i2] = temp;
	}
	// 获取父节点索引的方法
	getParentIndex(index) {
		return (index - 1) >> 1;
	}
	// 获取左子节点
	getLeftIndex(index) {
		return index * 2 + 1;
	}
	// 获取右子节点
	getRightIndex(index) {
		return index * 2 + 2;
	}
	// 上移方法
	shiftUp(index) {
		if (index === 0) return;
		const parentIndex = this.getParentIndex(index);
		if (this.heap[parentIndex] && this.heap[parentIndex].value > this.heap[index].value) {
			this.swap(parentIndex, index);
			this.shiftUp(parentIndex);
		}
	}
	// 下移方法
	shiftDown(index) {
		const leftIndex = this.getLeftIndex(index);
		const rightIndex = this.getRightIndex(index);
		if (this.heap[leftIndex] && this.heap[leftIndex].value < this.heap[index].value) {
			this.swap(leftIndex, index);
			this.shiftDown(leftIndex);
		}
		if (this.heap[rightIndex] && this.heap[rightIndex].value < this.heap[index].value) {
			this.swap(rightIndex, index);
			this.shiftDown(rightIndex);
		}
	}
	// 插入方法
	insert(value) {
		this.heap.push(value);
		this.shiftUp(this.heap.length - 1);
	}
	// 删除堆顶方法
	pop() {
		this.heap[0] = this.heap.pop();
		this.shiftDown(0);
	}
	peek() {
		return this.heap[0];
	}
	size() {
		return this.heap.length;
	}
}
