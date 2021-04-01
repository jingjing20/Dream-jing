const str = 'ATextHello';

// 判断是否是大写
function isA(s) {
  if (s === s.toUpperCase()) {
    // 是大写
    return true;
  } else {
    return false;
  }
}

function translate(str) {
  let str_arr = str.split('');
  str_arr.forEach((value, index) => {
    if (isA(value)) {
      str_arr[index] = '_' + value.toLowerCase();
    }
  });
  return str_arr.join('').slice(1);
}
console.log(translate(str));
