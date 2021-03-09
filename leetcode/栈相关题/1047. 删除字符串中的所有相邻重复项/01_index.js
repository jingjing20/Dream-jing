/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
	let res = '';
	const dfs = (s) => {
		for (let i = 1; i < s.length; i++) {
			if (s[i] === s[i - 1]) {
				s = s.substring(0, i - 1) + s.substring(i + 1);
				res = s;
				dfs(s);
			}
		}
	};
	dfs(S);
	return res;
};

// 递归 超时了、、、
