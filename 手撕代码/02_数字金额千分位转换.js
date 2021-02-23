function formatRegExp1(number) {
	var pattern = /(?=(\B\d{3})+\.)/g;
	return number.toFixed(2).toString().replace(pattern, ',');
}

function formatRegExp2(number) {
	var pattern = /(\d)(?=(?:\d{3})+\.)/g;
	return number.toFixed(2).toString().replace(pattern, '$1,');
}

function format(number) {
	number = number.toFixed(2).toString();
	var dotIndex = number.indexOf('.');
	var part = number.substring(0, dotIndex);
	var flag = 0;
	var result = '';
	for (var i = part.length - 1; i >= 0; i--) {
		result = part[i] + result;
		if (i !== 0 && ++flag === 3) {
			result = ',' + result;
			flag = 0;
		}
	}
	return result + number.substring(dotIndex);
}

console.log(format(114290023));
console.log(formatRegExp1(2114290023));
console.log(formatRegExp2(65748930243));
