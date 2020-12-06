/**
 * @param {number} n
 * @return {number}
 * 思路如下：厄拉多塞提出来的算法，这位大神是第一个量出来地球周长的大人物。
 * 1、如果一个数是一个质数，那么大于它本身的所有它的倍数都会是合数
 * 2、我们设 isPrime[i] 表示数 i 是不是质数，如果是质数则为 1，否则为 0。
 * 3、从小到大遍历每个数，如果这个数为质数，则将其所有的倍数都标记为合数（除了该质数本身），即 0，这样在运行结束的时候我们即能知道质数的个数。
 */
var countPrimes = function (n) {
	let isPrime = new Array(n).fill(1);
	let count = 0;
	for (let i = 2; i < n; i++) {
		if (isPrime[i]) {
			count++;
			for (let j = i * i; j < n; j += i) {
				isPrime[j] = 0;
			}
		}
	}
	return count;
};

console.log(countPrimes(64));
