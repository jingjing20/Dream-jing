/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
	let len = s.length;
	let memoArr = new Array(len);
	let wordSet = new Set(wordDict);
	const canBreak = (start) => {
		if (start === len) return true;
		if (memoArr[start] !== undefined) return memoArr[start];
		for (let i = start + 1; i <= len; i++) {
			let str = s.substring(start, i);
			if (wordSet.has(str) && canBreak(i)) {
				memoArr[start] = true;
				return true;
			}
		}
		memoArr[start] = false;
		return false;
	};
	return canBreak(0);
}
