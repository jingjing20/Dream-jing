var sum = function () {
  let i, sum = 0;
  for (i = 0; i< arguments.length; i++) {
    sum += arguments[i]
  }
  return sum;
}

console.log(sum(2,8,15,9))


// arguments不是一个真正的数组 它只是一个"类似数组(array-like)"的对象。
// arguments拥有一个length属性 但它没有任何数组方法