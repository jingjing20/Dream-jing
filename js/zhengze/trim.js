/**
 * 
 * @param {String} arr 
 */
// function trim(arr) {
//   return arr.replace(/^\s+|\s+$/g, '')
// }
// console.log(trim('   jijikkl   '))


function trim(str) {
  var reg = /^\s+|\s+$/g;

  // \s 代表匹配空格
  //  ^ 匹配输入的开始 例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。
  // + 匹配前面一个表达式 1 次或者多次 例如，/a+/ 会匹配 "candy" 中的 'a' 和 "caaaaaaandy" 中所有的 'a'
  // $ 匹配输入的结束 例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'。
  str = str.replace(reg, "");
  console.log(str);
}
trim("   abc123   ");