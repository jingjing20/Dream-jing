# 堆是什么？

-   堆是一种特殊的完全二叉树。（完全二叉树指每层节点都完全填满，在最后一层上如果不是满的则只缺少右边的若干节点）
-   所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点。

## JS 中的堆

-   JS 中通常用数组来表示堆。
-   左侧子节点的位置是 2 \* index + 1。
-   右侧子节点的位置是 2 \* index + 2。
-   父节点位置是 (index - 1) / 2

## 堆的应用

-   堆能高效、快速地找出最大值和最小值，时间复杂度为 O(1).
-   找出第 K 个最大（最小）元素。

## 找出第 K 个最大元素

-   构建一个最小堆，并将元素依次插入堆中。
-   当堆的容量超过 K，就删除堆顶。
-   插入结束后，堆顶就是第 K 个最大的元素。

## JavaScript 实现一个最小堆类

### 插入

-   将值插入堆的底部，即数组的尾部。
-   然后上移：将这个值和它的父节点进行交换，直到父节点小于等于这个插入的值。
-   大小为 K 的堆中插入元素的时间复杂度为 O(logK)。

### 删除堆顶

-   用数组尾部元素替换堆顶（直接删除堆顶会破坏堆结构）。
-   然后下移：将新堆顶和它的子节点进行交换，直到子节点大于等于这个堆顶元素。
-   大小为 K 的堆中删除堆顶的时间复杂度为 O(logK)。

### 代码实现

```js
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
		if (this.heap[parentIndex] > this.heap[index]) {
			this.swap(parentIndex, index);
			this.shiftUp(parentIndex);
		}
	}
	// 下移方法
	shiftDown(index) {
		const leftIndex = this.getLeftIndex(index);
		const rightIndex = this.getRightIndex(index);
		if (this.heap[leftIndex] < this.heap[index]) {
			this.swap(leftIndex, index);
			this.shiftDown(leftIndex);
		}
		if (this.heap[rightIndex] < this.heap[index]) {
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

module.exports = MinHeap;
```
