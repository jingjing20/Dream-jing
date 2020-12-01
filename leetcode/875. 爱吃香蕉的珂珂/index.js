/**
 * @param {number[]} piles  存放每堆香蕉的数量的数组
 * @param {number} H		警察离开的时间（小时）
 * @return {number}			需要返回的是吃香蕉的最小速度
 */
var minEatingSpeed = function (piles, H) {
	// left: 代表的是最小速度
	let left = 1;
	// right: 代表的是最大速度
	let right = Math.max(...piles);
	// 定义一个判断在某个速度下能否吃完香蕉的函数
	const canEat = (piles, speed, H) => {
		let sumTime = 0;
		for (let pile of piles) {
			// 向上取整
			sumTime += Math.ceil(pile / speed);
		}
		return sumTime <= H;
	};
	// 转换成了二分查找
	while (left < right) {
		let mid = Math.floor((right + left) / 2);
		if (canEat(piles, mid, H)) {
			right = mid; // 如果能吃完，则最大值调整为mid
		} else {
			left = mid + 1; // 如果不能吃完，则最小值调整为mid + 1
		}
	}
	return right;
};
let piles = [30, 11, 23, 4, 20],
	H = 5;
console.log(minEatingSpeed(piles, H));
