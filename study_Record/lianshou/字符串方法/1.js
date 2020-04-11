var reverseWords = function (s) {
  return s.split(' ').filter(item => item).reverse().join(' ')
};

console.log(reverseWords("     hello world!  "))
let jing = "     hello   world!  ";
console.log(jing.trim().split(' '))
// let hao = jing.split(' ');
// console.log(hao)
// let jinghao = hao.filter(item => item)
// console.log(jinghao.join(' '))