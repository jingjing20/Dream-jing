function convertNumberToString(number, x) {
	let integer = Math.floor(number);
	let fraction = number - integer;
	let string = '';
	while (integer > 0) {
		string = String(integer % x) + string;
		integer = Math.floor(integer / x);
	}
	return string;
}
console.log(convertNumberToString(108.888, 10)); //jing-log
