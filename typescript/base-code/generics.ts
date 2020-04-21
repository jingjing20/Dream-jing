// 泛型
function echo<T>(arg: T): T {
  return arg
}

let result = echo('jing')

function swap<T, U>(tup: [T, U]): [U, T] {
  return [tup[1], tup[0]];
}
let jing = swap([123, 'jing'])
jing[0].length
jing[1].toFixed

// 交换了位置