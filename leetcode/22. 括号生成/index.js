function generateParenthesis(n) {
	let res = [];
	const digui = (cur, left, right) => {
		if (cur.length === 2 * n) {
			res.push(cur);
			return;
		}
		if (left < n) {
			digui(cur + '(', left + 1, right);
		}
		if (right < left) {
			digui(cur + ')', left, right + 1);
		}
	};
	digui('', 0, 0);
	return res;
}
console.log(generateParenthesis(3));
