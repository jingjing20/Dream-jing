// 利用setTimeout函数的第三个参数

// function closure() {
//   for (var i = 1; i < 10; i++) {
//     setTimeout((j) => {
//       console.log(j)
//     }, i * 1000, i)
//   }
// }

// 用let
function closure() {
  for (let i = 1; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}

closure()