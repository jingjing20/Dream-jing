function testPhoneNumber(number) {
	let reg = /1[3-9]\d{9}/;
	if (reg.test(number)) {
		console.log(number); //jing-log
	} else {
		console.log('请输入正确的手机号码！'); //jing-log
	}
}

testPhoneNumber(18779953442);
