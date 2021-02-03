const mergeSortRec = function (array) {
	const merge = function (left, right) {
		let final = [];
		while (left.length && right.length) {
			final.push(left[0] <= right[0] ? left.shift() : right.shift());
		}
		return final.concat(left.concat(right));
	};

	let length = array.length;
	if (length === 1) {
		return array;
	}
	let mid = Math.floor(length / 2),
		left = array.slice(0, mid),
		right = array.slice(mid, length);
	return merge(mergeSortRec(left), mergeSortRec(right));
};

let arr = [3, 5, 2, 4, 1];
console.log(mergeSortRec(arr)); //jing-log
