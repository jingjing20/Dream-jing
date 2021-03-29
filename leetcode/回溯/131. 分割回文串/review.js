/**
 *
 * @param {String} s
 */
function partition(s) {
	let res = [];
	let n = s.length;
	const dfs = (temp, start) => {
		if (start === n) {
			res.push(temp.slice());
			return;
		}

		for (let i = start; i < n; i++) {
			if (isPalindrome(s, start, i)) {
				temp.push(s.substring(start, i + 1));
				dfs(temp, i + 1);
				temp.pop();
			}
		}
	};
	dfs([], 0);
	return res;
}

function isPalindrome(s, l, r) {
	while (l < r) {
		if (s[l] !== s[r]) return false;
		l++;
		r--;
	}
	return true;
}
