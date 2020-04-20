// 函数声明
// function add(x: number, y: number, z?): number {
//   if (typeof z === 'number') {
//     return x + y + z;
//   } else {
//     return x + y;
//   }
// }

// let jing = add(5, 5, 5)

// 函数表达式
const add = function (x: number, y: number, z?): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

let add2: (x: number, y: number, z?: number) => number = add

// let hao = 'string';
// hao = 123
