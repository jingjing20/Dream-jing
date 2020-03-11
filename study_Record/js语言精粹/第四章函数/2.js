var add = function(a, b) {
  return a + b;
}

var array = [3,8,5]
var sum = add.apply(null,array);
console.log(sum)