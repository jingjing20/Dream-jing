let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1')
  }, 2000);
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise2-reject------------')
  }, 1000);
})

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise3')
  }, 3000);
})

Promise.race([promise2, promise3, promise1]).then((res) => {
  console.log(res)
}).catch((res) => {
  console.log(res)
})

