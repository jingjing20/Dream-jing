// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(console.log('promise1'))
//   }, 1000);
// })

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(console.log('promise2'))
//   }, 2000);
// })

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(console.log('promise3'))
//   }, 3000);
// })

// Promise.all([promise1, promise2, promise3]).then(() => {
//   console.log('promise.all')
// })

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1')
  }, 1000);
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise2-reject------------')
  }, 2000);
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise3')
  }, 3000);
})

Promise.all([promise1, promise2]).then((res) => {
  console.log('promise.all')
}).catch((res) => {
  console.log(res)
})

