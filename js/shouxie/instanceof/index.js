class car {
  price = 200;
  year = 2020;
  constructor() {

  }
}

//递归模拟实现一个 instanceof 功能
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left);
  console.log(proto)
  console.log(right.prototype)
  console.log(left.__proto__)
  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto)
  }
}

let jing = new car()
console.log(jing.price)
console.log(myInstanceof(jing, car))