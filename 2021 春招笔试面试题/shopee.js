// 删除连续重复的元素

// function deleteStr(str) {
// 	let arr = str.split('');
// 	let res = [arr[0]];
// 	for (let i = 1; i < arr.length; i++) {
// 		if (arr[i] !== arr[i - 1]) {
// 			res.push(arr[i]);
// 		} else {
// 			continue;
// 		}
// 	}
// 	return res.join('');
// }

// let str = '12333nfos88juuufbvbvjsm';
// console.log(deleteStr(str)); //jing-log

// 12333nfos88juuufbvbvjsm
// 123nfos8jufbvbvjsm

// 大数相乘

// let daShuXC = (num01, num02) => {
// 	if (num01 === '0' || num02 === '0') return '0';
// 	let len01 = num01.length;
// 	let len02 = num02.length;
// 	let res = [];
// 	for (let i = len01 - 1; i >= 0; i--) {
// 		for (let j = len02 - 1; j >= 0; j--) {
// 			let id01 = i + j;
// 			let id02 = i + j + 1;
// 			let temp = num01[i] * num02[j] + (res[id02] || 0);
// 			res[id02] = temp % 10;
// 			res[id01] = Math.floor(temp / 10) + (res[id01] || 0);
// 		}
// 	}
// 	return res.join('').replace(/^0/, '');
// };

// console.log(daShuXC('12', '56')); //jing-log

// 数组重新排序，按照字符串的长度从小到大排序，如果有相同长度的则保持原有的相对顺序。同时保证第一个元素的第一个字母大写
// let strs = ['Jing', 'hao', 'yong', 'yuan', 'zai', 'yi', 'qi'];

// strs[0] = strs[0].toLowerCase();
// console.log(strs); //jing-log

// let res = strs.sort((a, b) => {
// 	return a.length - b.length;
// });
// res[0] = res[0].slice(0, 1).toUpperCase() + res[0].slice(1);
// console.log(res); //jing-log
// console.log(strs.join()); //jing-log
// console.log(strs.join('')); //jing-log
// console.log(strs.join(' ')); //jing-log
