// let str = 'ai_jing_hao';

// function translate(str) {
//   let reg = /_/;
//   let str_jing = str.split('');
//   // console.log(str_jing);
//   str_jing.forEach((item, index) => {
//     if (reg.test(item)) {
//       str_jing[index + 1] = str_jing[index + 1].toUpperCase();
//       str_jing.splice(index, 1);
//     }
//   });
//   let res = str_jing.join('');
//   console.log(res);
//   return res[0].toUpperCase() + res.slice(1);
// }

// console.log(translate(str));

let jingjing = 'AiJingHao';
function isUpperCase(item) {
  if (item === item.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
function translate(str) {
  let test = str.split('');
  test.forEach((item, index) => {
    if (isUpperCase(item)) {
      test[index] = '_' + test[index].toLowerCase();
    }
  });
  return test.join('').slice(1);
}
console.log(translate(jingjing));

//splice 改变原数组 slice 不改变原数组
//
