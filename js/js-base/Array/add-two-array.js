// 数组扁平化

let newArr = []
function addArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      addArray(arr[i])
    } else {
      newArr.push(arr[i])
    }
  }
  return [...new Set(newArr)].sort((a, b) => a - b)
}

let arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];


console.log(addArray(arr))