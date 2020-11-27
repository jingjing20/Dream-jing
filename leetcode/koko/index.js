const piles = [3, 6, 7, 11]; //香蕉
// console.log(piles[0]);

/**
 * @author wzh
 * @param {number} piles   香蕉数组
 * @param {number} H       最大时间
 * @param {number} mid     吃的速度
 * @return{boolean}
 */
function canEatAllBananas(piles, H, mid) {
	let h = 0; //吃完花的时间
	for (let j = 0; j < piles.length; j++) {
		h = h + Math.ceil(piles[j] / mid);
	}
	return h <= H;
}

/**
 * @author wzh
 * @param {number} piles 香蕉数组
 * @param {number} H    最大时间
 */
function minEatingSpeed(piles, H) {
	// 一个个试
	let lo = 1, //最小值
		hi = Math.max(...piles); //最大值
	//得到数组中的最大值， 吃法的约束
	// for (let i = 0; i < piles.length; i++) {
	//   if (piles[i] > lo) {
	//     hi = piles[i];
	//   }
	// }
	// lo -> hi 去试， 最小的能吃完的是不是就这个值？
	//   for (let i = lo; i <= hi; i++) {
	//     if (canEatAllBananas(piles, H, i)) {
	//       return i;
	//     }
	//   }

	while (lo <= hi) {
		//二分法
		let mid = lo + ((hi - lo) >> 1);
		if (canEatAllBananas(piles, H, mid)) {
			hi = mid - 1;
		} else {
			lo = mid + 1;
		}
	}
	// console.log(hi, '-----')

	return lo;
}

console.log(minEatingSpeed(piles, 8));
