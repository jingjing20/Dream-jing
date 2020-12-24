/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let map = new Map();
	for (let i = 0; i < strs.length; i++) {
		let str = strs[i].split('').sort().join('');
		if (map.has(str)) {
			let temp = map.get(str);
			temp.push(strs[i]);
			map.set(str, temp);
		} else {
			map.set(str, [strs[i]]);
		}
	}
	return [...map.values()];
};

let arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(arr)); //jing-log
