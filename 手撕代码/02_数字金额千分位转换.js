// 方法一
function format(str) {
	str = str + '';
	let length = str.indexOf('.');
	let result = '',
		stuffix = '',
		count = 0;
	if (length === -1) {
		length = str.length;
	} else {
		stuffix = str.substring(length);
	}
	for (let i = 0; i < length; i++) {
		count++;
		result += str.charAt(i);
		if (i !== length - 1 && count % 3 === 0) {
			result += ',';
		}
	}
	result += stuffix;
	return result;
}

console.log(format(114290023.6725));

// 方法二: toLocaleString()方法
const res = (114290023.6725).toLocaleString();
console.log(res); //jing-log

// 如果是 4 位以上数字，则 toLocaleString 会让数字三位三位一分隔。
// 小数位 toLocaleString 只保留三位小数，第三位小数会根据第四位小数“四舍五入“得到。
// 注意的是 toLocaleString 在IE下是不保留小数位的。
