// 请将数组
// [[1, 2, 4], [1, 2, 3], [1, 3, 4], [1, 3, 2]]
// 快速排序成
// [[1, 2, 3], [1, 2, 4], [1, 3, 2], [1, 3, 4]]

let arr = [[1, 2, 4], [1, 2, 3], [1, 3, 4], [1, 3, 2]]
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].join('')
}
console.log(arr)
arr.sort((a, b) => a - b)
console.log(arr)
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].split('').map(item => {
    return parseInt(item)
  })
}
console.log(arr)
// console.log(JSON.stringify(arr))



