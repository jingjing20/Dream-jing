var myObject = {
  value: 0,
  jingjing: function (jing) {
    return this.value + (typeof jing === 'number' ? jing : 1);
  }
}

console.log(myObject.jingjing())
console.log(myObject.jingjing(5))

