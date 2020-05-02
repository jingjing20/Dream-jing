// function closure() {
//   for (var i = 1; i < 10; i++) {
//     setTimeout(() => {
//       console.log(i)
//     }, i * 1000)
//   }
// }

function closure() {
  for (var i = 0; i < 10; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j)
      }, i * 1000)
    })(i)
  }
}

closure()
