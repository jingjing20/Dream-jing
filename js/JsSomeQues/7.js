// 统计一个字符串中出现最多的字符。

var str = 'jingjinghehaohao';
var o = {};
for (var i = 0; i < str.length; i++) {
  var char = str.charAt(i);
  if (o[char]) {  //obj.name 和 obj['name']
    o[char]++     //如果对象有这个属性了，就给这个属性自增1
  } else {
    o[char] = 1   //如果对象没这个属性，就个这个属性值设为1
  }
}
console.log(o);
var num = 0;
var char = '';
for (var i in o) { //for in循环 遍历对象的属性和方法
  if (num < o[i]) {
    num = o[i];
    number = i
  }
}
console.log('最多出现的字符是:' + number + ',' + '次数是' + num)