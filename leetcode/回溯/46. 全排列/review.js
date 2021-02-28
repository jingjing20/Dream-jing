/**
 *
 * @param {Array} nums
 */
const permute = (nums) => {
	let res = [];
	const backtrack = (path) => {
		if (path.length === nums.length) {
			res.push(path);
		}
		nums.forEach((item) => {
			if (path.includes(item)) return;
			backtrack(path.concat(item));
		});
	};
	backtrack([]);
	return res;
};

let arr = [1, 2, 3];
console.log(permute(arr)); //jing-log
