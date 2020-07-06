const a = 'a_text_hello';
// 转成驼峰命名法
function translate(str) {
  let reg = /_/;
  let str_arr = str.split('');
  console.log(str_arr);
  str_arr.forEach((value, index) => {
    if (reg.test(value)) {
      let next_arr = str_arr[index + 1];
      str_arr[index + 1] = next_arr.toUpperCase();
      str_arr.splice(index, 1);
    }
  });
  let str_arr_res = str_arr.join('');
  return str_arr_res[0].toUpperCase() + str_arr_res.slice(1);
}

console.log(translate(a));
