const wordBreak = (s, wordDict) => {
	const len = s.length;
	const wordSet = new Set(wordDict);
	let memoArr = new Array(len);
	const canBreak = (start) => {
		// 判断从start到末尾的子串能否break
		if (start == len) {
			// 指针越界，s都划分成单词了才走到这步的，没有剩余子串了，返回真，结束递归
			return true;
		}
		if (memoArr[start] !== undefined) return memoArr[start];
		for (let i = start + 1; i <= len; i++) {
			const str = s.slice(start, i);
			if (wordSet.has(str) && canBreak(i)) {
				// 如果前缀部分是单词，且剩余子串能break，返回真
				memoArr[start] = true;
				return true;
			} // 如果前缀部分不是单词，就不会执行canBreak(i)。进入下一轮迭代，再切出一个前缀串，再试
		}
		memoArr[start] = false;
		return false; // 指针i怎么划分，都没有返回true，则返回false
	};

	return canBreak(0); // 递归的入口，从0到末尾的子串能否break
};

let s = 'leetcode',
	wordList = ['leet', 'cod'];

console.log(wordBreak(s, wordList)); //jing-log
