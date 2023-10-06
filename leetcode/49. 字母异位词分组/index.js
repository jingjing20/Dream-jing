/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let index = 0; index < strs.length; index++) {
        const target = strs[index].split('').sort().join('');
		if (map.has(target)) {
			let list = map.get(target);
			list.push(strs[index]);
			map.set(target, list);
		} else {
			map.set(target, [strs[index]])
		}
    }
    return [...map.values()];
};

let arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(arr)); //jing-log
