function match(string) {
	let state = start;
	for (const c of string) {
		state = state(c);
		console.log(c, '--------'); //jing-log
	}
	return state === end;
}

function start(c) {
	if (c === 'a') {
		return findA;
	} else {
		return start(c);
	}
}

function findA(c) {
	if (c === 'b') {
		return findB;
	} else {
		return start(c);
	}
}
function findB(c) {
	console.log(c); //jing-log
	if (c === 'c') {
		return end;
	} else {
		return start(c);
	}
}

// function findC(c) {
// 	if (c === 'c') {
// 		return end;
// 	} else {
// 		return start;
// 	}
// }

function end() {
	return end;
}

console.log(match('aabc')); //jing-log
