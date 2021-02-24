/**
 * 月份记得加 1
 * getDay()获取的是星期几对应的数字 getDate()才是获取日的
 * @param {Date} time
 */
function translate(time) {
	time = new Date(time);
	let interval = new Date().getTime() - time;
	let res = '';
	switch (true) {
		case interval <= 60 * 1000:
			res = '刚刚';
			break;
		case 60 * 1000 < interval && interval <= 60 * 1000 * 2:
			res = '2分钟前';
			break;
		case 60 * 1000 * 2 < interval && interval <= 60 * 1000 * 60:
			res = '1小时前';
			break;
		case 60 * 1000 * 60 < interval && interval <= 60 * 1000 * 60 * 24:
			res = '1天前';
			break;
		case 60 * 1000 * 60 * 24 < interval && interval <= 60 * 1000 * 60 * 24 * 2:
			res = '2天前';
			break;
		case interval > 60 * 1000 * 60 * 24 * 2:
			res = time.getFullYear() + '-' + addZero(time.getMonth() + 1) + '-' + addZero(time.getDate());
		default:
			break;
	}
	return res;
}
// 加0
function addZero(number) {
	return number < 10 ? '0' + number : number;
}

console.log(translate(1614057000149)); //jing-log
