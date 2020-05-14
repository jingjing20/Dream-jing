
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * (len - i));  //向下取整
    [arr[len - i - 1], arr[randomIndex]] = [arr[randomIndex], arr[len - i - 1]]
  }
  return arr
}

console.log(shuffle(arr))